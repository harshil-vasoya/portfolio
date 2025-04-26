import { CalendarDays } from "lucide-react";

export default function Footer() {
  return (
    <div className="text-center text-sm text-muted-foreground">
      <p>
        Last Updated: <CalendarDays className="inline w-4 h-4 mx-1" /> December
        2023
      </p>
    </div>
  );
}
