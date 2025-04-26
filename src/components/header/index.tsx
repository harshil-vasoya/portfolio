import { ChartNoAxesGantt } from "lucide-react";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/theme-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import NavBar from "./navbar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  const { setTheme } = useTheme();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 bg-background/80 border shadow p-2 px-2 rounded-xl flex justify-between items-center m-2 transition-all duration-300 ${
          isScrolled ? 'backdrop-blur-md' : ''
        }`}
      >
        <div
          className="flex gap-2 p-1 px-2 hover:bg-secondary rounded-lg items-center text-xl cursor-pointer"
          onClick={() => navigate("/")}
        >
          <ChartNoAxesGantt /> <p className="">Harshil Vasoya</p>
        </div>

        <div className="gap-2 hidden md:flex">
          <NavigationMenu className="">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  onClick={() => navigate("/")}
                  className={navigationMenuTriggerStyle()}
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  onClick={() => navigate("/projects")}
                  className={navigationMenuTriggerStyle()}
                >
                  Projects
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  onClick={() => navigate("/contact")}
                  className={navigationMenuTriggerStyle()}
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <NavBar />
      </header>
      <div className="h-[72px]"></div>
    </>
  );
}

export default Header;
