import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppShell } from "./components/shell/app-shell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const siteDescription =
  "GomViệc giúp bạn khám phá và tìm kiếm cơ hội việc làm IT từ nhiều nền tảng.";

export const metadata: Metadata = {
  title: {
    default: "GomViệc",
    template: "%s | GomViệc",
  },
  description: siteDescription,
  applicationName: "GomViệc",
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
    siteName: "GomViệc",
    title: "GomViệc",
    description: siteDescription,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
