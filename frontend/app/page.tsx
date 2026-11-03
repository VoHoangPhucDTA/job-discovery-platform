import Link from "next/link";
import { Badge } from "./components/ui/badge";
import { ButtonLink } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { PageHeader } from "./components/ui/page-header";

const productAreas = [
  {
    href: "/jobs",
    number: "01",
    title: "Khám phá việc làm",
    description:
      "Tìm kiếm và lọc cơ hội IT theo vị trí, địa điểm, mức lương và thời gian đăng.",
    action: "Đến danh sách việc làm",
  },
  {
    href: "/insights",
    number: "02",
    title: "Phân tích thị trường",
    description:
      "Theo dõi nhu cầu tuyển dụng, kỹ năng được tìm kiếm và phân bố cơ hội nghề nghiệp.",
    action: "Khám phá phân tích",
  },
  {
    href: "/pipeline",
    number: "03",
    title: "Data Pipeline",
    description:
      "Tìm hiểu luồng thu thập, chuẩn hóa và nạp dữ liệu vào Data Warehouse.",
    action: "Xem kiến trúc dữ liệu",
  },
];

const pipelineStages = [
  { label: "Extract", detail: "Thu thập tin tuyển dụng" },
  { label: "Transform", detail: "Làm sạch và chuẩn hóa" },
  { label: "Load", detail: "MySQL Data Warehouse" },
  { label: "Analyze", detail: "Dữ liệu phân tích" },
];

export default function Home() {
  return (
    <div className="space-y-8 sm:space-y-10">
      <PageHeader
        eyebrow="JOB MARKET INTELLIGENCE"
        title="Thị trường việc làm IT, nhìn từ dữ liệu."
        description="Một nền tảng khám phá cơ hội nghề nghiệp và tìm hiểu xu hướng tuyển dụng IT tại Việt Nam, được xây dựng trên quy trình xử lý dữ liệu nhiều nguồn."
        actions={
          <ButtonLink href="/jobs" size="lg">
            Khám phá việc làm
            <span aria-hidden="true">→</span>
          </ButtonLink>
        }
      />

      <div className="grid gap-5 xl:grid-cols-[1.35fr_0.85fr]">
        <Card className="overflow-hidden p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="primary">Data-driven job discovery</Badge>
            <Badge variant="neutral">Vietnam IT market</Badge>
          </div>
          <h2 className="mt-5 max-w-2xl text-section-title font-semibold tracking-tight text-foreground">
            Từ dữ liệu tuyển dụng phân tán đến thông tin dễ khám phá và phân tích.
          </h2>
          <p className="mt-3 max-w-2xl text-body text-muted-foreground">
            Nền tảng tập trung vào việc thu thập, xử lý và tổ chức dữ liệu tin
            tuyển dụng để hỗ trợ tìm kiếm công việc cũng như quan sát bức tranh
            chung của thị trường.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="text-small font-medium text-muted-foreground">
              Nguồn trong phạm vi dự án:
            </span>
            <Badge variant="neutral">TopCV</Badge>
            <Badge variant="neutral">VietnamWorks</Badge>
          </div>
        </Card>

        <Card className="p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-small font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                Data workflow
              </p>
              <h2 className="mt-1 text-card-title font-semibold text-foreground">
                Luồng dữ liệu tổng quan
              </h2>
            </div>
            <Badge variant="info">Architecture</Badge>
          </div>

          <div className="mt-5 space-y-2">
            {pipelineStages.map((stage, index) => (
              <div key={stage.label} className="flex items-center gap-3">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary-soft text-small font-semibold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-body-emphasis font-semibold text-foreground">
                    {stage.label}
                  </p>
                  <p className="text-small text-muted-foreground">
                    {stage.detail}
                  </p>
                </div>
                {index < pipelineStages.length - 1 ? (
                  <span className="text-subtle-foreground" aria-hidden="true">
                    ↓
                  </span>
                ) : null}
              </div>
            ))}
          </div>
          <p className="mt-4 border-t border-border pt-3 text-small text-muted-foreground">
            Sơ đồ mô tả kiến trúc xử lý, không phải trạng thái chạy ETL trực
            tiếp.
          </p>
        </Card>
      </div>

      <section aria-labelledby="product-areas-title" className="space-y-4">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-small font-semibold uppercase tracking-[0.08em] text-primary">
              Explore the platform
            </p>
            <h2
              id="product-areas-title"
              className="mt-1 text-section-title font-semibold text-foreground"
            >
              Khám phá các khu vực
            </h2>
          </div>
          <p className="text-small text-muted-foreground">
            Ba góc nhìn trên cùng một nền tảng dữ liệu.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {productAreas.map((area) => (
            <Link
              key={area.href}
              href={area.href}
              className="group rounded-lg outline-offset-4 focus-visible:outline-2 focus-visible:outline-primary"
            >
              <Card className="flex h-full flex-col p-5 transition-colors duration-150 group-hover:border-primary/50">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-small text-subtle-foreground">
                    {area.number}
                  </span>
                  <span
                    className="text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>
                <h3 className="mt-5 text-card-title font-semibold text-foreground">
                  {area.title}
                </h3>
                <p className="mt-2 flex-1 text-body text-muted-foreground">
                  {area.description}
                </p>
                <p className="mt-5 text-small font-semibold text-primary">
                  {area.action}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <Card className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="max-w-2xl">
          <p className="text-body-emphasis font-semibold text-foreground">
            Một sản phẩm được xây dựng xoay quanh dữ liệu.
          </p>
          <p className="mt-1 text-body text-muted-foreground">
            Tập trung vào khả năng truy xuất nguồn, chất lượng xử lý và cách
            chuyển dữ liệu tuyển dụng thành thông tin có ích.
          </p>
        </div>
        <ButtonLink href="/pipeline" variant="secondary">
          Tìm hiểu Data Pipeline
          <span aria-hidden="true">→</span>
        </ButtonLink>
      </Card>
    </div>
  );
}
