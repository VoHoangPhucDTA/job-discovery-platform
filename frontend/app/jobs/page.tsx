import { PageHeader } from "../components/ui/page-header";
import { JobsBrowser } from "./jobs-browser";

export const metadata = {
  title: "Việc làm",
  description: "Tìm kiếm và khám phá cơ hội việc làm IT tại Việt Nam.",
};

export default function JobsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="VIỆC LÀM IT"
        title="Việc làm IT"
        description="Tìm kiếm cơ hội nghề nghiệp theo vị trí, kỹ năng, địa điểm và mức lương."
      />
      <JobsBrowser />
    </div>
  );
}
