export const bio = [
  "Hello there &#128075;",
  "I'm Esteban Castañeda, a Software Engineer at Justmet. I have a passion for all things tech and consider myself a curious and enthusiastic developer.",
  "Apart from coding, I love to read, listen to music, and travel.",
  "As a lifelong learner, I'm always seeking new knowledge and experiences to broaden my perspective and enhance my skills.",
  "Thanks for taking the time to learn a little about me!",
];

export const skills = [
  {
    title: "Languages",
    skillName: "JavaScript, TypeScript",
    color: "1",
    percentage: "80",
  },
  {
    title: "Frameworks/Libraries",
    skillName: "Angular, Rxjs, Ngxs",
    color: "6",
    percentage: "70",
  },
  {
    title: "Design",
    skillName: "HTML, Bootstrap, Tailwind",
    color: "4",
    percentage: "70",
  },
  {
    title: "Version Control",
    skillName: "GitHub, JIRA, Bitbucket",
    color: "7",
    percentage: "70",
  },
  {
    title: "Tools",
    skillName: "Postman, Chrome DevTools",
    color: "3",
    percentage: "80",
  },
  {
    title: "Analytics",
    skillName: "CleverTap, Countly",
    color: "5",
    percentage: "50",
  },
  {
    title: "Editor",
    skillName: "VS Code",
    color: "6",
    percentage: "70",
  },
];

export const projects = {
  disclaimer:
    "*** All the projects I listed were completed during my college-level development journey. As for my work at the industry level, those projects are confidential and cannot be disclosed.",
  webProjects: [
    {
      projectName: "Programming Diaries",
      image: "images/programmingdiaries.png",
      summary:
        "Developed a full stack blog application to provide content on techical topics across the internet with admin interface.",
      preview: "https://programmingdiaries.herokuapp.com/",
      techStack: ["Django", "SQLite", "Bootstrap", "JavaScript", "Heroku"],
    },
    {
      projectName: "Find Your Bank",
      image: "images/findyourbank.png",
      summary:
        "Developed a React application to render a list of banks fetched from API. Filtered the banks based on queries from localstorage, marked favorites banks.",
      preview: "https://clever-fermi-0d5d76.netlify.app",
      techStack: ["Reactjs", "Bootstrap", "JavaScript", "Netlify"],
    },
  ],
  freelanceProjects: [
    {
      projectName: "SnylloAir.com",
      image: "images/snylloair.png",
      summary:
        "Developed a company website to showcase the purpose, services and products provided by the company to audience.",
      preview: "https://www.snylloair.com/",
      techStack: ["Bootstrap", "JavaScript", "AWS-S3"],
    },
    {
      projectName: "Delivery+",
      image: "images/AM-Logo-.png",
      summary: "Android Application to display website in android devices.",
      preview:
        "https://play.google.com/store/apps/details?id=com.americanmarket.americanmarketandroid",
      techStack: ["Android", "JAVA", "Play Store"],
    },
  ],
};

export const experience = [
  {
    title: "Justmet",
    duration: "Agoust 2023 - Present",
    subtitle: "Software Engineer",
    details: [
      "Currently involved in developing healthcare products."
    ],
    tags: ["Golang", "K8s", "Docker", "Postgres"],
    icon: "heartbeat",
  },
];

export const education = [
  {
    title: "Software Engeneer",
    duration: "",
    subtitle: "UTN Santa Fe, Argentina",
    details: [
      "",
    ],
    tags: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management System",
      "Computer Networks",
      "Compiler Designing",
      "Cloud Computing",
    ],
    icon: "graduation-cap",
  },
];

export const footer = [
  {
    label: "Dev Profiles",
    data: [],
  },
  {
    label: "Resources",
    data: [
      {
        text: "Enable Dark/Light Mode",
        func: "enableDarkMode()",
      },
      {
        text: "Print this page",
        func: "window.print()",
      },
    ],
  },
  {
    label: "Social Profiles",
    data: [
      {
        text: "Linkedin",
        link: "https://www.linkedin.com/in/estebancastaneda/",
      },
      {
        text: "Twitter",
        link: "https://twitter.com/thesigmakid",
      },
      {
        text: "Buy me a coffee",
        link: "https://www.buymeacoffee.com/r194dME8y",
      },
    ],
  },
  {
    label: "copyright-text",
    data: [],
  },
];

const gitUserName = "2Cases";
const mediumUserName = "2Cases";

export const URLs = {
  mediumURL: `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUserName}`,
};
