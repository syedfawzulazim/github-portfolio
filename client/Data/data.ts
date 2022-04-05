import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "../type";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b> CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "Handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about: "I can develop robust  REST API using <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "A daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX Designer",
    about:
      "Stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Dedication",
    about: "Dedicated for learning new technologies and delivering the best",
  },
];

export const techologies: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "React & Redux",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "NextJs",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "TypeScript",
    level: "78",
  },
  {
    Icon: BsCircleFill,
    name: "NodeJs",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "MongoDB",
    level: "75",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Git & Github",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "RestAPI & GraphQL",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "SASS Tailwind",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Docker",
    level: "75",
  },
];
