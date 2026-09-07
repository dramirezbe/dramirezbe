import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { experience } from "@/data/cv-data";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-8 text-primary">Experience</h2>

        <div className="space-y-6">
          {experience.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="size-5 text-primary" />
                      {exp.role}
                    </CardTitle>
                    <p className="text-muted-foreground mt-1">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{exp.period}</p>
                    <p className="text-sm text-muted-foreground">
                      {exp.location}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
