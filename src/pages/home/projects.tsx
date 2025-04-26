import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "lucide-react";

import SimplePgImg from "@/assets/images/projects/simplepg.png";
import DisuntImg from "@/assets/images/projects/disunt.webp";
import ProstarCNC from "@/assets/images/projects/prostarcnc.webp";
import CrmTools from "@/assets/images/projects/crmtools.webp";

const projects = [
  {
    title: "CRM Tools",
    description:
      "CRM tools for managing customer relationships, sales, and marketing campaigns. Built with React, Node.js, and Postgres.",
    image: CrmTools,
    technologies: ["React", "Node.js", "Postgres", "ShadCn UI"],
  },
  {
    title: "Simple PG",
    description:
      "Paying guest management system built with React, Node.js, and PostgreSQL. Features include user authentication, booking management, and payment processing.",
    image: SimplePgImg,
    technologies: ["React", "Node.js", "Postgres", "ShadCn UI"],
    demoLink: "https://simplepg.com/",
  },
  {
    title: "Prostar CNC",
    description:
      "Portfolio website for Prostar CNC built with Next.js. Features a custom CMS for managing content.",
    image: ProstarCNC,
    technologies: ["Next Js", "ShadCn UI"],
    demoLink: "https://prostarcnc.com/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-14">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">Featured Projects</h2>
      <div className="flex justify-end p-4">
        <Link to="/projects" className="font-bold flex items-center gap-2">
          View all projects <CircleArrowRight className="h-5 w-5" />
        </Link>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
            <CardHeader className="p-0">
              <div className="relative aspect-video overflow-hidden">
                <img src={project.image} alt={project.title} className="object-cover transition-all hover:scale-105" />
              </div>
            </CardHeader>
            <CardContent className="flex-grow p-6">
              <CardTitle className="mb-2 text-2xl">{project.title}</CardTitle>
              <CardDescription className="mb-4">{project.description}</CardDescription>
              <div className="">
                <h4 className="text-sm font-semibold mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="">
              <div className="flex justify-between w-full">
                {project.demoLink && (
                  <Button asChild variant="outline" size="sm">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <ExternalLinkIcon className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}