/*import { EvervaultCard } from "@/components/ui/evervault-card";
import {
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandReact,
  IconBrandRedux,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandMongodb,
  IconBrandPhp,

  IconBrandPython,
  IconGitPullRequest,
  IconDatabase,
  IconTerminal2,
  IconServer,
  IconApi,
  IconBrandHtml5,
  IconBrandCss3,

  IconGrain,
  IconSql,
  IconBrain,
  IconCloudComputing,
} from "@tabler/icons-react";

export const Experience = () => {
  const experience = [
    { name: "C", logo: <IconTerminal2 size={100} stroke={1.25} /> }, // Placeholder for C
    { name: "C++", logo: <IconTerminal2 size={100} stroke={1.25} /> }, // Placeholder for C++
    { name: "Python", logo: <IconBrandPython size={100} stroke={1.25} /> },
   
    { name: "PHP", logo: <IconBrandPhp size={100} stroke={1.25} /> },
    { name: "Shell Script", logo: <IconTerminal2 size={100} stroke={1.25} /> },
    { name: "TypeScript", logo: <IconBrandTypescript size={100} stroke={1.25} /> },
    { name: "JavaScript", logo: <IconBrandJavascript size={100} stroke={1.25} /> },
    { name: "React", logo: <IconBrandReact size={100} stroke={1.25} /> },
    { name: "Tailwind CSS", logo: <IconBrandTailwind size={100} stroke={1.25} /> },
    { name: "Node.js", logo: <IconBrandNodejs size={100} stroke={1.25} /> },
    { name: "MongoDB", logo: <IconBrandMongodb size={100} stroke={1.25} /> },
    { name: "Express.js", logo: <IconGrain size={100} stroke={1.25} /> },
    { name: "SQL", logo: <IconSql size={100} stroke={1.25} /> },
    { name: "Git & GitHub", logo: <IconGitPullRequest size={100} stroke={1.25} /> },
    { name: "Postman", logo: <IconApi size={100} stroke={1.25} /> },
    { name: "FastAPI", logo: <IconServer size={100} stroke={1.25} /> },
    { name: "PostgreSQL", logo: <IconDatabase size={100} stroke={1.25} /> },
 
    { name: "HTML", logo: <IconBrandHtml5 size={100} stroke={1.25} /> },
    { name: "CSS", logo: <IconBrandCss3 size={100} stroke={1.25} /> },
    { name: "MERN Stack", logo: <IconBrandReact size={100} stroke={1.25} /> },
    { name: "AI/ML", logo: <IconBrain size={100} stroke={1.25} /> },
    { name: "TensorFlow", logo: <IconCloudComputing size={100} stroke={1.25} /> }, // Placeholder
    { name: "PyTorch", logo: <IconCloudComputing size={100} stroke={1.25} /> },   // Placeholder
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-cursive text-3xl md:text-5xl text-center mt-6">
      Skills
      </h1>
      <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center mt-4 mb-8 max-w-md mx-auto">
        A small list of cool things I use to construct my projects.
      </p>

      <div
        id="experience"
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-3/4 mx-auto"
      >
        {experience.map((item) => (
          <div className="border border-white" key={item.name}>
            <EvervaultCard text={item.name} icon={item.logo} />
          </div>
        ))}
      </div>
    </div>
  );
};

"use client"; // Ensures this component is treated as a client-side component

import { EvervaultCard } from "@/components/ui/evervault-card";
import {
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandMongodb,
  IconBrandPhp,
  IconBrandPython,
  IconGitPullRequest,
  IconDatabase,
  IconTerminal2,
  IconServer,
  IconApi,
  IconBrandHtml5,
  IconBrandCss3,
  IconGrain,
  IconSql,
  IconBrain,
  IconCloudComputing,
} from "@tabler/icons-react";

export const Experience = () => {
  const skills = [
    { name: "C", logo: <IconTerminal2 size={100} stroke={1.25} /> },
    { name: "C++", logo: <IconTerminal2 size={100} stroke={1.25} /> },
    { name: "Python", logo: <IconBrandPython size={100} stroke={1.25} /> },
    { name: "PHP", logo: <IconBrandPhp size={100} stroke={1.25} /> },
    { name: "Shell Script", logo: <IconTerminal2 size={100} stroke={1.25} /> },
    { name: "TypeScript", logo: <IconBrandTypescript size={100} stroke={1.25} /> },
    { name: "JavaScript", logo: <IconBrandJavascript size={100} stroke={1.25} /> },
    { name: "React", logo: <IconBrandReact size={100} stroke={1.25} /> },
    { name: "Tailwind CSS", logo: <IconBrandTailwind size={100} stroke={1.25} /> },
    { name: "Node.js", logo: <IconBrandNodejs size={100} stroke={1.25} /> },
    { name: "MongoDB", logo: <IconBrandMongodb size={100} stroke={1.25} /> },
    { name: "Express.js", logo: <IconGrain size={100} stroke={1.25} /> },
    { name: "SQL", logo: <IconSql size={100} stroke={1.25} /> },
    { name: "Git & GitHub", logo: <IconGitPullRequest size={100} stroke={1.25} /> },
    { name: "Postman", logo: <IconApi size={100} stroke={1.25} /> },
    { name: "FastAPI", logo: <IconServer size={100} stroke={1.25} /> },
    { name: "PostgreSQL", logo: <IconDatabase size={100} stroke={1.25} /> },
    { name: "HTML", logo: <IconBrandHtml5 size={100} stroke={1.25} /> },
    { name: "CSS", logo: <IconBrandCss3 size={100} stroke={1.25} /> },
    { name: "MERN Stack", logo: <IconBrandReact size={100} stroke={1.25} /> },
    { name: "AI/ML", logo: <IconBrain size={100} stroke={1.25} /> },
    { name: "TensorFlow", logo: <IconCloudComputing size={100} stroke={1.25} /> },
    { name: "PyTorch", logo: <IconCloudComputing size={100} stroke={1.25} /> },
  ];

  const experience = [
    {
      title: "Research Intern, SRM University AP",
      date: "August 2024 – Present",
      description: `
        • Developing and maintaining web applications using NestJS, MERN stack, and FastAPI 
          to ensure high performance and scalability.
        • Collaborating with cross-functional teams to design, implement, and test new features.
        • Troubleshooting and resolving technical issues while contributing to code reviews.`,
    },
    {
      title: "AI/ML Deep Learning Intern, IBM Edunet",
      date: "April 2024 – July 2024",
      description: `
        • Developed deep learning models using TensorFlow and PyTorch to solve complex problems 
          in computer vision and natural language processing.
        • Built end-to-end machine learning pipelines, including data collection, preprocessing, 
          model training, and deployment.
        • Researched and implemented cutting-edge AI techniques for NLP and computer vision in 
          the education sector.`,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-cursive text-3xl md:text-5xl text-center mt-6">Skills</h1>
      <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center mt-4 mb-8 max-w-md mx-auto">
        A small list of cool things I use to construct my projects.
      </p>

      <div id="skills" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-3/4 mx-auto">
        {skills.map((item) => (
          <div className="border border-white p-4" key={item.name}>
            <EvervaultCard text={item.name} icon={item.logo} />
          </div>
        ))}
      </div>

      <h1 className="font-cursive text-3xl md:text-5xl text-center mt-16">Experience</h1>
      <div className="mt-8 w-3/4 mx-auto space-y-8">
        {experience.map((item, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-white">{item.title}</h2>
            <p className="text-white/60 mt-2">{item.date}</p>
            <p className="text-white/70 mt-4 whitespace-pre-line">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;*/
"use client"; // Ensures this component is treated as a client-side component

import { EvervaultCard } from "@/components/ui/evervault-card";
import {
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandMongodb,
  IconBrandPhp,
  IconBrandPython,
  IconGitPullRequest,
  IconDatabase,
  IconTerminal2,
  IconServer,
  IconApi,
  IconBrandHtml5,
  IconBrandCss3,
  IconGrain,
  IconSql,
  IconBrain,
  IconCloudComputing,
} from "@tabler/icons-react";

export const Experience = () => {
  const skills = [
    { name: "C", logo: <IconTerminal2 size={100} stroke={1.25} /> },
    { name: "C++", logo: <IconTerminal2 size={100} stroke={1.25} /> },
    { name: "Python", logo: <IconBrandPython size={100} stroke={1.25} /> },
    { name: "PHP", logo: <IconBrandPhp size={100} stroke={1.25} /> },
    { name: "Shell Script", logo: <IconTerminal2 size={100} stroke={1.25} /> },
    { name: "TypeScript", logo: <IconBrandTypescript size={100} stroke={1.25} /> },
    { name: "JavaScript", logo: <IconBrandJavascript size={100} stroke={1.25} /> },
    { name: "React", logo: <IconBrandReact size={100} stroke={1.25} /> },
    { name: "Tailwind CSS", logo: <IconBrandTailwind size={100} stroke={1.25} /> },
    { name: "Node.js", logo: <IconBrandNodejs size={100} stroke={1.25} /> },
    { name: "MongoDB", logo: <IconBrandMongodb size={100} stroke={1.25} /> },
    { name: "Express.js", logo: <IconGrain size={100} stroke={1.25} /> },
    { name: "SQL", logo: <IconSql size={100} stroke={1.25} /> },
    { name: "Git & GitHub", logo: <IconGitPullRequest size={100} stroke={1.25} /> },
    { name: "Postman", logo: <IconApi size={100} stroke={1.25} /> },
    { name: "FastAPI", logo: <IconServer size={100} stroke={1.25} /> },
    { name: "PostgreSQL", logo: <IconDatabase size={100} stroke={1.25} /> },
    { name: "HTML", logo: <IconBrandHtml5 size={100} stroke={1.25} /> },
    { name: "CSS", logo: <IconBrandCss3 size={100} stroke={1.25} /> },
    { name: "MERN Stack", logo: <IconBrandReact size={100} stroke={1.25} /> },
    { name: "AI/ML", logo: <IconBrain size={100} stroke={1.25} /> },
    { name: "TensorFlow", logo: <IconCloudComputing size={100} stroke={1.25} /> },
    { name: "PyTorch", logo: <IconCloudComputing size={100} stroke={1.25} /> },
  ];

  const experience = [
    {
      title: "Research Intern, SRM University AP",
      date: "June 3rd 2024 – July 31st 2024",
      description: `
        • Developing and maintaining web applications using NestJS, MERN stack, and FastAPI 
          to ensure high performance and scalability.
        • Contributed to the E15 Project, which focused on designing an integrated tech platform to provide farmers withreal-time market updates, price trends, and innovative techniques to enhance agricultural profitability.
        • Worked collaboratively within a team under the mentorship of the Head of the Directorate of Entrepreneurship and Innovation.`,
    },
    {
      title: "AI/ML Deep Learning Intern, IBM Edunet",
      date: "April 2024 – July 2024",
      description: `
        • Developed deep learning models using TensorFlow and PyTorch to solve complex problems 
          in computer vision and natural language processing.
        • Built end-to-end machine learning pipelines, including data collection, preprocessing, 
          model training, and deployment.
        • Researched and implemented cutting-edge AI techniques for NLP and computer vision in 
          the education sector.`,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-cursive text-3xl md:text-5xl text-center mt-6">Skills</h1>
      <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center mt-4 mb-8 max-w-md mx-auto">
        A small list of cool things I use to construct my projects.
      </p>

      <div id="skills" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-3/4 mx-auto">
        {skills.map((item) => (
          <div className="border border-white p-4" key={item.name}>
            <EvervaultCard text={item.name} icon={item.logo} />
          </div>
        ))}
      </div>

      <h1 className="font-cursive text-3xl md:text-5xl text-center mt-16">Experience</h1>
      <div className="mt-8 w-3/4 mx-auto space-y-8">
        {experience.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <h2 className="text-2xl font-bold text-white">{item.title}</h2>
            <p className="text-white/60 mt-2">{item.date}</p>
            <p className="text-white/70 mt-4 whitespace-pre-line">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
