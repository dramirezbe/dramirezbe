import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-8 text-primary">
          {t("about.title")}
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-primary">{t("about.profile")}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.summary")}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="size-5 text-primary" />
                <span className="text-primary">{t("about.education")}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold">{t("about.msc")}</h3>
                  <span className="text-sm text-muted-foreground">
                    {t("about.mscPeriod")}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {t("about.institution")}
                </p>
                <p className="text-sm text-muted-foreground">
                  {t("about.mscDetails")}
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold">{t("about.bsc")}</h3>
                  <span className="text-sm text-muted-foreground">
                    {t("about.bscPeriod")}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {t("about.institution")}
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>{t("about.bscDetails1")}</li>
                  <li>{t("about.bscDetails2")}</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
