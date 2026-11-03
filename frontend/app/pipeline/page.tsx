import { PageHeader } from "../components/ui/page-header";
import { SectionPlaceholder } from "../components/ui/section-placeholder";

export const metadata = {
  title: "Data Pipeline",
  description: "Theo dõi kiến trúc xử lý và chất lượng dữ liệu tuyển dụng.",
};

export default function PipelinePage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="VẬN HÀNH DỮ LIỆU"
        title="Data Pipeline"
        description="Tổng quan luồng thu thập, chuẩn hóa và nạp dữ liệu tuyển dụng vào Data Warehouse."
      />
      <SectionPlaceholder
        title="Giám sát Data Pipeline"
        description="Trạng thái các lần chạy, khối lượng xử lý, độ mới và chỉ số chất lượng dữ liệu chỉ được hiển thị khi backend hoặc pipeline cung cấp dữ liệu có thể xác minh."
        note="Hiện tại đây là khung giao diện; chưa có số liệu vận hành được công bố."
      />
    </div>
  );
}
