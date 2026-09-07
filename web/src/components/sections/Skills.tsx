import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skills, languages } from "@/data/cv-data";
import { Code, Globe, Server } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Languages: <Code className="size-5 text-primary" />,
  "Frameworks & Platforms": <Globe className="size-5 text-primary" />,
  "Infrastructure & Tools": <Server className="size-5 text-primary" />,
};

export function Skills() {
  const { t } = useTranslation();

  const skillCategories = [
    { key: "languages", items: skills[0].items },
    { key: "frameworks", items: skills[1].items },
    { key: "infrastructure", items: skills[2].items },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-8 text-primary">
          {t("skills.title")}
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((skill, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {iconMap[skill.key === "languages" ? "Languages" : skill.key === "frameworks" ? "Frameworks & Platforms" : "Infrastructure & Tools"]}
                  <span>{t(`skills.${skill.key}`)}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <Badge key={i} variant="outline">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>{t("skills.spokenLanguages")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              {languages.map((lang, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Badge variant="secondary">{lang.language}</Badge>
                  <span className="text-sm text-muted-foreground">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
