import Constants from "@/config/constant";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Instagram, Globe, Twitter } from "lucide-react";

export default function SocialMedia() {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4">social handles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button
            variant="outline"
            className="flex items-center justify-start gap-2 h-12"
            asChild
          >
            <a
              href={Constants.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-5 w-5" />
              <span>Instagram</span>
            </a>
          </Button>
          <Button
            variant="outline"
            className="flex items-center justify-start gap-2 h-12"
            asChild
          >
            <a
              href={Constants.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-5 w-5" />
              <span>Twitter</span>
            </a>
          </Button>
          <Button
            variant="outline"
            className="flex items-center justify-start gap-2 h-12"
            asChild
          >
            <a
              href="https://rajraiyani.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe className="h-5 w-5" />
              <span>Personal Website</span>
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
