
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, ExternalLink, Sparkles } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Product Builders",
      description: "A growing community of builders using AI to prototype, ship, and scale digital products — includes tools, docs, and case studies.",
      users: "New 🚀",
      isNew: true,
      icon: "🧑‍💻",
      url: "https://productbuilders.xyz/"
    },
    {
      title: "German with Nik",
      description: "Learn German with Nik, an AI tutor that helps users practice vocabulary, grammar, and conversational German.",
      users: "200+",
      icon: "🌍",
      url: "https://germanwithnik.com/"
    },
    {
      title: "Captions GPT",
      description: "Auto-generate engaging captions for Instagram, LinkedIn, and more — tailored to your audience.",
      users: "200+",
      icon: "📝",
      url: "https://captionsgpt.site/"
    },
    {
      title: "PDF Bot",
      description: "Chat with your PDFs. Ask questions, extract key insights, summarize — all inside ChatGPT.",
      users: "30+",
      icon: "📄",
      url: "https://chat.openai.com/g/g-vf2SBarTd-pdf-gpt"
    },
    {
      title: "Data Visualization GPT",
      description: "Turn raw CSV or JSON into stunning charts using natural language.",
      users: "200+",
      icon: "📊",
      url: "https://chat.openai.com/g/g-wRVc49G82-visualize-your-data"
    },
    {
      title: "FastAPI Python Bot",
      description: "Your AI expert for building FastAPI backends — get help with code, architecture, and deployment.",
      users: "200+",
      icon: "🐍",
      url: "https://chat.openai.com/g/g-cbMzm6oC4-python-fast-api-expert"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Projects & Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world AI applications deployed and scaled for everyday use
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden cursor-pointer">
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="text-4xl mb-3">{project.icon}</div>
                    {project.isNew && (
                      <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                        <Sparkles className="w-3 h-3 mr-1" />
                        New
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-1" />
                      {project.users} users
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </CardContent>
              </a>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            ⚙️ More projects available on GitHub
          </p>
          <a 
            href="https://github.com/qloud-ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            Check the repository
            <ExternalLink className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
