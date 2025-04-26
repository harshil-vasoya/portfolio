import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Constants from "@/config/constant";

function Footer() {
  return (
    <footer className="border rounded-xl shadow p-7">
      <div className="grid gap-8 sm:grid-cols-3">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">About</h3>
          <p className="text-sm text-muted-foreground">
            Full Stack Developer passionate about building clean, efficient, and
            user-friendly web applications.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <nav className="flex flex-col space-y-2 text-sm">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/projects" className="hover:underline">
              Projects
            </Link>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
            {/* <Link to="/resume" className="hover:underline">
              Resume
            </Link> */}
          </nav>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Connect</h3>
          <div className="flex space-x-4">
            <Link to={Constants.github} className="hover:text-primary">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link to={Constants.linkedin} className="hover:text-primary">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link to={Constants.twitter} className="hover:text-primary">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              to={"mailto:" + Constants.email}
              className="hover:text-primary"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
      <Separator className="my-7" />
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} HL Vasoya. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
