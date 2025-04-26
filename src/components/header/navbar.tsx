import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/theme-provider";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

function Navbar() {
  const { setTheme } = useTheme();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="md:hidden">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle theme</span>
      </SheetTrigger>
      <SheetContent side="right" className="w-60 p-0">
        <SheetHeader className="p-4 border-b">
          <SheetTitle>Harshil Vasoya</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-4 mt-4 p-4">
          <NavigationMenu className="w-full">
            <NavigationMenuList className="flex flex-col gap-4 w-full">
              <NavigationMenuItem className="w-full">
                <NavigationMenuLink
                  onClick={() => handleNavigation("/")}
                  className={cn(navigationMenuTriggerStyle(), "w-full justify-start")}
                >Home</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="w-full">
                <NavigationMenuLink
                  onClick={() => handleNavigation("/projects")}
                  className={cn(navigationMenuTriggerStyle(), "w-full justify-start")}
                >Projects</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="w-full">
                <NavigationMenuLink
                  onClick={() => handleNavigation("/contact")}
                  className={cn(navigationMenuTriggerStyle(), "w-full justify-start")}
                >Contact</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenuItem className="w-full">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                >
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 mr-2" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 mr-2" />
                  <span>Theme</span>
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
          </NavigationMenuItem>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default Navbar;
