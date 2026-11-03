"use client";

import { useMemo, useState, type FormEvent } from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Select } from "../components/ui/select";
import {
  demoJobs,
  type CareerLevel,
  type DemoJob,
  type DemoJobCategory,
  type EmploymentType,
} from "./demo-jobs";

type CategoryFilter = "all" | DemoJobCategory;
type LevelFilter = "all" | CareerLevel;
type EmploymentFilter = "all" | EmploymentType;
type SalaryFilter = "all" | "under-10" | "10-20" | "20-30" | "over-30";
type DateFilter = "all" | "1" | "7" | "30";
type SortOption = "newest" | "salary-desc" | "salary-asc";

const categoryOptions: { value: CategoryFilter; label: string }[] = [
  { value: "all", label: "Tất cả lĩnh vực" },
  { value: "Backend", label: "Backend" },
  { value: "Data", label: "Data" },
  { value: "Frontend", label: "Frontend" },
  { value: "DevOps", label: "DevOps" },
  { value: "QA", label: "QA / Testing" },
];

const levelOptions: { value: LevelFilter; label: string }[] = [
  { value: "all", label: "Tất cả cấp bậc" },
  { value: "Intern", label: "Intern" },
  { value: "Fresher", label: "Fresher" },
  { value: "Junior", label: "Junior" },
  { value: "Middle", label: "Middle" },
  { value: "Senior", label: "Senior" },
];

function JobCard({ job }: { job: DemoJob }) {
  return (
    <Card className="p-4 transition-colors duration-150 hover:border-primary/40 sm:p-5">
      <article>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="primary">{job.category}</Badge>
              <Badge variant="neutral">{job.level}</Badge>
              <span className="text-small text-muted-foreground">
                {job.postedLabel}
              </span>
            </div>
            <h3 className="mt-2 text-card-title font-semibold text-foreground">
              {job.title}
            </h3>
            <p className="mt-1 text-body text-muted-foreground">
              {job.company}
            </p>
          </div>
          <div className="shrink-0 sm:text-right">
            <p className="text-body-emphasis font-semibold text-foreground">
              {job.salaryLabel}
            </p>
            <p className="text-small text-muted-foreground">VNĐ / tháng</p>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-small text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              className="size-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M16 8.3c0 4.1-6 9-6 9s-6-4.9-6-9a6 6 0 1 1 12 0Z" />
              <circle cx="10" cy="8" r="2" />
            </svg>
            {job.location}
          </span>
          <span>{job.employmentType}</span>
          <span className="inline-flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-subtle-foreground" />
            {job.source}
          </span>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {job.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-sm bg-surface-muted px-2 py-1 text-small text-muted-foreground"
            >
              {skill}
            </span>
          ))}
        </div>

        <details className="group mt-4 border-t border-border pt-3">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-small font-semibold text-primary outline-offset-4 marker:hidden focus-visible:outline-2 focus-visible:outline-primary [&::-webkit-details-marker]:hidden">
            <span>Xem mô tả và yêu cầu</span>
            <span
              className="text-lg leading-none transition-transform group-open:rotate-180"
              aria-hidden="true"
            >
              ⌄
            </span>
          </summary>
          <div className="mt-3 space-y-3">
            <p className="text-body text-muted-foreground">{job.description}</p>
            <div>
              <p className="text-small font-semibold text-foreground">
                Yêu cầu chính
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-body text-muted-foreground">
                {job.requirements.map((requirement) => (
                  <li key={requirement}>{requirement}</li>
                ))}
              </ul>
            </div>
          </div>
        </details>
      </article>
    </Card>
  );
}

export function JobsBrowser() {
  const [draftKeyword, setDraftKeyword] = useState("");
  const [keyword, setKeyword] = useState("");
  const [level, setLevel] = useState<LevelFilter>("all");
  const [salary, setSalary] = useState<SalaryFilter>("all");
  const [location, setLocation] = useState("all");
  const [employment, setEmployment] = useState<EmploymentFilter>("all");
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [posted, setPosted] = useState<DateFilter>("all");
  const [sort, setSort] = useState<SortOption>("newest");

  const filteredJobs = useMemo(() => {
    const normalizedKeyword = keyword.trim().toLocaleLowerCase("vi");

    const filtered = demoJobs.filter((job) => {
      const searchable = [
        job.title,
        job.company,
        job.location,
        job.category,
        job.level,
        job.employmentType,
        ...job.skills,
      ]
        .join(" ")
        .toLocaleLowerCase("vi");

      const matchesKeyword =
        normalizedKeyword.length === 0 ||
        searchable.includes(normalizedKeyword);
      const matchesLevel = level === "all" || job.level === level;
      const matchesCategory = category === "all" || job.category === category;
      const matchesLocation = location === "all" || job.location === location;
      const matchesEmployment =
        employment === "all" || job.employmentType === employment;
      const matchesPosted =
        posted === "all" || job.postedDaysAgo <= Number(posted);
      const matchesSalary =
        salary === "all" ||
        (salary === "under-10" && job.salaryMin < 10) ||
        (salary === "10-20" && job.salaryMin <= 20 && job.salaryMax >= 10) ||
        (salary === "20-30" && job.salaryMin <= 30 && job.salaryMax >= 20) ||
        (salary === "over-30" && job.salaryMax > 30);

      return (
        matchesKeyword &&
        matchesLevel &&
        matchesCategory &&
        matchesLocation &&
        matchesEmployment &&
        matchesPosted &&
        matchesSalary
      );
    });

    return filtered.sort((a, b) => {
      if (sort === "salary-desc") return b.salaryMax - a.salaryMax;
      if (sort === "salary-asc") return a.salaryMin - b.salaryMin;
      return a.postedDaysAgo - b.postedDaysAgo;
    });
  }, [category, employment, keyword, level, location, posted, salary, sort]);

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setKeyword(draftKeyword);
  }

  function clearFilters() {
    setDraftKeyword("");
    setKeyword("");
    setLevel("all");
    setSalary("all");
    setLocation("all");
    setEmployment("all");
    setCategory("all");
    setPosted("all");
    setSort("newest");
  }

  const hasFilters =
    keyword !== "" ||
    draftKeyword !== "" ||
    level !== "all" ||
    salary !== "all" ||
    location !== "all" ||
    employment !== "all" ||
    category !== "all" ||
    posted !== "all";

  return (
    <div className="space-y-5">
      <Card className="space-y-3 p-3 sm:p-4">
        <form
          onSubmit={handleSearch}
          className="flex flex-col gap-2 sm:flex-row"
          role="search"
          aria-label="Tìm kiếm việc làm"
        >
          <label className="sr-only" htmlFor="job-keyword">
            Từ khóa tìm kiếm
          </label>
          <div className="relative min-w-0 flex-1">
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-subtle-foreground"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <circle cx="8.7" cy="8.7" r="5.7" />
              <path d="m13 13 4 4" strokeLinecap="round" />
            </svg>
            <Input
              id="job-keyword"
              type="search"
              className="h-11 pl-10"
              placeholder="Tìm theo chức danh, kỹ năng hoặc công ty..."
              value={draftKeyword}
              onChange={(event) => setDraftKeyword(event.target.value)}
            />
          </div>
          <Button type="submit" size="lg" className="sm:min-w-[132px]">
            Tìm kiếm
          </Button>
        </form>

        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-small font-semibold text-foreground">Lọc nhanh</p>
          {hasFilters ? (
            <button
              type="button"
              onClick={clearFilters}
              className="text-small font-medium text-primary hover:text-primary-hover"
            >
              Xóa tất cả bộ lọc
            </button>
          ) : null}
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-6">
          <Select
            aria-label="Lọc theo cấp bậc"
            value={level}
            onChange={(event) => setLevel(event.target.value as LevelFilter)}
          >
            {levelOptions.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </Select>

          <Select
            aria-label="Lọc theo mức lương"
            value={salary}
            onChange={(event) => setSalary(event.target.value as SalaryFilter)}
          >
            <option value="all">Tất cả mức lương</option>
            <option value="under-10">Dưới 10 triệu</option>
            <option value="10-20">10–20 triệu</option>
            <option value="20-30">20–30 triệu</option>
            <option value="over-30">Trên 30 triệu</option>
          </Select>

          <Select
            aria-label="Lọc theo địa điểm"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          >
            <option value="all">Tất cả địa điểm</option>
            <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
            <option value="Hà Nội">Hà Nội</option>
            <option value="Đà Nẵng">Đà Nẵng</option>
            <option value="Remote">Remote</option>
          </Select>

          <Select
            aria-label="Lọc theo hình thức làm việc"
            value={employment}
            onChange={(event) =>
              setEmployment(event.target.value as EmploymentFilter)
            }
          >
            <option value="all">Tất cả hình thức</option>
            <option value="Toàn thời gian">Toàn thời gian</option>
            <option value="Bán thời gian">Bán thời gian</option>
            <option value="Thực tập">Thực tập</option>
          </Select>

          <Select
            aria-label="Lọc theo lĩnh vực"
            value={category}
            onChange={(event) =>
              setCategory(event.target.value as CategoryFilter)
            }
          >
            {categoryOptions.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </Select>

          <Select
            aria-label="Lọc theo thời gian đăng"
            value={posted}
            onChange={(event) => setPosted(event.target.value as DateFilter)}
          >
            <option value="all">Mọi thời điểm</option>
            <option value="1">24 giờ qua</option>
            <option value="7">7 ngày qua</option>
            <option value="30">30 ngày qua</option>
          </Select>
        </div>
      </Card>

      <section aria-labelledby="job-results-title" className="space-y-3">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1
                id="job-results-title"
                className="text-section-title font-semibold text-foreground"
              >
                Cơ hội việc làm
              </h1>
              <Badge variant="info">Dữ liệu minh họa</Badge>
            </div>
            <p
              className="mt-1 text-small text-muted-foreground"
              role="status"
              aria-live="polite"
            >
              {filteredJobs.length} tin mẫu phù hợp với điều kiện tìm kiếm
              {" · "}Chưa kết nối API tuyển dụng
            </p>
          </div>
          <label className="flex items-center gap-2 text-small text-muted-foreground">
            <span className="shrink-0">Sắp xếp</span>
            <Select
              className="w-auto min-w-[164px]"
              value={sort}
              onChange={(event) => setSort(event.target.value as SortOption)}
            >
              <option value="newest">Mới đăng trước</option>
              <option value="salary-desc">Lương cao trước</option>
              <option value="salary-asc">Lương thấp trước</option>
            </Select>
          </label>
        </div>

        {filteredJobs.length > 0 ? (
          <div className="space-y-3">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <Card className="px-5 py-12 text-center">
            <div className="mx-auto flex size-11 items-center justify-center rounded-lg bg-surface-muted text-muted-foreground">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="size-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <circle cx="10.5" cy="10.5" r="6.5" />
                <path d="m16 16 4 4" strokeLinecap="round" />
              </svg>
            </div>
            <h2 className="mt-3 text-card-title font-semibold text-foreground">
              Không tìm thấy việc làm phù hợp
            </h2>
            <p className="mt-1 text-body text-muted-foreground">
              Thử thay đổi từ khóa hoặc nới lỏng một vài bộ lọc.
            </p>
            <Button
              variant="secondary"
              className="mt-4"
              onClick={clearFilters}
            >
              Xóa bộ lọc
            </Button>
          </Card>
        )}
      </section>
    </div>
  );
}
