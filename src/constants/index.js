import {
  mobile,
  backend,
  creator,
  javascript,
  python,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  nextjs,
  java,
  web,
  gaotek,
  threejs,
  workvibe,
  tastyexploresr,
  aicodereview,
  chatweb,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Web Deginer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "GAO Tek",
    icon: gaotek,
    iconBg: "#E6DEDD",
    date: "December 2024 - March 2025",
    points: [
      "Developed responsive and interactive web interfaces using HTML, CSS, JavaScript, and React.js, focusing on modern UI/UX standards and cross-device compatibility.",
      "Implemented dynamic website animations to enhance user engagement and visual appeal, using CSS animations and JavaScript-based libraries.",
      "Built and customized e-commerce frontend pages including product listings, carts, and checkout flows, ensuring seamless user experience and clean component architecture.",
      "Created a full-stack blog application with user authentication, content creation, and data handling, integrating both frontend (React.js) and backend (WordPress/REST APIs).",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ChatWeb",
    description:
      "A real-time chat app with user authentication, live messaging, and multiple theme options, built using the MERN stack.",
    tags: [
      {
        name: "react.js",
        color: "red-text-gradient",
      },
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "gray-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
      {
        name: "JWT",
        color: "yellow-text-gradient",
      },
    ],
    image: chatweb,
    source_code_link: "https://github.com/Lokesh-Shimpi/ChatWeb.git",
    // image: carrent,
    // live_demo_link: "http://xyz.com/",
  },
  {
    name: "WorkVibe",
    description:
      "A modern job portal where users can search and filter jobs, apply online, and employers can post and manage job listings with modern UI.",
    tags: [
      {
        name: "react.js",
        color: "red-text-gradient",
      },
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
      {
        name: "clerk",
        color: "yellow-text-gradient",
      },
    ],
    image: workvibe,
    source_code_link: "https://github.com/Lokesh-Shimpi/WorkVibe.git",
  },
  {
    name: "Ai Code Reviewer",
    description:
      "An AI-powered code review platform that provides verdicts, suggests fixes, detects issues, recommends improvements, and allows code testing — all in one place.",
    tags: [
      {
        name: "react.js",
        color: "red-text-gradient",
      },
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "blue-text-gradient",
      },
      {
        name: "gemini",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: aicodereview,
    source_code_link: "https://github.com/Lokesh-Shimpi/Ai_Code_Reviewer.git",
  },
  {
    name: "TestyExplorer",
    description:
      "A smart recipe finder with filters, diverse cuisines, a shopping list, and a weekly meal planner to simplify cooking planning.",
    tags: [
      {
        name: "react.js",
        color: "red-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tastyexploresr,
    source_code_link: "https://github.com/Lokesh-Shimpi/Recipe-Finder.git",
  },
];

export { services, technologies, experiences, testimonials, projects };