import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideUserCheck, LucideListMusic, LucideRocket } from "lucide-react";
import { ArrowBigUpDash } from 'lucide-react';
export function Features(){
    const steps = [
        {
            title: "Fast & Reliable",
            description: "Transfers playlists within seconds using official APIs.",
            icon: <ArrowBigUpDash className="w-10 h-10 text-blue-600" />,
          },
          {
            title: "Smart Matching",
            description: "Finds the best matching song on YouTube for each Spotify track.",
            icon: <LucideListMusic className="w-10 h-10 text-green-600" />,
          },
          {
            title: "Privacy First",
            description: "We never store your data. Authenntication is 100% secure. ",
            icon: <LucideRocket className="w-10 h-10 text-purple-600" />,
          },
    ]
    return (
        <section className="py-20 bg-muted/40">
          <div className="max-w-6xl mx-auto text-center px-4">
            <h2 className="text-4xl font-bold mb-12">Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-shadow duration-300 rounded-2xl border-none bg-white"
                >
                  <CardHeader className="flex items-center justify-center space-y-4">
                    {step.icon}
                    <CardTitle className="text-xl font-semibold">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground text-sm">
                    {step.description}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      );
    
}
export default Features