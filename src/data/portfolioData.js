// ==========================================================================
// EDIT YOUR INFORMATION HERE — this is the only file you need to touch
// to update the content of your portfolio.
// ==========================================================================

export const profile = {
  name: "Garvish Jain",
  role: "Full Stack Developer",
  tagline: "I build fast, reliable web apps end-to-end — from database schema to pixel-perfect UI.",
  location: "Remote / Pan India",
  email: "garvishjain1997@gmail.com",
  github: "https://github.com/garvishjain",
  linkedin: "https://www.linkedin.com/in/garvish-jain-a07a651b3/",
  resumeUrl: "/Garvish Jain Resume.pdf", // place your CV file at public/resume.pdf
  yearsExperience: 4,
};

export const professionalSummary = `Full Stack Developer with 4 years of experience designing, building, and shipping
production web applications using React, Node.js, and modern cloud infrastructure. Comfortable owning
a feature from database schema to deployed UI — writing clean, testable code, optimizing performance,
and collaborating closely with designers and product teams. Passionate about developer experience,
scalable architecture, and building software that people actually enjoy using.`;

export const aboutMe = `I'm a full stack developer who enjoys the entire lifecycle of a product — from the first
whiteboard sketch to the final deploy. Over the past 4 years I've worked across startups and product
teams, building everything from internal tools to customer-facing SaaS platforms. I care deeply about
clean architecture, readable code, and shipping things that actually solve problems. When I'm not
coding, I'm usually exploring new frameworks, contributing to open source, or writing about what I learn.`;

export const technicalSkills = {
  Frontend: ["React.js", "Next.js", "Redux Toolkit", "Tailwind CSS", "HTML5 / CSS3"],
  Backend: ["Node.js", "Express.js", "REST APIs"],
  Database: ["MongoDB", "PostgreSQL","Sequelize ORM", "MySQL", "Redis", "Oracle Cloud"],
  "Cloud & DevOps": ["AWS (EC2, S3)", "Docker", "CI/CD (GitHub Actions)", "Vercel", "Nginx"],
  "Tools & Practices": ["Git / GitHub", "Postman", "Swagger API"],
};

export const experience = [
  {
    company: "Eazy ERP Technology pvt. ltd.",
    role: "Full Stack Developer",
    period: "2023 — Present",
    points: [
      "Led development of a multi-tenant SaaS dashboard used by 50+ enterprise clients, built with React, Node.js, and PostgreSQL.",
      "Reduced API response times by 40% through query optimization and Redis caching.",
      "Mentored 3 junior developers and established code review standards for the team.",
    ],
  },
  {
    company: "Sosimtech Solution",
    role: "Backend Developer (NodeJS)",
    period: "2021 — 2023",
    points: [
      "Built and maintained RESTful APIs and React front-ends for 5+ client projects.",
      "Migrated a legacy jQuery app to React + TypeScript, improving load times by 35%.",
      "Implemented CI/CD pipelines that cut deployment time from 30 minutes to under 5.",
    ],
  },
  // {
  //   company: "PixelForge Studio",
  //   role: "Junior Web Developer",
  //   period: "2020 — 2021",
  //   points: [
  //     "Developed responsive websites and landing pages for small business clients.",
  //     "Collaborated with designers to translate Figma mockups into pixel-perfect UI.",
  //   ],
  // },
];

export const education = [
  {
    school: "Madhav Institute of Technology & Science (MITS)",
    degree: "Master of Computer Application (MCA)",
    period: "2019 — 2021",
    detail: "Graduated with First Class Honors. Coursework in Data Structures, Algorithms, DBMS, and Operating Systems.",
  },
  {
    school: "Govt. Shrimant Madhavrao Scindia Adarsh Science College, Gwalior(M.P)",
    degree: "Bachelor of Computer Application (BSC)",
    period: "2015 — 2018",
    detail: "Focused on Physics, Chemistry, and Mathematics.",
  },
];

export const certifications = [
  "AWS Certified Developer – Associate",
  "Meta Front-End Developer Professional Certificate",
  "MongoDB Certified Developer",
];

export const projects = [
  {
    title: "ShopSphere — E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product catalog, cart, Stripe payments, order tracking, and an admin dashboard for inventory management.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Tailwind CSS"],
    github: "https://github.com/your-username/shopsphere",
    live: "https://shopsphere-demo.vercel.app",
  },
  {
    title: "TaskFlow — Team Collaboration Tool",
    description:
      "A Trello-style project management app with drag-and-drop boards, real-time updates via WebSockets, and role-based team permissions.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io", "Prisma"],
    github: "https://github.com/your-username/taskflow",
    live: "https://taskflow-demo.vercel.app",
  },
  {
    title: "DevBlog — Markdown Blogging Platform",
    description:
      "A developer-focused blogging platform with markdown/code-block support, tag-based search, and a headless CMS-style admin panel.",
    tech: ["React", "Node.js", "MySQL", "Express", "JWT Auth"],
    github: "https://github.com/your-username/devblog",
    live: "https://devblog-demo.vercel.app",
  },
  {
    title: "WeatherPulse — Real-Time Weather Dashboard",
    description:
      "A weather analytics dashboard with location search, 7-day forecasts, and interactive charts powered by a third-party weather API.",
    tech: ["React", "Chart.js", "OpenWeather API", "Tailwind CSS"],
    github: "https://github.com/your-username/weatherpulse",
    live: "https://weatherpulse-demo.vercel.app",
  },
];

export const navLinks = [
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "education", href: "#education" },
  { label: "contact", href: "#contact" },
];
