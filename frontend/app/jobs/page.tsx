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
  const initialFilters = Object.fromEntries(
    ["keyword", "level", "salary", "location", "employment", "category", "posted"]
      .flatMap((key) => {
        const value = params[key];
        return typeof value === "string" ? [[key, value]] : [];
      }),
  );

  return <JobsBrowser initialFilters={initialFilters} />;
}
