import { JobsBrowser } from "./jobs-browser";

type JobsPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export const metadata = {
  title: "Việc làm",
  description: "Tìm kiếm và khám phá cơ hội việc làm IT tại Việt Nam.",
};

export default async function JobsPage({ searchParams }: JobsPageProps) {
  const params = await searchParams;
  const initialFilters: Record<string, string> = {};

  for (const key of [
    "keyword",
    "level",
    "salary",
    "location",
    "employment",
    "category",
    "posted",
  ]) {
    const value = params[key];
    if (typeof value === "string") {
      initialFilters[key] = value;
    }
  }

  return <JobsBrowser initialFilters={initialFilters} />;
}
