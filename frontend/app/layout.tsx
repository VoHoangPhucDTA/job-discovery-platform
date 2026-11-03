import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteDescription =
  "Khám phá cơ hội việc làm IT tại Việt Nam và theo dõi xu hướng thị trường tuyển dụng từ dữ liệu tổng hợp.";

export const metadata: Metadata = {
  title: {
    default: "Job Discovery Platform",
    template: "%s | Job Discovery Platform",
  },
  description: siteDescription,
  applicationName: "Job Discovery Platform",
  keywords: [
    "IT jobs Vietnam",
    "việc làm IT",
    "job market analytics",
    "Data Engineering",
    "job discovery",
  ],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "Job Discovery Platform",
    title: "Job Discovery Platform",
    description: siteDescription,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
