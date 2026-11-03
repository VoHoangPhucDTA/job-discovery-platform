import { PageHeader } from "../components/ui/page-header";
import { SectionPlaceholder } from "../components/ui/section-placeholder";

export const metadata = {
  title: "Phân tích thị trường",
  description: "Phân tích xu hướng tuyển dụng và nhu cầu kỹ năng IT tại Việt Nam.",
};

export default function InsightsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="MARKET INTELLIGENCE"
        title="Phân tích thị trường"
        description="Khám phá nhu cầu tuyển dụng, kỹ năng phổ biến, mức lương và phân bố cơ hội theo địa điểm."
      />
      <SectionPlaceholder
        title="Market Insights"
        description="Các chỉ số và biểu đồ phân tích sẽ được kết nối với analytical datasets sau khi xác nhận dữ liệu và API tương ứng."
      />
    </div>
  );
}
