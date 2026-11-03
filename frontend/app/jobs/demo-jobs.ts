export type DemoJobCategory =
  | "Backend"
  | "Data"
  | "Frontend"
  | "DevOps"
  | "QA";

export type CareerLevel = "Intern" | "Fresher" | "Junior" | "Middle" | "Senior";

export type EmploymentType = "Toàn thời gian" | "Bán thời gian" | "Thực tập";

export type DemoJob = {
  id: string;
  title: string;
  company: string;
  location: string;
  salaryMin: number;
  salaryMax: number;
  salaryLabel: string;
  category: DemoJobCategory;
  level: CareerLevel;
  employmentType: EmploymentType;
  skills: string[];
  source: "TopCV" | "VietnamWorks";
  postedDaysAgo: number;
  postedLabel: string;
  description: string;
  requirements: string[];
};

export const demoJobs: DemoJob[] = [
  {
    id: "sample-001",
    level: "Junior",
    employmentType: "Toàn thời gian",
    title: "Data Engineer",
    company: "Doanh nghiệp công nghệ mẫu A",
    location: "TP. Hồ Chí Minh",
    salaryMin: 22,
    salaryMax: 35,
    salaryLabel: "22–35 triệu",
    category: "Data",
    skills: ["Python", "SQL", "ETL", "MySQL"],
    source: "TopCV",
    postedDaysAgo: 1,
    postedLabel: "1 ngày trước",
    description:
      "Vị trí minh họa cho nhóm công việc Data Engineering, tập trung vào xây dựng và duy trì quy trình xử lý dữ liệu.",
    requirements: [
      "Có kiến thức về Python và SQL.",
      "Hiểu quy trình ETL và mô hình dữ liệu.",
      "Có kinh nghiệm làm việc với hệ quản trị cơ sở dữ liệu quan hệ.",
    ],
  },
  {
    id: "sample-002",
    level: "Middle",
    employmentType: "Toàn thời gian",
    title: "Backend Developer (Python)",
    company: "Công ty sản phẩm mẫu B",
    location: "Hà Nội",
    salaryMin: 20,
    salaryMax: 32,
    salaryLabel: "20–32 triệu",
    category: "Backend",
    skills: ["Python", "FastAPI", "REST API", "PostgreSQL"],
    source: "VietnamWorks",
    postedDaysAgo: 2,
    postedLabel: "2 ngày trước",
    description:
      "Vị trí minh họa cho nhóm phát triển backend, xây dựng dịch vụ và API cho ứng dụng.",
    requirements: [
      "Nắm vững Python và tư duy lập trình backend.",
      "Hiểu REST API và thiết kế cơ sở dữ liệu.",
      "Có khả năng kiểm thử và xử lý lỗi ứng dụng.",
    ],
  },
  {
    id: "sample-003",
    level: "Fresher",
    employmentType: "Toàn thời gian",
    title: "Data Analyst",
    company: "Công ty dữ liệu mẫu C",
    location: "TP. Hồ Chí Minh",
    salaryMin: 16,
    salaryMax: 25,
    salaryLabel: "16–25 triệu",
    category: "Data",
    skills: ["SQL", "Power BI", "Python", "Excel"],
    source: "TopCV",
    postedDaysAgo: 3,
    postedLabel: "3 ngày trước",
    description:
      "Vị trí minh họa về phân tích dữ liệu, xây dựng báo cáo và hỗ trợ hoạt động ra quyết định.",
    requirements: [
      "Sử dụng tốt SQL để truy vấn dữ liệu.",
      "Có khả năng trực quan hóa dữ liệu.",
      "Tư duy phân tích và trình bày kết quả rõ ràng.",
    ],
  },
  {
    id: "sample-004",
    level: "Junior",
    employmentType: "Bán thời gian",
    title: "Frontend Developer",
    company: "Công ty sản phẩm mẫu D",
    location: "Đà Nẵng",
    salaryMin: 18,
    salaryMax: 28,
    salaryLabel: "18–28 triệu",
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    source: "VietnamWorks",
    postedDaysAgo: 5,
    postedLabel: "5 ngày trước",
    description:
      "Vị trí minh họa cho nhóm phát triển giao diện web hiện đại, chú trọng trải nghiệm và khả năng mở rộng.",
    requirements: [
      "Có nền tảng JavaScript và TypeScript.",
      "Hiểu React và nguyên tắc component-based UI.",
      "Biết tối ưu hiệu năng và responsive layout.",
    ],
  },
  {
    id: "sample-005",
    level: "Senior",
    employmentType: "Toàn thời gian",
    title: "DevOps Engineer",
    company: "Đơn vị hạ tầng mẫu E",
    location: "Remote",
    salaryMin: 28,
    salaryMax: 42,
    salaryLabel: "28–42 triệu",
    category: "DevOps",
    skills: ["Docker", "Linux", "CI/CD", "Cloud"],
    source: "TopCV",
    postedDaysAgo: 7,
    postedLabel: "7 ngày trước",
    description:
      "Vị trí minh họa cho hoạt động tự động hóa triển khai và vận hành hạ tầng ứng dụng.",
    requirements: [
      "Có kinh nghiệm với Linux và Docker.",
      "Hiểu quy trình CI/CD.",
      "Có kiến thức về giám sát và xử lý sự cố hệ thống.",
    ],
  },
  {
    id: "sample-006",
    level: "Intern",
    employmentType: "Thực tập",
    title: "QA Automation Engineer",
    company: "Công ty phần mềm mẫu F",
    location: "Hà Nội",
    salaryMin: 12,
    salaryMax: 18,
    salaryLabel: "12–18 triệu",
    category: "QA",
    skills: ["Automation Testing", "API Testing", "Python"],
    source: "VietnamWorks",
    postedDaysAgo: 12,
    postedLabel: "12 ngày trước",
    description:
      "Vị trí minh họa cho kiểm thử tự động và đảm bảo chất lượng phần mềm.",
    requirements: [
      "Hiểu quy trình kiểm thử phần mềm.",
      "Có kiến thức về kiểm thử API.",
      "Biết sử dụng ít nhất một ngôn ngữ lập trình cho automation.",
    ],
  },
  {
    id: "sample-007",
    level: "Fresher",
    employmentType: "Toàn thời gian",
    title: "BI Developer",
    company: "Doanh nghiệp phân tích mẫu G",
    location: "TP. Hồ Chí Minh",
    salaryMin: 19,
    salaryMax: 30,
    salaryLabel: "19–30 triệu",
    category: "Data",
    skills: ["SQL", "Power BI", "Data Modeling"],
    source: "TopCV",
    postedDaysAgo: 18,
    postedLabel: "18 ngày trước",
    description:
      "Vị trí minh họa cho phát triển báo cáo quản trị và mô hình dữ liệu phục vụ phân tích.",
    requirements: [
      "Sử dụng SQL và công cụ BI.",
      "Hiểu mô hình dữ liệu phân tích.",
      "Có khả năng trao đổi yêu cầu báo cáo với các bên liên quan.",
    ],
  },
  {
    id: "sample-008",
    level: "Middle",
    employmentType: "Toàn thời gian",
    title: "Java Backend Developer",
    company: "Công ty giải pháp mẫu H",
    location: "Hà Nội",
    salaryMin: 24,
    salaryMax: 38,
    salaryLabel: "24–38 triệu",
    category: "Backend",
    skills: ["Java", "Spring Boot", "MySQL", "REST API"],
    source: "VietnamWorks",
    postedDaysAgo: 25,
    postedLabel: "25 ngày trước",
    description:
      "Vị trí minh họa cho phát triển dịch vụ backend bằng Java và hệ sinh thái Spring.",
    requirements: [
      "Có nền tảng Java và lập trình hướng đối tượng.",
      "Hiểu Spring Boot và REST API.",
      "Có kiến thức về MySQL và tối ưu truy vấn.",
    ],
  },
];
