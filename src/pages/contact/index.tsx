import { Mail, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Constant from "@/config/constant";

export default function ContactPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    // Description animation
    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Social links stagger animation
    const links = linksRef.current?.querySelectorAll('.social-link');
    if (links) {
      gsap.fromTo(
        links,
        { opacity: 0, y: 50, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: linksRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Hover animations for social links
    const socialLinks = linksRef.current?.querySelectorAll('.social-link');
    socialLinks?.forEach((link) => {
      link.addEventListener('mouseenter', () => {
        gsap.to(link, { 
          scale: 1.05, 
          duration: 0.3, 
          ease: "power2.out",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
        });
      });
      
      link.addEventListener('mouseleave', () => {
        gsap.to(link, { 
          scale: 1, 
          duration: 0.3, 
          ease: "power2.out",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      socialLinks?.forEach((link) => {
        link.removeEventListener('mouseenter', () => {});
        link.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <div ref={sectionRef} className="container max-w-6xl mx-auto px-4 py-12">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 ref={titleRef} className="text-4xl font-bold mb-2 text-foreground">
            Get in Touch
          </h1>
          <p ref={descriptionRef} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out through any of these platforms.
          </p>
        </div>
        
        <div ref={linksRef} className="flex flex-wrap justify-center gap-6 mt-12">
          <a
            href={Constant.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link group flex flex-col items-center gap-4 p-8 rounded-xl border border-border bg-card hover:bg-accent/50 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
              <Github className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg text-foreground">GitHub</h3>
              <p className="text-sm text-muted-foreground">View my projects</p>
            </div>
          </a>

          <a
            href={Constant.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link group flex flex-col items-center gap-4 p-8 rounded-xl border border-border bg-card hover:bg-accent/50 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/20 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/30 transition-colors">
              <Linkedin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg text-foreground">LinkedIn</h3>
              <p className="text-sm text-muted-foreground">Connect professionally</p>
            </div>
          </a>

          <a
            href={Constant.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link group flex flex-col items-center gap-4 p-8 rounded-xl border border-border bg-card hover:bg-accent/50 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/20 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/30 transition-colors">
              <Twitter className="h-6 w-6 text-blue-500 dark:text-blue-400" />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg text-foreground">Twitter</h3>
              <p className="text-sm text-muted-foreground">Follow my updates</p>
            </div>
          </a>

          <a
            href={Constant.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link group flex flex-col items-center gap-4 p-8 rounded-xl border border-border bg-card hover:bg-accent/50 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <div className="p-3 rounded-full bg-pink-100 dark:bg-pink-900/20 group-hover:bg-pink-200 dark:group-hover:bg-pink-800/30 transition-colors">
              <Instagram className="h-6 w-6 text-pink-600 dark:text-pink-400" />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg text-foreground">Instagram</h3>
              <p className="text-sm text-muted-foreground">Follow my journey</p>
            </div>
          </a>

          <a
            href={"mailto:" + Constant.email}
            className="social-link group flex flex-col items-center gap-4 p-8 rounded-xl border border-border bg-card hover:bg-accent/50 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/20 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/30 transition-colors">
              <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg text-foreground">Email</h3>
              <p className="text-sm text-muted-foreground">{Constant.email}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
