"use client";

import { useMemo, useState, type FormEvent } from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Select } from "../components/ui/select";
import { demoJobs, type DemoJob, type DemoJobCategory } from "./demo-jobs";

type CategoryFilter = "Tất cả" | DemoJobCategory;
type SalaryFilter = "all" | "under-20" | "20-30" | "over-30";
type DateFilter = "all" | "1" | "7" | "30";
type SortOption = "newest" | "salary-desc" | "salary-asc";

const categories: CategoryFilter[] = [
  "Tất cả",
  "Backend",
  "Data",
  "Frontend",
  "DevOps",
  "QA",
];

const categoryLabels: Record<CategoryFilter, string> = {
  "Tất cả": "Tất cả lĩnh vực",
  Backend: "Backend",
  Data: "Data",
  Frontend: "Frontend",
  DevOps: "DevOps",
  QA: "QA / Testing",
};

function formatSalary(job: DemoJob) {
  return job.salaryLabel;
}

function JobCard({ job }: { job: DemoJob }) {
  return (
    <Card className="p-4 transition-colors duration-150 hover:border-primary/40 sm:p-5">
      <article>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="primary">{job.category}</Badge>
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
              {formatSalary(job)}
            </p>
            <p className="text-small text-muted-foreground">VNĐ / tháng</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-small text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <svg aria-hidden="true" viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M16 8.3c0 4.1-6 9-6 9s-6-4.9-6-9a6 6 0 1 1 12 0Z" />
              <circle cx="10" cy="8" r="2" />
            </svg>
            {job.location}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <svg aria-hidden="true" viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="10" cy="10" r="7" />
              <path d="M10 6v4l2.5 1.5" strokeLinecap="round" />
            </svg>
            {job.postedLabel}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-subtle-foreground" />
            {job.source}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
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
            <span className="text-lg leading-none transition-transform group-open:rotate-180" aria-hidden="true">
              ⌄
            </span>
          </summary>
          <div className="mt-3 space-y-3">
            <p className="text-body text-muted-foreground">{job.description}</p>
            <div>
              <p className="text-small font-semibold text-foreground">Yêu cầu chính</p>
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
  const [category, setCategory] = useState<CategoryFilter>("Tất cả");
  const [location, setLocation] = useState("all");
  const [salary, setSalary] = useState<SalaryFilter>("all");
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
        ...job.skills,
      ]
        .join(" ")
        .toLocaleLowerCase("vi");

      const matchesKeyword =
        normalizedKeyword.length === 0 ||
        searchable.includes(normalizedKeyword);
      const matchesCategory =
        category === "Tất cả" || job.category === category;
      const matchesLocation = location === "all" || job.location === location;
      const matchesPosted =
        posted === "all" || job.postedDaysAgo <= Number(posted);
      const matchesSalary =
        salary === "all" ||
        (salary === "under-20" && job.salaryMax < 20) ||
        (salary === "20-30" && job.salaryMin <= 30 && job.salaryMax >= 20) ||
        (salary === "over-30" && job.salaryMax > 30);

      return (
        matchesKeyword &&
        matchesCategory &&
        matchesLocation &&
        matchesPosted &&
        matchesSalary
      );
    });

    return filtered.sort((a, b) => {
      if (sort === "salary-desc") return b.salaryMax - a.salaryMax;
      if (sort === "salary-asc") return a.salaryMin - b.salaryMin;
      return a.postedDaysAgo - b.postedDaysAgo;
    });
  }, [category, keyword, location, posted, salary, sort]);

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setKeyword(draftKeyword);
  }

  function clearFilters() {
    setDraftKeyword("");
    setKeyword("");
    setCategory("Tất cả");
    setLocation("all");
    setSalary("all");
    setPosted("all");
    setSort("newest");
  }

  const hasFilters =
    keyword !== "" ||
    category !== "Tất cả" ||
    location !== "all" ||
    salary !== "all" ||
    posted !== "all";

  return (
    <div className="space-y-5">
      <div
        role="note"
        className="flex flex-col gap-1 rounded-md border border-info/20 bg-info-soft px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
      >
        <p className="text-small font-semibold text-info">
          Bản xem trước giao diện — dữ liệu minh họa
        </p>
        <p className="text-small text-info/80">
          Chưa kết nối API tuyển dụng. Không sử dụng các tin này như dữ liệu thực.
        </p>
      </div>

      <Card className="p-4 sm:p-5">
        <form
          onSubmit={handleSearch}
          className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto]"
        >
          <label className="block min-w-0">
            <span className="mb-1.5 block text-small font-medium text-foreground">
              Từ khóa
            </span>
            <Input
              type="search"
              placeholder="Ví dụ: Data Engineer, Python, SQL..."
              value={draftKeyword}
              onChange={(event) => setDraftKeyword(event.target.value)}
            />
          </label>
          <div className="flex items-end">
            <Button type="submit" className="w-full sm:w-auto">
              <svg aria-hidden="true" viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.7">
                <circle cx="8.7" cy="8.7" r="5.7" />
                <path d="m13 13 4 4" strokeLinecap="round" />
              </svg>
              Tìm việc
            </Button>
          </div>
        </form>
      </Card>

      <div className="grid items-start gap-5 xl:grid-cols-[248px_minmax(0,1fr)]">
        <aside aria-label="Bộ lọc việc làm">
          <Card className="p-4">
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-card-title font-semibold text-foreground">
                Bộ lọc
              </h2>
              {hasFilters ? (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-small font-medium text-primary hover:text-primary-hover"
                >
                  Xóa lọc
                </button>
              ) : null}
            </div>

            <div className="mt-4 space-y-4">
              <label className="block">
                <span className="mb-1.5 block text-small font-medium text-foreground">
                  Lĩnh vực
                </span>
                <Select
                  value={category}
                  onChange={(event) =>
                    setCategory(event.target.value as CategoryFilter)
                  }
                >
                  {categories.map((item) => (
                    <option key={item} value={item}>
                      {categoryLabels[item]}
                    </option>
                  ))}
                </Select>
              </label>

              <label className="block">
                <span className="mb-1.5 block text-small font-medium text-foreground">
                  Địa điểm
                </span>
                <Select
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                >
                  <option value="all">Tất cả địa điểm</option>
                  <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                  <option value="Hà Nội">Hà Nội</option>
                  <option value="Đà Nẵng">Đà Nẵng</option>
                  <option value="Remote">Remote</option>
                </Select>
              </label>

              <label className="block">
                <span className="mb-1.5 block text-small font-medium text-foreground">
                  Mức lương
                </span>
                <Select
                  value={salary}
                  onChange={(event) =>
                    setSalary(event.target.value as SalaryFilter)
                  }
                >
                  <option value="all">Tất cả mức lương</option>
                  <option value="under-20">Dưới 20 triệu</option>
                  <option value="20-30">20–30 triệu</option>
                  <option value="over-30">Trên 30 triệu</option>
                </Select>
              </label>

              <label className="block">
                <span className="mb-1.5 block text-small font-medium text-foreground">
                  Ngày đăng
                </span>
                <Select
                  value={posted}
                  onChange={(event) =>
                    setPosted(event.target.value as DateFilter)
                  }
                >
                  <option value="all">Tất cả thời gian</option>
                  <option value="1">24 giờ qua</option>
                  <option value="7">7 ngày qua</option>
                  <option value="30">30 ngày qua</option>
                </Select>
              </label>
            </div>
          </Card>
        </aside>

        <section aria-labelledby="job-results-title" className="min-w-0 space-y-3">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2
                id="job-results-title"
                className="text-section-title font-semibold text-foreground"
              >
                Cơ hội việc làm
              </h2>
              <p className="mt-1 text-small text-muted-foreground">
                {filteredJobs.length} tin minh họa phù hợp với điều kiện tìm kiếm
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
                <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <circle cx="10.5" cy="10.5" r="6.5" />
                  <path d="m16 16 4 4" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="mt-3 text-card-title font-semibold text-foreground">
                Không tìm thấy việc làm phù hợp
              </h3>
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
    </div>
  );
}
