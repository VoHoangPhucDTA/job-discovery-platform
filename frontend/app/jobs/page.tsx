import { PageHeader } from "../components/ui/page-header";
import { SectionPlaceholder } from "../components/ui/section-placeholder";

export const metadata = {
  title: "Việc làm",
  description: "Tìm kiếm và khám phá cơ hội việc làm IT tại Việt Nam.",
};

export default function JobsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="VIỆC LÀM IT"
        title="Việc làm IT"
        description="Tìm kiếm và khám phá cơ hội nghề nghiệp từ các nguồn tuyển dụng IT."
      />
      <SectionPlaceholder
        title="Không gian khám phá việc làm"
        description="Danh sách tin tuyển dụng, tìm kiếm từ khóa và bộ lọc theo địa điểm, mức lương, danh mục và thời gian đăng sẽ được xây dựng tại đây."
      />
    </div>
  );
}
