import { Mail, Github, Linkedin, Instagram } from "lucide-react";
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
          scale: 1.1, 
          duration: 0.3, 
          ease: "power2.out",
          boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
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
    <div ref={sectionRef} className="container max-w-4xl mx-auto px-4 py-12">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 ref={titleRef} className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-gradient">
            Get in Touch
          </h1>
          <p ref={descriptionRef} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out through any of these platforms.
          </p>
        </div>
        
        <div ref={linksRef} className="flex flex-wrap justify-center gap-6 mt-12">
          <a
            href={"mailto:" + Constant.email}
            className="social-link group flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-gray-200 hover:border-blue-500 transition-all duration-300 bg-white hover:bg-blue-50 shadow-lg hover:shadow-xl"
          >
            <div className="p-4 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
              <Mail className="h-8 w-8 text-blue-600" />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-sm text-muted-foreground">{Constant.email}</p>
            </div>
          </a>

          <a
            href={Constant.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link group flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-gray-200 hover:border-gray-800 transition-all duration-300 bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl"
          >
            <div className="p-4 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
              <Github className="h-8 w-8 text-gray-800" />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg">GitHub</h3>
              <p className="text-sm text-muted-foreground">View my projects</p>
            </div>
          </a>

          <a
            href={Constant.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link group flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-gray-200 hover:border-blue-600 transition-all duration-300 bg-white hover:bg-blue-50 shadow-lg hover:shadow-xl"
          >
            <div className="p-4 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
              <Linkedin className="h-8 w-8 text-blue-600" />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg">LinkedIn</h3>
              <p className="text-sm text-muted-foreground">Connect professionally</p>
            </div>
          </a>

          <a
            href={Constant.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link group flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-gray-200 hover:border-pink-500 transition-all duration-300 bg-white hover:bg-pink-50 shadow-lg hover:shadow-xl"
          >
            <div className="p-4 rounded-full bg-pink-100 group-hover:bg-pink-200 transition-colors">
              <Instagram className="h-8 w-8 text-pink-600" />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg">Instagram</h3>
              <p className="text-sm text-muted-foreground">Follow my journey</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
