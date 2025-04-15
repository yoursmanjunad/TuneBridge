import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideUserCheck, LucideListMusic, LucideRocket } from "lucide-react";

export function HowItWorks(){
    const steps = [
        {
            title: "Connect Accounts",
            description: "Securely log in to your Spotify and YouTube accounts.",
            icon: <LucideUserCheck className="w-10 h-10 text-blue-600" />,
          },
          {
            title: "Select Playlists",
            description: "Choose the playlists you want to transfer.",
            icon: <LucideListMusic className="w-10 h-10 text-green-600" />,
          },
          {
            title: "One-Click Transfer",
            description: "Click 'Migrate' and watch your playlists appear on YouTube.",
            icon: <LucideRocket className="w-10 h-10 text-purple-600" />,
          },
    ]
    return (
        <section className="py-20 bg-muted/40">
          <div className="max-w-6xl mx-auto text-center px-4">
            <h2 className="text-4xl font-bold mb-12">How It Works</h2>
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
export default HowItWorks