
import { Brain, Rocket, Database, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  const features = [
    {
      icon: Brain,
      title: "Understanding",
      description: "Exploring the capabilities of cutting-edge foundation models"
    },
    {
      icon: Rocket,
      title: "Building",
      description: "Creating real, usable AI products across domains and use cases"
    },
    {
      icon: Database,
      title: "Deploying",
      description: "Using scalable, performant cloud-native stacks (FastAPI, Firebase, Vercel)"
    },
    {
      icon: TrendingUp,
      title: "Scaling",
      description: "Iterating based on user feedback and real-world usage data"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Qloud AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A personal initiative to explore the world of Generative AI — from fine-tuning foundation models to crafting intelligent AI Agents, and everything in between.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white/70 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-700 italic">
            "Whether it's teaching German, generating social captions, writing blog posts, or parsing PDFs — this project is about building useful AI products fast."
          </p>
        </div>
      </div>
    </section>
  );
};
