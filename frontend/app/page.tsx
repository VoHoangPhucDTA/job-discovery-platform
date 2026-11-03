import Link from "next/link";
import { Badge } from "./components/ui/badge";
import { ButtonLink } from "./components/ui/button";
import { Card } from "./components/ui/card";

const journeys = [
  {
    number: "01",
    eyebrow: "KHÁM PHÁ CƠ HỘI",
    title: "Tìm công việc phù hợp",
    description:
      "Tìm kiếm tin tuyển dụng IT theo chức danh, kỹ năng, cấp bậc, địa điểm và mức lương.",
    href: "/jobs",
    action: "Khám phá việc làm",
    icon: "search",
  },
  {
    number: "02",
    eyebrow: "HIỂU THỊ TRƯỜNG",
    title: "Theo dõi xu hướng tuyển dụng",
    description:
      "Khám phá nhu cầu nhân lực, kỹ năng được quan tâm và bức tranh tuyển dụng theo khu vực.",
    href: "/insights",
    action: "Xem phân tích",
    icon: "chart",
  },
  {
    number: "03",
    eyebrow: "KHÁM PHÁ DỮ LIỆU",
    title: "Tìm hiểu Data Pipeline",
    description:
      "Xem cách dữ liệu tuyển dụng được thu thập, chuẩn hóa và tổ chức trước khi khai thác.",
    href: "/pipeline",
    action: "Tìm hiểu quy trình",
    icon: "pipeline",
  },
] as const;

const pipelineStages = [
  {
    number: "01",
    title: "Nguồn dữ liệu",
    detail: "TopCV · VietnamWorks",
  },
  {
    number: "02",
    title: "ETL",
    detail: "Thu thập · Làm sạch · Chuẩn hóa",
  },
  {
    number: "03",
    title: "Data Warehouse",
    detail: "MySQL",
  },
  {
    number: "04",
    title: "Khai thác dữ liệu",
    detail: "Tìm việc · Phân tích thị trường",
  },
] as const;

function JourneyIcon({ name }: { name: (typeof journeys)[number]["icon"] }) {
  const common = {
    "aria-hidden": true as const,
    viewBox: "0 0 24 24",
    className: "size-5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (name === "search") {
    return (
      <svg {...common}>
        <circle cx="10.8" cy="10.8" r="6.8" />
        <path d="m16 16 4.2 4.2" />
        <path d="M8 10.8h5.6M10.8 8v5.6" />
      </svg>
    );
  }

  if (name === "chart") {
    return (
      <svg {...common}>
        <path d="M4 20h16M6.5 16v-5M12 16V5M17.5 16V9" />
        <circle cx="6.5" cy="9" r="1" />
        <circle cx="12" cy="3" r="1" />
        <circle cx="17.5" cy="7" r="1" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <rect x="3" y="4" width="7" height="5" rx="1.2" />
      <rect x="14" y="15" width="7" height="5" rx="1.2" />
      <rect x="14" y="4" width="7" height="5" rx="1.2" />
      <path d="M10 6.5h1.5a2.5 2.5 0 0 1 2.5 2.5v6M11 17.5h3" />
    </svg>
  );
}

function DataFlowCard() {
  return (
    <Card className="overflow-hidden p-5 sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-small font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            TỔNG QUAN KIẾN TRÚC
          </p>
          <h2 className="mt-1 text-card-title font-semibold text-foreground">
            Từ nguồn tin đến thông tin hữu ích
          </h2>
        </div>
        <Badge variant="info">Data flow</Badge>
      </div>

      <div className="mt-5 space-y-2">
        {pipelineStages.map((stage, index) => (
          <div key={stage.number}>
            <div className="flex items-center gap-3 rounded-md border border-border bg-surface px-3 py-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-primary-soft font-mono text-small font-semibold text-primary">
                {stage.number}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-body-emphasis font-semibold text-foreground">
                  {stage.title}
                </p>
                <p className="mt-0.5 text-small text-muted-foreground">
                  {stage.detail}
                </p>
              </div>
              {index === pipelineStages.length - 1 ? (
                <span className="rounded-sm bg-success-soft px-2 py-1 text-small font-medium text-success">
                  Đầu ra
                </span>
              ) : null}
            </div>
            {index < pipelineStages.length - 1 ? (
              <div className="flex h-5 items-center pl-7">
                <span className="h-5 border-l border-dashed border-border-strong" />
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <p className="mt-4 border-t border-border pt-3 text-small text-muted-foreground">
        Sơ đồ mô tả kiến trúc ở mức tổng quan, không đại diện cho trạng thái
        chạy ETL theo thời gian thực.
      </p>
    </Card>
  );
}

export default function Home() {
  return (
    <div className="space-y-10 sm:space-y-12">
      <section className="grid items-center gap-7 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] lg:gap-8">
        <div className="space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="primary">JOB DISCOVERY PLATFORM</Badge>
            <span className="text-small text-muted-foreground">
              Thị trường việc làm IT Việt Nam
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="max-w-2xl text-page-title font-bold tracking-tight text-foreground sm:text-display">
              Tìm cơ hội IT.
              <span className="block text-primary">
                Hiểu thị trường bằng dữ liệu.
              </span>
            </h1>
            <p className="max-w-2xl text-body text-muted-foreground">
              Khám phá tin tuyển dụng từ nhiều nguồn, tìm kiếm theo tiêu chí
              của bạn và nhìn rộng hơn về nhu cầu nhân lực IT tại Việt Nam.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <ButtonLink href="/jobs" size="lg">
              Tìm việc ngay
              <span aria-hidden="true">→</span>
            </ButtonLink>
            <ButtonLink href="/insights" variant="secondary" size="lg">
              Khám phá thị trường
            </ButtonLink>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-4">
            <span className="text-small text-muted-foreground">
              Nguồn dữ liệu trong phạm vi dự án
            </span>
            <span className="text-body-emphasis font-semibold text-foreground">
              TopCV
            </span>
            <span className="size-1 rounded-full bg-border-strong" />
            <span className="text-body-emphasis font-semibold text-foreground">
              VietnamWorks
            </span>
          </div>
        </div>

        <DataFlowCard />
      </section>

      <section aria-labelledby="journey-title" className="space-y-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-small font-semibold uppercase tracking-[0.08em] text-primary">
              BẮT ĐẦU TỪ NHU CẦU CỦA BẠN
            </p>
            <h2
              id="journey-title"
              className="mt-1 text-section-title font-semibold text-foreground"
            >
              Bạn muốn khám phá điều gì?
            </h2>
          </div>
          <p className="max-w-lg text-small text-muted-foreground sm:text-right">
            Ba góc nhìn, cùng sử dụng một nền tảng dữ liệu tuyển dụng.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {journeys.map((journey) => (
            <Link
              key={journey.href}
              href={journey.href}
              className="group rounded-lg outline-offset-4 focus-visible:outline-2 focus-visible:outline-primary"
            >
              <Card className="flex h-full flex-col p-5 transition-colors duration-150 group-hover:border-primary/50 sm:p-6">
                <div className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-md bg-primary-soft text-primary">
                    <JourneyIcon name={journey.icon} />
                  </span>
                  <span className="font-mono text-small text-subtle-foreground">
                    {journey.number}
                  </span>
                </div>

                <p className="mt-5 text-small font-semibold uppercase tracking-[0.06em] text-muted-foreground">
                  {journey.eyebrow}
                </p>
                <h3 className="mt-1 text-card-title font-semibold text-foreground">
                  {journey.title}
                </h3>
                <p className="mt-2 flex-1 text-body text-muted-foreground">
                  {journey.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-small font-semibold text-primary">
                  {journey.action}
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
        <Card className="flex flex-col justify-between gap-5 p-5 sm:p-6">
          <div className="space-y-3">
            <Badge variant="neutral">Một nguồn dữ liệu có tổ chức</Badge>
            <h2 className="text-section-title font-semibold text-foreground">
              Không chỉ tìm việc, mà còn hiểu dữ liệu phía sau.
            </h2>
            <p className="text-body text-muted-foreground">
              Dữ liệu tuyển dụng được đưa qua quy trình xử lý và lưu trữ tập
              trung, tạo nền tảng cho việc tìm kiếm cơ hội và phân tích thị
              trường.
            </p>
          </div>
          <ButtonLink href="/pipeline" variant="secondary" className="self-start">
            Xem cách dữ liệu được xử lý
            <span aria-hidden="true">→</span>
          </ButtonLink>
        </Card>

        <Card className="p-5 sm:p-6">
          <p className="text-small font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            NGUYÊN TẮC SẢN PHẨM
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="space-y-1.5">
              <p className="text-body-emphasis font-semibold text-foreground">
                Dễ khám phá
              </p>
              <p className="text-small text-muted-foreground">
                Tìm kiếm và lọc cơ hội trong một giao diện thống nhất.
              </p>
            </div>
            <div className="space-y-1.5">
              <p className="text-body-emphasis font-semibold text-foreground">
                Có nguồn gốc
              </p>
              <p className="text-small text-muted-foreground">
                Phân biệt nguồn tuyển dụng và dữ liệu minh họa.
              </p>
            </div>
            <div className="space-y-1.5 border-border sm:border-l sm:pl-4">
              <p className="text-body-emphasis font-semibold text-foreground">
                Có thể phân tích
              </p>
              <p className="text-small text-muted-foreground">
                Tổ chức dữ liệu để quan sát nhu cầu và xu hướng thị trường.
              </p>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
