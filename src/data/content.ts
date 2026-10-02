// ============================================================
// content.ts — ALL the text on the site lives here.
// To update the site, edit this file only. The components
// read from these objects, so the layout updates by itself.
// ============================================================

// A "type" describes the shape of an object. TypeScript will
// warn you if you forget a field or misspell one.
export type Job = {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string; // "?" means optional
  codeUrl?: string;
};

export const profile = {
  name: "Sakshi Gosavi",
  role: "UI Developer",
  headline: "I build interfaces that hit the mark, down to the pixel.",
  intro:
    "Three years of turning designs into fast, accessible web interfaces. Now studying Data Science, AI & Digital Business in Germany to make them data-driven too.",
  location: "Berlin, Germany",
  status: "Open to Werkstudent roles, up to 20 hours a week",
  email: "sakshigosavi0425@gmail.com",
  linkedin: "https://linkedin.com/in/sakshi-gosavi",
  github: "https://github.com/YOUR-USERNAME", // TODO: replace
  resumeFile: "/Sakshi_Gosavi_Resume.pdf", // file in the /public folder
};

export const about = [
  "I started as an IT intern in Pune and spent the next three years as a UI developer at Reality Premedia Services, building responsive interfaces, maintaining design systems and cutting page load times by up to 40%.",
  "In September 2025 I moved to Germany for an MSc in Data Science, AI & Digital Business at GISMA University of Applied Sciences. I want to combine both sides: interfaces that are well built and decisions that are backed by data.",
  "Outside of code I'm a competitive rifle shooter, with a district-level gold medal and state-level competitions. It taught me the same thing good front-end work does: small details decide the result.",
];

export type Degree = {
  degree: string;
  school: string;
  location: string;
  period: string;
  grade?: string; // optional: only shown if filled in
};

export const education: Degree[] = [
  {
    degree: "MSc Data Science, AI & Digital Business",
    school: "GISMA University of Applied Sciences",
    location: "Potsdam, Germany",
    period: "Sep 2025 – Present",
  },
  {
    degree: "Bachelor of Engineering, Computer Science",
    school: "ISBM College of Engineering, Savitribai Phule Pune University",
    location: "Pune, India",
    period: "Aug 2018 – Aug 2022",
    grade: "CGPA: 8.37/10",
  },
];

export const experience: Job[] = [
  {
    role: "UI Developer",
    company: "Reality Premedia Services",
    location: "Pune, India",
    period: "Jul 2022 – Sep 2025",
    points: [
      "Built responsive interfaces with HTML5, CSS3, SCSS and JavaScript, compliant with WCAG 2.1",
      "Reduced page load times by up to 40% with lazy loading, code splitting and asset optimization",
      "Maintained design systems and reusable component libraries",
      "Shipped features with product and UX teams in Agile/Scrum",
    ],
  },
  {
    role: "IT Intern",
    company: "Marks Technosystems Pvt Ltd",
    location: "Pune, India",
    period: "Jun 2021 – Dec 2021",
    points: [
      "Supported front-end updates and feature deployment in production",
      "Took part in QA testing cycles for new features",
    ],
  },
];

// Add a new project by copying one object and changing the fields.
export const projects: Project[] = [
  {
    title: "This portfolio",
    description:
      "Built from scratch with React and TypeScript. Responsive, keyboard accessible, supports dark mode and respects reduced-motion settings.",
    tech: ["React", "TypeScript", "CSS", "Vite"],
    codeUrl: "https://github.com/YOUR-USERNAME/portfolio", // TODO: replace
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["JavaScript", "TypeScript", "Python", "SQL", "HTML5", "CSS3", "SCSS"] },
  { group: "Front-end", items: ["React", "Responsive design", "Accessibility (WCAG 2.1)", "Design systems", "Performance optimization"] },
  { group: "Data & AI", items: ["Python", "SQL", "Data analysis", "AI fundamentals"] },
  { group: "Tools", items: ["Git & GitHub", "Agile/Scrum", "Vite"] },
];

export const languages = "Marathi and Hindi (native), English (fluent), German (basic)";
