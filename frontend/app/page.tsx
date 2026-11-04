import Link from "next/link";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Select } from "./components/ui/select";
import { HomeHeroHeading } from "./components/home-hero-heading";

const categories = [
  { label: "Data", value: "Data", description: "Data Engineer, Data Analyst, BI" },
  { label: "Backend", value: "Backend", description: "Backend Engineer, API Developer" },
  { label: "Frontend", value: "Frontend", description: "Frontend Engineer, UI Developer" },
  { label: "DevOps", value: "DevOps", description: "DevOps, Cloud, Infrastructure" },
  { label: "QA / Testing", value: "QA", description: "QA Engineer, Automation Tester" },
] as const;

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="mx-auto w-full max-w-4xl pt-2 text-center sm:pt-6">
        <HomeHeroHeading />

        <Card className="mx-auto mt-5 max-w-3xl p-5 text-left sm:p-6">
          <p className="text-body-emphasis font-semibold text-foreground">
            Hiểu được những khó khăn đó.
          </p>
          <p className="mt-2 text-body leading-relaxed text-muted-foreground">
            GomViệc tổng hợp việc làm từ nhiều nền tảng, giúp bạn tìm kiếm và lọc
            công việc nhanh hơn mà không cần lướt từng website.
          </p>
        </Card>
      </section>

      <section aria-labelledby="job-search-title" className="mx-auto mt-8 w-full max-w-5xl">
        <Card className="space-y-4 p-4 sm:p-5">
          <h2 id="job-search-title" className="text-card-title font-semibold text-foreground">
            Tìm kiếm việc làm
          </h2>

          <form action="/jobs" method="get" role="search" aria-label="Tìm kiếm việc làm IT" className="space-y-3">
            <div className="flex flex-col gap-2 sm:flex-row">
              <label className="sr-only" htmlFor="home-keyword">
                Vị trí, kỹ năng hoặc tên công ty
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
                  id="home-keyword"
                  name="keyword"
                  type="search"
                  placeholder="Vị trí, kỹ năng hoặc tên công ty..."
                  className="h-12 pl-10"
                />
              </div>
              <Button type="submit" size="lg" className="sm:min-w-32">
                Tìm việc
                <span aria-hidden="true">→</span>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-6">
              <label className="sr-only" htmlFor="home-level">Cấp bậc</label>
              <Select id="home-level" name="level" aria-label="Lọc theo cấp bậc" defaultValue="all">
                <option value="all">Cấp bậc</option>
                <option value="Intern">Intern</option>
                <option value="Fresher">Fresher</option>
                <option value="Junior">Junior</option>
                <option value="Middle">Middle</option>
                <option value="Senior">Senior</option>
              </Select>

              <label className="sr-only" htmlFor="home-salary">Mức lương</label>
              <Select id="home-salary" name="salary" aria-label="Lọc theo mức lương" defaultValue="all">
                <option value="all">Mức lương</option>
                <option value="under-10">Dưới 10 triệu</option>
                <option value="10-20">10–20 triệu</option>
                <option value="20-30">20–30 triệu</option>
                <option value="over-30">Trên 30 triệu</option>
              </Select>

              <label className="sr-only" htmlFor="home-location">Địa điểm</label>
              <Select id="home-location" name="location" aria-label="Lọc theo địa điểm" defaultValue="all">
                <option value="all">Địa điểm</option>
                <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                <option value="Hà Nội">Hà Nội</option>
                <option value="Đà Nẵng">Đà Nẵng</option>
                <option value="Remote">Remote</option>
              </Select>

              <label className="sr-only" htmlFor="home-employment">Hình thức làm việc</label>
              <Select id="home-employment" name="employment" aria-label="Lọc theo hình thức làm việc" defaultValue="all">
                <option value="all">Hình thức</option>
                <option value="Toàn thời gian">Toàn thời gian</option>
                <option value="Bán thời gian">Bán thời gian</option>
                <option value="Thực tập">Thực tập</option>
              </Select>

              <label className="sr-only" htmlFor="home-category">Lĩnh vực</label>
              <Select id="home-category" name="category" aria-label="Lọc theo lĩnh vực" defaultValue="all">
                <option value="all">Lĩnh vực</option>
                <option value="Backend">Backend</option>
                <option value="Data">Data</option>
                <option value="Frontend">Frontend</option>
                <option value="DevOps">DevOps</option>
                <option value="QA">QA / Testing</option>
              </Select>

              <label className="sr-only" htmlFor="home-posted">Thời gian đăng</label>
              <Select id="home-posted" name="posted" aria-label="Lọc theo thời gian đăng" defaultValue="all">
                <option value="all">Thời gian đăng</option>
                <option value="1">24 giờ qua</option>
                <option value="7">7 ngày qua</option>
                <option value="30">30 ngày qua</option>
              </Select>
            </div>
          </form>
        </Card>
      </section>

      <section aria-labelledby="category-title" className="mt-9 space-y-4 sm:mt-10">
        <h2 id="category-title" className="text-section-title font-semibold text-foreground">
          Khám phá theo lĩnh vực
        </h2>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Link
              key={category.value}
              href={`/jobs?category=${encodeURIComponent(category.value)}`}
              title={category.description}
              className="inline-flex min-h-10 items-center rounded-md border border-border bg-surface px-4 text-body font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-primary-soft hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {category.label}
            </Link>
          ))}
        </div>
      </section>

      <section aria-labelledby="sources-title" className="mt-10 border-t border-border pt-6 sm:mt-12">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <h2 id="sources-title" className="text-body-emphasis font-semibold text-foreground">
              Nguồn tuyển dụng hiện được tổng hợp
            </h2>
            <p className="text-small text-muted-foreground">
              Phạm vi nguồn dữ liệu hiện tại của dự án.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-md border border-border bg-surface px-3 py-2 text-body-emphasis font-semibold text-foreground">
              TopCV
            </span>
            <span className="rounded-md border border-border bg-surface px-3 py-2 text-body-emphasis font-semibold text-foreground">
              VietnamWorks
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
