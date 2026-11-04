import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import { PageHeader } from "../components/ui/page-header";
import { Select } from "../components/ui/select";

const filters = [
  { id: "category", label: "Lĩnh vực", placeholder: "Tất cả lĩnh vực" },
  { id: "level", label: "Cấp bậc", placeholder: "Tất cả cấp bậc" },
  { id: "location", label: "Địa điểm", placeholder: "Toàn quốc" },
  { id: "work-mode", label: "Hình thức làm việc", placeholder: "Tất cả hình thức" },
  { id: "employment-type", label: "Loại hình công việc", placeholder: "Tất cả loại hình" },
] as const;

const categories = ["Data", "Backend", "Frontend", "DevOps", "QA / Testing"];
const careerLevels = ["Intern", "Fresher", "Junior", "Middle", "Senior", "Chưa phân loại"];

function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-1.5">
      <p className="text-small font-semibold text-primary">{eyebrow}</p>
      <h2 id={id} className="text-section-title font-semibold text-foreground">
        {title}
      </h2>
      <p className="max-w-3xl text-body text-muted-foreground">{description}</p>
    </div>
  );
}

function EmptyState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center rounded-md border border-dashed border-border bg-surface-muted/70 px-4 py-7 text-center sm:px-6">
      <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-surface text-muted-foreground">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="size-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
        >
          <path d="M4 19V5m0 14h16" strokeLinecap="round" />
          <path d="m7 15 3.5-4 3 2 4.5-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <p className="text-body-emphasis text-foreground">{title}</p>
      <p className="mt-1 max-w-2xl text-small text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

function FilterPanel() {
  return (
    <Card className="space-y-3 p-4 sm:p-5">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-card-title font-semibold text-foreground">
            Bộ lọc phân tích
          </h2>
          <p className="mt-0.5 text-small text-muted-foreground">
            Thu hẹp kết quả theo nhu cầu tìm việc của bạn.
          </p>
        </div>
        <Badge variant="neutral">Chưa khả dụng</Badge>
      </div>

      <fieldset disabled className="grid grid-cols-2 gap-3 lg:grid-cols-5">
        {filters.map((filter) => (
          <label key={filter.id} className="min-w-0 space-y-1.5">
            <span className="text-small font-medium text-muted-foreground">
              {filter.label}
            </span>
            <Select aria-label={filter.label}>
              <option value="">{filter.placeholder}</option>
            </Select>
          </label>
        ))}
      </fieldset>

      <p className="text-small text-muted-foreground">
        Bộ lọc sẽ được kích hoạt khi dữ liệu phân tích được kết nối. Hiện tại
        các tin minh họa trên trang Việc làm không được dùng để tính insight.
      </p>
    </Card>
  );
}

function OpportunitySection() {
  return (
    <section aria-labelledby="opportunities-title" className="space-y-3">
      <SectionHeading
        id="opportunities-title"
        eyebrow="01 · CƠ HỘI"
        title="Cơ hội việc làm theo lĩnh vực và cấp bậc"
        description="So sánh nhu cầu tuyển dụng theo nhóm ngành và mức kinh nghiệm, sau đó đi tiếp đến những tin phù hợp."
      />

      <Card className="space-y-4 p-4 sm:p-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-small text-muted-foreground">
            Ma trận dự kiến gồm 5 cấp bậc và nhóm tin chưa phân loại được.
          </p>
          <Badge variant="warning">Chưa có dữ liệu cơ hội</Badge>
        </div>

        <div className="hidden overflow-x-auto sm:block">
          <div className="min-w-[720px]">
            <div className="grid grid-cols-[minmax(112px,1.35fr)_repeat(6,minmax(0,1fr))] gap-2 border-b border-border pb-2">
              <span className="px-2 text-small font-semibold text-muted-foreground">
                Lĩnh vực
              </span>
              {careerLevels.map((level) => (
                <span
                  key={level}
                  className="px-1 text-center text-small font-semibold text-muted-foreground"
                >
                  {level}
                </span>
              ))}
            </div>

            <div className="space-y-2 pt-2">
              {categories.map((category) => (
                <div
                  key={category}
                  className="grid grid-cols-[minmax(112px,1.35fr)_repeat(6,minmax(0,1fr))] items-center gap-2"
                >
                  <span className="px-2 text-body-emphasis text-foreground">
                    {category}
                  </span>
                  {careerLevels.map((level) => (
                    <span
                      key={category + "-" + level}
                      className="inline-flex min-h-9 items-center justify-center rounded-sm bg-surface-muted text-small text-subtle-foreground"
                      aria-label={category + ", " + level + ": chưa có dữ liệu"}
                    >
                      —
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-2 sm:hidden">
          {categories.map((category) => (
            <div
              key={category}
              className="space-y-2 rounded-md border border-border p-3"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-body-emphasis text-foreground">
                  {category}
                </span>
                <span className="text-small text-subtle-foreground">
                  Chưa có dữ liệu
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {careerLevels.map((level) => (
                  <span
                    key={category + "-" + level}
                    className="rounded-sm bg-surface-muted px-2 py-1 text-small text-muted-foreground"
                  >
                    {level}: —
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-small text-muted-foreground">
          Dấu “—” biểu thị chưa có dữ liệu, không phải 0 tin. Các tin chưa xác
          định được cấp bậc sẽ được thống kê riêng, không tự động loại bỏ.
        </p>
      </Card>
    </section>
  );
}

function SkillsSection() {
  return (
    <section aria-labelledby="skills-title" className="space-y-3">
      <SectionHeading
        id="skills-title"
        eyebrow="02 · KỸ NĂNG"
        title="Nhà tuyển dụng đang tìm kiếm kỹ năng gì?"
        description="Khám phá những kỹ năng được nhắc đến trong mô tả tuyển dụng của từng lĩnh vực."
      />

      <Card className="space-y-4 p-4 sm:p-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-card-title font-semibold text-foreground">
              Tần suất kỹ năng được đề cập
            </h3>
            <p className="mt-0.5 text-small text-muted-foreground">
              Chỉ phân tích các tin có mô tả tuyển dụng đủ điều kiện.
            </p>
          </div>
          <Badge variant="warning">Chưa có dữ liệu kỹ năng</Badge>
        </div>

        <EmptyState
          title="Chưa thể phân tích kỹ năng"
          description="Khi mô tả tuyển dụng được chuẩn hóa, khu vực này sẽ hiển thị số tin đủ điều kiện, tần suất từng kỹ năng và liên kết đến những việc làm có đề cập kỹ năng đó."
        />
      </Card>
    </section>
  );
}

function WorkLocationSection() {
  const dimensions = [
    {
      title: "Địa điểm",
      description:
        "Phân bố tin tuyển dụng theo tỉnh, thành phố và nhóm địa điểm chưa xác định.",
      values: ["TP. Hồ Chí Minh", "Hà Nội", "Đà Nẵng"],
    },
    {
      title: "Hình thức làm việc",
      description:
        "Phân biệt rõ công việc On-site, Hybrid và Remote; Remote không được xem là địa điểm.",
      values: ["On-site", "Hybrid", "Remote"],
    },
    {
      title: "Loại hình công việc",
      description:
        "Cho biết cơ hội là toàn thời gian, bán thời gian hay thực tập.",
      values: ["Full-time", "Part-time", "Internship"],
    },
  ];

  return (
    <section aria-labelledby="work-location-title" className="space-y-3">
      <SectionHeading
        id="work-location-title"
        eyebrow="03 · ĐỊA ĐIỂM & HÌNH THỨC"
        title="Cơ hội ở đâu và theo hình thức nào?"
        description="Xem nơi làm việc, cách thức làm việc và loại hình công việc trong cùng một nhóm thông tin."
      />

      <Card className="grid gap-4 p-4 sm:grid-cols-3 sm:p-5">
        {dimensions.map((dimension) => (
          <div
            key={dimension.title}
            className="min-w-0 space-y-3 rounded-md border border-border p-3 sm:border-0 sm:p-0"
          >
            <div className="space-y-1">
              <h3 className="text-card-title font-semibold text-foreground">
                {dimension.title}
              </h3>
              <p className="text-small text-muted-foreground">
                {dimension.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {dimension.values.map((value) => (
                <span
                  key={value}
                  className="rounded-sm bg-surface-muted px-2 py-1 text-small text-muted-foreground"
                >
                  {value}
                </span>
              ))}
            </div>

            <p className="text-small font-medium text-subtle-foreground">
              Chưa có dữ liệu phân bố
            </p>
          </div>
        ))}
      </Card>
    </section>
  );
}

function SalarySection() {
  return (
    <section aria-labelledby="salary-title" className="space-y-3">
      <SectionHeading
        id="salary-title"
        eyebrow="04 · MỨC LƯƠNG"
        title="Mức lương được công bố"
        description="Tham khảo khoảng lương theo lĩnh vực và cấp bậc, kèm số lượng tin thực sự công khai mức lương."
      />

      <Card className="space-y-4 p-4 sm:p-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-card-title font-semibold text-foreground">
              Khoảng lương và mức trung vị
            </h3>
            <p className="mt-0.5 text-small text-muted-foreground">
              Dự kiến ưu tiên khoảng P25–P75 để hạn chế ảnh hưởng của mức lương
              ngoại lệ.
            </p>
          </div>
          <Badge variant="warning">Chưa có dữ liệu lương chuẩn hóa</Badge>
        </div>

        <EmptyState
          title="Chưa đủ dữ liệu để phân tích mức lương"
          description="Cần chuẩn hóa đơn vị trả lương, kỳ lương và thông tin Gross/Net. Tin thỏa thuận hoặc thiếu ngữ cảnh sẽ không bị quy đổi thành 0 hay đưa vào thống kê một cách tùy tiện."
        />

        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { label: "Khoảng P25–P75", note: "Chưa thể tính" },
            { label: "Mức trung vị", note: "Chưa thể tính" },
            { label: "Tin công khai lương", note: "Chưa xác định" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-md bg-surface-muted px-3 py-3"
            >
              <p className="text-small text-muted-foreground">{item.label}</p>
              <p className="mt-1 text-body-emphasis text-subtle-foreground">
                {item.note}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}

function DataScopeNote() {
  return (
    <Card className="flex flex-col gap-3 p-4 sm:flex-row sm:items-start sm:justify-between sm:p-5">
      <div className="max-w-2xl space-y-1">
        <h2 className="text-card-title font-semibold text-foreground">
          Phạm vi và phương pháp dữ liệu
        </h2>
        <p className="text-body text-muted-foreground">
          Phân tích chỉ phản ánh các tin được thu thập từ những nguồn đang nằm
          trong phạm vi dự án, không đại diện toàn bộ thị trường việc làm IT
          Việt Nam.
        </p>
      </div>
      <div className="space-y-2 text-small sm:min-w-52">
        <div className="flex items-center justify-between gap-4">
          <span className="text-muted-foreground">Nguồn trong phạm vi</span>
          <span className="font-medium text-foreground">
            TopCV, VietnamWorks
          </span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="text-muted-foreground">Thời điểm cập nhật</span>
          <span className="font-medium text-subtle-foreground">
            Chưa xác định
          </span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="text-muted-foreground">Số tin phân tích</span>
          <span className="font-medium text-subtle-foreground">
            Chưa xác định
          </span>
        </div>
      </div>
    </Card>
  );
}

export function InsightsContent() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="PHÂN TÍCH THỊ TRƯỜNG"
        title="Phân tích thị trường"
        description="Khám phá cơ hội tuyển dụng, kỹ năng được nhắc đến và thông tin giúp bạn định hướng tìm việc IT."
      />

      <Card className="flex flex-col gap-3 border-warning/30 bg-warning-soft/50 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
        <div className="flex min-w-0 items-start gap-3">
          <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-md bg-surface text-warning">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <ellipse cx="12" cy="5" rx="8" ry="3" />
              <path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" />
            </svg>
          </div>
          <div className="min-w-0 space-y-1">
            <p className="text-body-emphasis text-foreground">
              Chưa có dữ liệu phân tích được xác nhận
            </p>
            <p className="text-small text-muted-foreground">
              Trang đã có cấu trúc hiển thị, nhưng chưa có bộ dữ liệu phân tích
              đáng tin cậy từ backend. Số liệu sẽ chỉ xuất hiện sau khi dữ liệu
              được chuẩn hóa và kết nối.
            </p>
          </div>
        </div>
        <Badge variant="warning" className="w-fit shrink-0">
          Chưa kết nối dữ liệu
        </Badge>
      </Card>

      <FilterPanel />
      <OpportunitySection />
      <SkillsSection />
      <WorkLocationSection />
      <SalarySection />
      <DataScopeNote />
    </div>
  );
}
