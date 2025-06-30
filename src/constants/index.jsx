import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
import eshop3  from "../assets/eshop-3.jpg";
import music1  from "../assets/music1.jpg";
import housing from "../assets/housing.jpg"
import food from "../assets/food.jpg"
import personImage from "../assets/testimonial.webp";
import portfolio from "../assets/portfolio.jpg"
import book from "../assets/book2.jpg"

import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodeTree
} from "@remixicon/react";
import {
  RiDatabaseLine,
  RiCodeSSlashLine,
  RiGitBranchLine,
} from "@remixicon/react";
import { SiFigma, SiExpress, SiPostman, SiPostgresql, SiPython, SiAngular } from 'react-icons/si';


export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "SANIYA FARHEEN",
  role: "Full Stack Developer",
  subheading:
    "With 2 years of hands-on experience building dynamic and scalable web applications, I thrive on creating clean, efficient solutions across the stack. Currently exploring junior developer roles where I can contribute meaningfully and continue growing through real-world impact.",
};

export const PROJECTS = [
  {
    id: 1,
    title: "E-Shop Website",
    description:
      "A full-featured e-commerce website built with React and Node.js. It includes user authentication, product management, and an integrated payment gateway.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    imgSrc: eshop3,
    link: "https://github.com/Saniya98/Farhsan_Shop_cart",
  },
  {
    id: 2,
    title: "Music App",
    description:"A full-stack music streaming app featuring playlist creation, genre exploration, and song sharing. Developed with React, Node.js, Express.js, and MongoDB.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB"],
    imgSrc: music1 ,
    link: "https://github.com/Saniya98/Nirvana_music_app",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects and skills. Fully responsive and optimized for performance.",
    techStack: ["React", "Tailwind CSS","GSAP"],
    imgSrc: portfolio,
    link: "https://github.com/Saniya98/My_Portfolio",
  },
  {
    id: 4,
    title: "NovelNest",
    description:
      "An online book library application that allows users to add, edit, and delete books, as well as view detailed information about each book, including the author and other relevant details",
    techStack: ["React","MongoDB", "Tailwind CSS"],
    imgSrc: book,
    link: "https://github.com/Saniya98/Book_Store",
  },
  {
    id: 5,
    title: "HomeSearchr",
    description:
      "Designed and developed a user-friendly house location app to help users discover rental or sale listings based on their preferences and geolocation",
    techStack: ["Angular", "Firebase", "Material UI"],
    imgSrc: housing,
    link: "https://example-taskapp.com",
  },
  {
    id: 6,
    title: "GrubHive",
    description:
      "Built a fully functional food ordering web application using the MERN stack with Stripe integration.",
    techStack: ["React","Node.js", "MongoDB", "Express"],
    imgSrc: food,
    link: "https://github.com/Saniya98/GrubHive",
  },
];

export const SKILLS = [
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
  },
  {
  name: "Angular",
  icon: <SiAngular title="Angular" className="text-2xl" style={{ color: '#DD0031' }}/>
   },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500" />,
  },
  {
    name: "Python",
    icon: <SiPython title="Python" className="text-2xl" style={{ color: '#306998' }} />,
  },
  {
    name: "Node.js",
    icon: <RiNodeTree className="text-green-500" />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-600 text-2xl" />,
  },
  {
    name: "MongoDB",
    icon: <RiDatabaseLine className="text-green-600" />,
  },
  {
    name: "Express",
    icon: <SiExpress className="text-2xl" />,
  },
  {
    name: "Postman",
    icon: <SiPostman className="text-orange-500 text-2xl" />,
  },
  {
    name: "HTML5",
    icon: <RiHtml5Line className="text-orange-600" />,
  },
  // {
  //   name: "CSS3",
  //   icon: <RiCss3Line className="text-blue-500" />,
  // },

  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },
  
  {
    name: "Figma",
    icon: <SiFigma className="text-purple-300 text-2xl" />,
  },
  
];

export const EXPERIENCES = [
  {
    yearRange: "2024 - Present",
    role: "Full Stack Developer",
    company: "One Community Global",
    description:
      "Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.",
    techStack: ["Javascript", "React.js", "Next.js", "MongoDB"],
  },
  {
    yearRange: "2023 - 2024",
    role: "Teachning Assistant",
    company: "Stevens Institute of Technology",
    description:
      "Guided students in designing and developing web applications using HTML, CSS, and JavaScript. Collaborated closely with them to troubleshoot issues and provide tailored solutions. Emphasized the implementation of responsive designs and optimized front-end performance for enhanced user experiences.",
    techStack: ["HTML", "CSS", "MySQL", "Javascript"],
  },
  {
    yearRange: "2020 - 2022",
    role: "Software Engineer",
    company: "DXC Technology",
    description:
      "Worked with a leading German bank to gather requirements and translate them into user stories. Resolved issues in agile team, collaborating with Engineering and QA team. Automated server-cluster management with VMare VRealize Orchestration",
    techStack: ["VMware VRealize suite", "python", "Linux"],
  },
  {
    yearRange: "2019 - 2020",
    role: "Web Development Intern",
    company: "Veriton Software Solutions",
    description:
      "Contributed to the development of web applications using HTML, CSS, JavaScript, and Node.js. Designed scalable MySQL back-end with ER-diagrams and created UI mockups using Figma tool. Worked closely with product managers to prioritize features and enhancements.",
    techStack: ["Javascript", "HTML", "CSS", "SQL"],
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Master of Science in Computer Science",
    institution: "Stevens Institute of Technology",
    duration: "2022 - 2024",
    description:
      "Graduated with honors in Computer Science, focusing on algorithms, data structures, and web development.",
  },
  {
    id: 2,
    degree: "Bachelor of Science in Information Science",
    institution: "Visvesvaraya Technological University",
    duration: "2016 - 2020",
    description:
      "Earned a Bachelor's degree with honors in Information Science, focusing on Operating Systems, Software Engineering, and Machine Learning",
  },
  

];

export const TESTIMONIAL = {
  name: "Sarah Doe",
  title: "CEO, TechCorp",
  quote:
    "Working with David was a game-changer. His expertise in full-stack development helped us scale our product with ease. His attention to detail and passion for quality are unmatched.",
  image: personImage,
};
