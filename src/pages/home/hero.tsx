import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";
import Constant from "@/config/constant";
import ZoomableImage from "@/components/shared/image-zoom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Hero section entrance animation
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
    .fromTo(
      descriptionRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.5"
    )
    .fromTo(
      buttonsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.3"
    )
    .fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8, rotation: -5 },
      { opacity: 1, scale: 1, rotation: 0, duration: 1.2, ease: "back.out(1.7)" },
      "-=0.5"
    );

    // Hover animation for social buttons
    const buttons = buttonsRef.current?.querySelectorAll('button');
    buttons?.forEach((button) => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, { scale: 1.1, duration: 0.2, ease: "power2.out" });
      });
      
      button.addEventListener('mouseleave', () => {
        gsap.to(button, { scale: 1, duration: 0.2, ease: "power2.out" });
      });
    });

    return () => {
      // Cleanup
      buttons?.forEach((button) => {
        button.removeEventListener('mouseenter', () => {});
        button.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <section ref={heroRef} className="my-4 flex flex-col md:flex-row gap-4 py-36 md:py-10">
      <div className="p-7 w-full flex flex-col gap-5 justify-center">
        <div className="space-y-4">
          <h1 ref={titleRef} className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Hi, I'm Harshil Vasoya
            <br className="" />
            Student Of Computer Science
          </h1>

          <p ref={descriptionRef} className="text-lg text-muted-foreground sm:text-xl">
            creator of&nbsp;
            <a
              href="https://simplepg.com/"
              className="text-blue-500"
              target="_blank"
            >
              simplepg.com
            </a>
            , Director of{" "}
            <a
              href="https://ullasindia.com//"
              className="text-blue-500"
              target="_blank"
            >
              Ullas India IT Solutions Limited
            </a>
            .
            <br /> loves to build things that people can use.
          </p>
        </div>

        <div ref={buttonsRef} className="flex gap-4 flex-wrap">
          <div className="flex gap-4">
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                window.open(Constant.github, "_blank");
              }}
            >
              <Github className="w-4 h-4" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                window.open(Constant.linkedin, "_blank");
              }}
            >
              <Linkedin className="w-4 h-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                window.open(Constant.twitter, "_blank");
              }}
            >
              <Twitter className="w-4 h-4" />
              <span className="sr-only">Twitter</span>
            </Button>
          </div>
        </div>
      </div>
      <div ref={imageRef} className="w-full md:w-2/3  flex items-center justify-center">
        <ZoomableImage
          src="/assets/images/poster.webp"
          alt="Developer portrait"
          className="w-96 border-2 border-gray-300 rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}

export default Hero;
