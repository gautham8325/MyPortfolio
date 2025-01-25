"use client";

import chatImage from "../../public/images/projects/chat.png";
import ChatBotImage from "../../public/images/projects/Chatbot.png";
import stopImage from "../../public/images/projects/stop.png";
import todoImage from "../../public/images/projects/todo.png";
import disImage from "../../public/images/projects/dis.png";
import rockImage from "../../public/images/projects/rockpaperscissor.png";
import sbotImage from "../../public/images/projects/imgbot.png";
import burnImage from "../../public/images/projects/burn.png";
import threadsImage from "../../public/images/projects/threads.png";
import ecomImage from "../../public/images/projects/ecom.png";

import ArrowRightIcon from "../../public/icons/arrow-up-right.svg";

import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { IconBrandGithub } from "@tabler/icons-react";
import { Card } from "@/components/Card";
import { ScrollArea } from "@/components/ui/scroll-area";

const projects = [
  {
    name: "Whatsapp ChatBot Portfolio",
    description:
      " WhatsApp ChatBot portfolio built with the MERN stack, providing detailed information about my skills, experience, and professional expertise. ",
    image: ChatBotImage,
    link: "https://gautham8325.github.io/whatsapp-chatbot-portfolio/",
    repo: "https://github.com/gautham8325/whatsapp-chatbot-portfolio",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      
    ],
    isTopProject: true,
    isAIML: false,
    isMern: true,
    isJava: false,
  },
  {
    name: "Full Stack Chat Application",
    description:
      "A Feature-rich chat application built with MERN, Socket.io, and TailwindCSS, featuring real-time messaging, JWT authentication, global state management, and seamless deployment.",
    image: chatImage,
    link: "https://github.com/gautham8325/full-stack-chat-application/tree/master",
    repo: "https://github.com/gautham8325/full-stack-chat-application/tree/master",
    tech: ["Socket.IO","Daisy UI", "TailwindCSS", "MongoDB", "Express", "Node.js", "React JS"],
    isTopProject: true,
    isAIML: false,
    isMern: true,
    isJava: false,
  },
  {
    name: "E-Commerce Application",
    description:
      "An e-commerce application built with Spring Boot and Hibernate, featuring automated database creation, reusable service layers, and a fully redesigned codebase for enhanced performance and scalability.",
    image: ecomImage,
    link: "https://github.com/gautham8325/E-commerce-/tree/main",
    repo: "https://github.com/gautham8325/E-commerce-/tree/main",
    tech: ["SpringBoot", "Hibernate", "MySQL", "Eclipse", "jdbc","Java"],
    isTopProject: true,
    isAIML: false,
    isMern: false,
    isJava: true,
  },
  {
    name: "Employee Burnout Prediction",
    description:
      "Project management dashboard built with modern web technologies. It leverages Next.js for the frontend, styled with Tailwind CSS, and uses Redux Toolkit and Material UI for state management and data grid handling. The backend is powered by Node.js and Express, with Prisma as the ORM to interact with a PostgreSQL database.",
    image: burnImage,
    link:"https://github.com/gautham8325/Employee-burnout-prediction-using-Machine-Learning",
    repo: "https://github.com/gautham8325/Employee-burnout-prediction-using-Machine-Learning",
    tech: [
    "MySQL",
    "Supervised Learning",
    "AI ML",
    "Python",
    "Power BI",
    "Numpy",
      "Pandas",
      "Sckit -learn"
    ],
    isAIML: true,
    isJava: false,
    isMern: false,
    isTopProject: true,
  },
  {
    name: "To Do List ",
    description:
      "A simple yet powerful to-do list application built with React, featuring dynamic task management, state management with hooks, and a clean, responsive UI.",
    image: todoImage,
    link: "https://gautham8325.github.io/To-Do-List-using-react/",
    repo: "https://github.com/gautham8325/To-Do-List-using-react",
    tech: [
      "HTML",
      "CSS",
      "React.js",
      
    ],
    isTopProject: false,
    isAIML: false,
    isMern: true,
    isJava: false,
  },
  {
    name: "Disease Prediction Using Machine Learning",
    description:
      "A machine learning-based disease prediction system that analyzes patient data to provide early diagnosis and actionable health insights.",
    image: disImage,
    repo: "https://github.com/gautham8325/Disease-prediction-from-symptoms",
    link:"https://github.com/gautham8325/Disease-prediction-from-symptoms",
    tech: ["Python Libraries", "Machine Learning Algorithms", "tensorflow", "pytorch"],
    isTopProject: true,
    isAIML: true,
    isMern: false,
    isJava: false,
  },
  {
    name: "AI Image Generation ChatBot  ",
    description:
      "Image Generation Bot using StableDiffusion ",
    image: sbotImage,
    link:"https://github.com/gautham8325/Image-Generation-Chatbot",
    repo: "https://github.com/gautham8325/Image-Generation-Chatbot",
    tech: ["Stable Diffusion","Hugging Face Libraries","Machine Learning","Python","Gradio"],
    isTopProject: false,
    isAIML: true,
    isMern: false,
    isJava: false,
  },
  {
    name: "Stop Watch  ",
    description:
      "Stop Watch designed using React JS.",
    image: stopImage,
    link: "https://gautham8325.github.io/Stopwatch_using_React/",
    repo: "https://github.com/gautham8325/Stopwatch_using_React",
    tech: ["JavaScript ", "HTML", "CSS"],
    isTopProject: false,
    isAIML: false,
    isMern: true,
    isJava: false,
  },
  {
    name: "Rock Paper Scissors Game",
    description: "A Rock Paper Scissors Game",
    image: rockImage,
    link: "https://rock-paper-scissors-mauve-phi.vercel.app/",
    repo: "https://github.com/gautham8325/rock-paper-scissors",
    tech: ["JavaScript ", "HTML", "CSS"],
    isTopProject: false,
    isAIML: false,
    isMern: true,
    isJava: false,
  },
  
];

export function ProjectsSection() {
  const tabs = [
    {
      title: "Top Projects",
      value: "top-projects",
      content: (
        <ScrollArea className="w-full overflow-y-auto relative h-full rounded-2xl  bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-center text-2xl font-cursive  mt-6">
            Top Projects
          </p>
          <ProjectList chosenStack="top-projects" />
        </ScrollArea>
      ),
    },
    {
      title: "AIML Projects",
      value: "aiml",
      content: (
        <ScrollArea className="w-full overflow-hidden relative h-full rounded-2xl  bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-center text-2xl font-cursive  mt-6">AIML</p>
          <ProjectList chosenStack="aiml" />
        </ScrollArea>
      ),
    },
    {
      title: "MERN Stack & HTML/CSS",
      value: "mern",
      content: (
        <ScrollArea className="w-full overflow-hidden relative h-full rounded-2xl  bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-center text-2xl font-cursive  mt-6">MERN Stack</p>
          <ProjectList chosenStack="mern" />
        </ScrollArea>
      ),
    },
    {
      title: "Java Projects",
      value: "java",
      content: (
        <ScrollArea className="w-full overflow-hidden relative h-full rounded-2xl  bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-center text-2xl font-cursive  mt-6">Java</p>
          <ProjectList chosenStack="java" />
        </ScrollArea>
      ),
    },
    {
      title: "All Projects",
      value: "all-projects",
      content: (
        <ScrollArea className="w-full overflow-hidden relative h-full rounded-2xl  bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-center text-2xl font-cursive  mt-6">
            All Projects
          </p>
          <ProjectList chosenStack="all-projects" />
        </ScrollArea>
      ),
    },
  ];

  return (
    <div className=" h-full my-40">
      <div className="container mb-12">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
            Real-world Results
          </p>
        </div>
        <h1 className="font-cursive text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h1>
        <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto">
          See how I transformed concepts into engaging digital experiences.
        </p>
      </div>
      <div
        className="h-screen md:h-[60rem] [perspective:1000px] relative flex flex-col  mx-auto  items-center justify-center w-screen md:w-3/4 "
        id="projects"
      >
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}

const ProjectList = ({ chosenStack }: { chosenStack: string }) => {
  const filteredProjects = projects.filter((project) => {
    if (chosenStack === "aiml") return project.isAIML;
    if (chosenStack === "top-projects") return project.isTopProject;
    if (chosenStack === "mern") return project.isMern;
    if (chosenStack === "java") return project.isJava;
    return true;
  });

  return (
    <div>
      <div className="flex flex-col gap-20 mt-0 md:mt-10">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            
            <Card
              key={index}
              className=" px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20  last-of-type:mb-36 md:sticky"
              style={{
                top: `calc(64px + ${index * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl">
                    {project.name}
                  </h3>
                  <hr className="border-white/5 border-t-2 mt-4" />
                  <p className="text-white/60 mt-4 text-sm md:text-base ">
                    {project.description}
                  </p>
                  <ul className="text-white/50 mt-4 flex flex-wrap gap-4 flex-row">
                    {project.tech.map((tech, index) => (
                      <li
                        key={index}
                        className="bg-white/10 p-2 rounded-lg text-white/50 text-small md:text-base"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-row gap-4 items-center justify-start my-8">
                    <Link
                      href={project.link}
                      className="w-2/3 md:w-2/5"
                      target="_blank"
                    >
                      <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 cursor-pointer hover:bg-white/80   transition-all duration-300">
                        <span>View Live Site</span>
                        <ArrowRightIcon className="size-4 " />
                      </button>
                    </Link>

                    <Link href={project.repo} target="_blank">
                      <button className="bg-black p-2 rounded-full cursor-pointer">
                        <IconBrandGithub className="size-8" />
                      </button>
                    </Link>
                  </div>
                </div>
                <div>
                  <Image
                    src={project.image}
                    alt={project.name}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute  lg:h-full lg:w-auto lg:max-w-none rounded-t-lg md:rounded-tl-lg"
                  />
                </div>
              </div>
            </Card>
          ))
        ) : (
          <p>No projects found for the selected filter.</p>
        )}
      </div>
    </div>
  );
};
