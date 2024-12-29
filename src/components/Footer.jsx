import { Send, Twitter, Github, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-transparent to-blue-500/5" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-2">
            <Star className="w-6 h-6 text-teal-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-teal-200 bg-clip-text text-transparent tracking-tight">
              Galaxium
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
            <p className="hover:text-white transition-colors">
              © 2024 Galaxium, All rights reserved
            </p>
            <span className="hidden md:block text-gray-600">•</span>
            <a
              href="mailto:team@galaxium.work"
              className="group flex items-center hover:text-teal-400 transition-colors"
            >
              <span>abdulsalam@galaxium</span>
              <Send className="w-3 h-3 ml-1 transform -rotate-45 opacity-0 group-hover:opacity-100 transition-all" />
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#"
              className="group relative p-2 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-25 transition-opacity duration-300" />
              <Send className="relative w-5 h-5 text-gray-400 group-hover:text-teal-400 transition-colors" />
            </a>

            <a
              href="#"
              className="group relative p-2 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-25 transition-opacity duration-300" />
              <Twitter className="relative w-5 h-5 text-gray-400 group-hover:text-teal-400 transition-colors" />
            </a>

            <a
              href="#"
              className="group relative p-2 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-25 transition-opacity duration-300" />
              <Github className="relative w-5 h-5 text-gray-400 group-hover:text-teal-400 transition-colors" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
      </div>
    </footer>
  );
};

export default Footer;
