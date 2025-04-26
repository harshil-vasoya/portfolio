import { Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Language {
  name: string;
  level: string;
  flag: string;
}

function Languages() {
  const languages: Language[] = [
    { name: "English", level: "Professional", flag: "🇺🇸" },
    { name: "Hindi", level: "Native", flag: "🇮🇳" },
    { name: "Gujarati", level: "Native", flag: "🇮🇳" },
  ];

  return (
    <section className="py-10">
      <div className="">
        <div className="flex items-center gap-2 mb-8">
          <Globe className="w-6 h-6" />
          <h2 className="text-2xl font-bold">Languages</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {languages.map((language) => (
            <Card key={language.name}>
              <CardContent className="flex items-center gap-4 p-4">
                <span className="text-3xl">{language.flag}</span>
                <div>
                  <h3 className="font-medium">{language.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {language.level}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Languages;
