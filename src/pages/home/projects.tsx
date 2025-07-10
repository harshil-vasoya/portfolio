import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SimplePgImg from "@/assets/images/projects/simplepg.png";
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
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Title animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Cards stagger animation
    const cards = cardsRef.current?.querySelectorAll('.project-card');
    if (cards) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Hover animations for cards
    cards?.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { 
          scale: 1.02, 
          duration: 0.3, 
          ease: "power2.out",
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { 
          scale: 1, 
          duration: 0.3, 
          ease: "power2.out",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
        });
      });
    });

    return () => {
      // Cleanup
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      cards?.forEach((card) => {
        card.removeEventListener('mouseenter', () => {});
        card.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-14">
      <h2 ref={titleRef} className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">Featured Projects</h2>
      <div className="flex justify-end p-4">
        <Link to="/projects" className="font-bold flex items-center gap-2">
          View all projects <CircleArrowRight className="h-5 w-5" />
        </Link>
      </div>
      <div ref={cardsRef} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title} className="project-card flex flex-col overflow-hidden transition-all hover:shadow-lg">
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