import { Badge } from "./badge";
import { Card, CardContent } from "./card";

type SectionPlaceholderProps = {
  title: string;
  description: string;
  note?: string;
};

export function SectionPlaceholder({
  title,
  description,
  note = "Khu vực này sẽ được triển khai trong giai đoạn tiếp theo.",
}: SectionPlaceholderProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="flex flex-col items-center px-6 py-12 text-center sm:py-16">
        <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary-soft text-primary">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="size-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          >
            <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5z" />
            <path d="M8 9h8M8 12.5h8M8 16h4" strokeLinecap="round" />
          </svg>
        </div>
        <Badge variant="info">Đang hoàn thiện</Badge>
        <h2 className="mt-4 text-card-title font-semibold text-foreground">
          {title}
        </h2>
        <p className="mt-2 max-w-lg text-body text-muted-foreground">
          {description}
        </p>
        <p className="mt-4 text-small text-subtle-foreground">{note}</p>
      </CardContent>
    </Card>
  );
}
