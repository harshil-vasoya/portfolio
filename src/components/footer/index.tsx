import { Link, useLocation } from "react-router-dom";
import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Constants from "@/config/constant";

function Footer() {
  const location = useLocation();

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  return (
    <footer className="border rounded-xl shadow p-7 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="grid gap-8 sm:grid-cols-3">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">About</h3>
          <p className="text-sm text-muted-foreground">
            Full Stack Developer passionate about building clean, efficient, and
            user-friendly web applications.
          </p>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
          <nav className="flex flex-col space-y-2 text-sm">
            <Link 
              to="/" 
              className={`transition-colors duration-200 hover:text-primary ${
                isActiveLink('/') 
                  ? 'text-primary font-medium' 
                  : 'text-muted-foreground'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/projects" 
              className={`transition-colors duration-200 hover:text-primary ${
                isActiveLink('/projects') 
                  ? 'text-primary font-medium' 
                  : 'text-muted-foreground'
              }`}
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors duration-200 hover:text-primary ${
                isActiveLink('/contact') 
                  ? 'text-primary font-medium' 
                  : 'text-muted-foreground'
              }`}
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Connect</h3>
          <div className="flex space-x-4">
            <a 
              href={Constants.github} 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 group"
            >
              <Github className="h-5 w-5 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href={Constants.linkedin} 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/20 transition-colors duration-200 group"
            >
              <Linkedin className="h-5 w-5 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a 
              href={Constants.twitter} 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/20 transition-colors duration-200 group"
            >
              <Twitter className="h-5 w-5 text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300" />
              <span className="sr-only">Twitter</span>
            </a>
            <a 
              href={Constants.instagram} 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-pink-100 dark:hover:bg-pink-900/20 transition-colors duration-200 group"
            >
              <Instagram className="h-5 w-5 text-pink-600 dark:text-pink-400 group-hover:text-pink-700 dark:group-hover:text-pink-300" />
              <span className="sr-only">Instagram</span>
            </a>
            <a 
              href={"mailto:" + Constants.email}
              className="p-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/20 transition-colors duration-200 group"
            >
              <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
      
      <Separator className="my-7" />
      
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} HL Vasoya. All rights reserved.
        </p>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <span>Made with ❤️ by Harshil Vasoya</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
