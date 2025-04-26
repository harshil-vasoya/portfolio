import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { useState } from "react";

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ZoomableImage({
  src,
  alt,
  className,
}: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <img src={src} alt={alt} className={className} />
      </DialogTrigger>
      <DialogContent className="w-full p-0">
        <br />
        <div className="relative w-full h-[80vh] flex justify-center">
          <img src={src} alt={alt} className="w-full rounded object-cover" />
        </div>
        <DialogFooter className="w-full">
          <div className="flex gap-2 justify-end">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                const link = document.createElement("a");
                link.href = src;
                link.download = alt;
                link.click();
              }}
            >
              <Download />
            </Button>
            <Button
              onClick={() => {
                window.open(src, "_blank");
              }}
              className="w-fit"
            >
              Open in new Tab
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
