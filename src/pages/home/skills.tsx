import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IconType } from "react-icons";
import { useEffect, useState } from "react";

import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { ImTree } from "react-icons/im";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { FaFigma } from "react-icons/fa";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { DiDatabase } from "react-icons/di";
import { FaServer } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { SiExpo } from "react-icons/si";
import { FaTrophy } from "react-icons/fa";
import nationalChess from "../../assets/docs/AC-1016-85D84C-B-NA.pdf";
import stateChess1 from "../../assets/docs/AC-1016-9CFC25-SN-10-STATE .pdf";
import stateChess2 from "../../assets/docs/AC-1016-3D35A6-SN-11-STATE.pdf";
import stateChess3 from "../../assets/docs/AC-1016-101453-SN-12-STATE.pdf";


interface Technology {
  name: string;
  icon: IconType;
  iconClass?: string;
  certificate?: string;
}

interface Skill {
  category: string;
  icon: IconType;
  technologies: Technology[];
}

const certificates = {
  "National Chess Competition": nationalChess,
  "State Chess 1": stateChess1,
  "State Chess 2": stateChess2,
  "State Chess 3": stateChess3,
  "Chess Certification": nationalChess,
};

const skills: Skill[] = [
  {
    category: "Frontend",
    icon: HiOutlineComputerDesktop,
    technologies: [
      { name: "React", icon: FaReact, iconClass: "text-blue-500" },
      { name: "Next.js", icon: RiNextjsFill },
      { name: "React Native", icon: FaReact, iconClass: "text-blue-500" },
      { name: "Expo", icon: SiExpo, iconClass: "text-blue-500" },
    ],
  },
  {
    category: "Backend",
    icon: DiDatabase,
    technologies: [
      { name: "Node.js", icon: FaNodeJs, iconClass: "text-green-500" },
      { name: "Express", icon: ImTree, iconClass: "text-blue-500" },
      {
        name: "PostgreSQL",
        icon: BiLogoPostgresql,
        iconClass: "text-blue-500",
      },
      { name: "MongoDB", icon: SiMongodb, iconClass: "text-green-700" },
    ],
  },
  {
    category: "DevOps",
    icon: FaServer,
    technologies: [
      { name: "Docker", icon: FaDocker, iconClass: "text-blue-500" },
      { name: "AWS", icon: FaAws },
      { name: "Git", icon: FaGithub },
    ],
  },
  {
    category: "Tools",
    icon: FaTools,
    technologies: [
      { name: "VS Code", icon: VscVscode, iconClass: "text-blue-500" },
      { name: "Figma", icon: FaFigma },
    ],
  },
  {
    category: "Achievements",
    icon: FaTrophy,
    technologies: [
      { 
        name: "National Chess Competition", 
        icon: FaTrophy, 
        iconClass: "text-yellow-500",
        certificate: certificates["National Chess Competition"]
      },
      {
        name: "State Chess Competition",
        icon: FaTrophy,
        iconClass: "text-yellow-500",
        certificate: certificates["State Chess 1"]
      },
      { 
        name: "State Chess Competition",
        icon: FaTrophy,
        iconClass: "text-yellow-500",
        certificate: certificates["State Chess 2"]
      },
      { 
        name: "State Chess Competition",
        icon: FaTrophy,
        iconClass: "text-yellow-500",
        certificate: certificates["State Chess 3"]
      }
    ],
  },
];

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

export default function Skills() {
  const isMobile = useIsMobile();

  return (
    <section id="skills" className="w-full py-14">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
        Skills & Technologies
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => (
          <Card key={skill.category} className="overflow-hidden">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg flex gap-2 items-center">
                <skill.icon className="w-5 h-5" /> {skill.category}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  tech.certificate ? (
                    isMobile ? (
                      <a
                        key={tech.name}
                        href={tech.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Badge
                          variant="secondary"
                          className={cn(
                            "flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-secondary/80",
                            tech.certificate && "hover:bg-accent"
                          )}
                        >
                          <tech.icon className={cn("h-5 w-5", tech.iconClass)} />
                          <span>{tech.name}</span>
                        </Badge>
                      </a>
                    ) : (
                      <Dialog key={tech.name}>
                        <DialogTrigger asChild>
                          <Badge
                            variant="secondary"
                            className={cn(
                              "flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-secondary/80",
                              tech.certificate && "hover:bg-accent"
                            )}
                          >
                            <tech.icon className={cn("h-5 w-5", tech.iconClass)} />
                            <span>{tech.name}</span>
                          </Badge>
                        </DialogTrigger>
                        <DialogContent className="max-w-5xl w-[90vw] h-[90vh] overflow-hidden">
                          <DialogHeader>
                            <DialogTitle>{tech.name} Certificate</DialogTitle>
                          </DialogHeader>
                          <iframe
                            src={tech.certificate}
                            className="w-full h-[calc(90vh-80px)] border-0"
                            title={`${tech.name} Certificate`}
                          />
                        </DialogContent>
                      </Dialog>
                    )
                  ) : (
                    <Badge
                      key={tech.name}
                      variant="secondary"
                      className="flex items-center gap-2 px-2 py-1"
                    >
                      <tech.icon className={cn("h-5 w-5", tech.iconClass)} />
                      <span>{tech.name}</span>
                    </Badge>
                  )
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
