import portfolioPic from "../../public/images/portfolio.png";
import pokemonAppPic from "../../public/images/pokemon_app.png";
import fyaPic from "../../public/images/fya.png";

export const projects = [
  {
    title: "Feel Your Achievement",
    description:
      "Habit Tracking Web app. By managing your daily habits, it will help you get closer to your goals and you can feel a sense of achievement. Also, the stopwatch and timer functions enable time management.",
    image: fyaPic,
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    source: "https://github.com/mikuweb/Feel_Your_Achievement",
    visit: "https://feel-your-achievement.vercel.app/",
    id: 0,
  },
  {
    title: "Pokémon App",
    description:
      "Pokémon application with Pokémon name guessing game and Pokémon list. It was used 'React with TypeScript', 'Next.js' and 'Tailwind' for styling.",
    image: pokemonAppPic,
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    source: "https://github.com/mikuweb/Pokemon-App",
    visit: "https://pokemon-app-nine-zeta.vercel.app/",
    id: 1,
  },
  {
    title: "Portfolio",
    description:
      "This portfolio website. It was used 'React with TypeScript', 'Next.js' and 'Tailwind' for styling.",
    image: portfolioPic,
    tags: ["React", "Next.js", "Tailwind"],
    source: "https://github.com/mikuweb/Portfolio/tree/main",
    visit: "https://miku-kawata-portfolio.vercel.app/",
    id: 2,
  },
];

export const techs = [
  {
    title: "HTML",
    image: "/images/html5_icon.svg",
    style: "shadow-orange-500",
    id: 0,
  },
  {
    title: "CSS",
    image: "/images/css3_icon.svg",
    style: "shadow-sky-600",
    id: 1,
  },
  {
    title: "JavaScript",
    image: "/images/javascript_icon.svg",
    style: "shadow-yellow-300",
    id: 2,
  },
  {
    title: "React",
    image: "/images/react_icon.svg",
    style: "shadow-cyan-500",
    id: 3,
  },
  {
    title: "Tailwind",
    image: "/images/tailwind_icon.svg",
    style: "shadow-cyan-500",
    iconColor: "shadow-cyan-500",
    id: 4,
  },
  {
    title: "Next.js",
    image: "/images/nextjs_icon.svg",
    style: "shadow-gray-400",
    id: 5,
  },
  {
    title: "TypeScript",
    image: "/images/typescript_icon.svg",
    style: "shadow-sky-600",
    iconColor: "shadow-sky-600",
    id: 6,
  },
  {
    title: "Github",
    image: "/images/github_icon.svg",
    style: "shadow-gray-400",
    id: 7,
  },
  {
    title: "Node.js",
    image: "/images/nodejs_icon.svg",
    style: "shadow-green-600",
    id: 8,
  },
  {
    title: "Figma",
    image: "/images/figma_icon.svg",
    style: "shadow-orange-500",
    id: 9,
  },
  {
    title: "Sass/SCSS",
    image: "/images/sass_icon.svg",
    style: "shadow-pink-400",
    id: 10,
  },
  {
    title: "Recoil",
    image: "/images/recoil_icon.svg",
    style: "shadow-sky-600",
    id: 11,
  },
];

export const aboutMe = [
  {
    title: "Lifelong Learner",
    sentence:
      "With a lifelong learner mindset, I pursue my growth as a web developer by continuously seeking knowledge and improvement.",
    id: 0,
  },
  {
    title: "Excellent Communicator",
    sentence:
      "Years of sales, secretarial, and customer service experience honed my communication skills.",
    id: 1,
  },
  {
    title: "Life Adventurer",
    sentence:
      "I've traveled and lived in various places, embracing diverse experiences.",
    id: 2,
  },
  {
    title: "Love",
    sentence: "Piano, flower, fitness, reading, cooking, travel, and dogs",
    id: 3,
  },
];
