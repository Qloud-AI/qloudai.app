
import { Github, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    {
      name: "Email",
      url: "mailto:qloudai.app@gmail.com",
      icon: Mail
    },
    {
      name: "GitHub",
      url: "https://github.com/qloud-ai",
      icon: Github
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/e83f2ce3-42ea-4269-b36f-c5407b4f60bc.png" 
              alt="Qloud AI" 
              className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-gray-700"
            />
            <h3 className="text-2xl font-bold mb-2">Qloud AI</h3>
            <p className="text-gray-400">Building AI software for everyday use</p>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4">💬 Connect</h4>
            <p className="text-gray-400 mb-6">
              Have feedback, ideas, or want to collaborate?
            </p>
            
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                >
                  <link.icon className="w-5 h-5" />
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 mb-4">
              Side projects of{" "}
              <a 
                href="https://angshumangupta.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline transition-colors"
              >
                Angshuman Gupta
              </a>
            </p>
            
            <p className="text-gray-500 text-sm mb-4">
              ©2024 All rights reserved - QGENAI SOFTWARE TECHNOLOGIES PRIVATE LIMITED
            </p>
            
            <div className="flex items-center justify-center space-x-1 text-gray-400">
              <span>⚡️ Built with curiosity, one token at a time</span>
              <Heart className="w-4 h-4 text-red-500" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
