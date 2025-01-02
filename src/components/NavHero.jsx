import {
  Github,
  Send,
  Twitter,
  Star,
  Sparkles,
  ArrowRight,
  Stars,
} from "lucide-react";

const NavHero = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 animate-float-slow">
          <Stars className="w-6 h-6 text-teal-400/30" />
        </div>
        <div className="absolute top-1/2 right-1/3 animate-float">
          <Stars className="w-8 h-8 text-blue-400/30" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float-slow">
          <Stars className="w-10 h-10 text-teal-400/30" />
        </div>
      </div>

      <nav className="relative z-20 p-6 flex justify-between items-center backdrop-blur-sm bg-slate-900/50 border-b border-slate-800">
        <div className="flex items-center space-x-2">
          <Star className="w-8 h-8 text-teal-400" />
          <span className="text-2xl font-bold bg-gradient-to-r from-white to-teal-200 bg-clip-text text-transparent">
            Galaxium
          </span>
        </div>

        <div className="flex space-x-3">
          {[
            { Icon: Send, label: "Contact" },
            { Icon: Twitter, label: "Twitter" },
            { Icon: Github, label: "Github" },
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className="group relative p-3 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-25 transition-opacity duration-300" />
              <item.Icon className="relative w-5 h-5 text-gray-400 group-hover:text-teal-400 transition-colors" />
            </a>
          ))}
        </div>
      </nav>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-teal-400" />
            <span className="mx-4 text-teal-400 text-sm font-medium tracking-wider flex items-center">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              NEXT GENERATION PLATFORM
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-teal-400" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-teal-200">
            Next Gen
            <br />
            Workforce Platform
          </h1>

          <div className="relative mb-12">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg blur opacity-30" />
            <p className="relative text-xl md:text-3xl text-gray-300 leading-relaxed">
              AI & Blockchain Powered Workforce Management
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 rounded-lg text-gray-900 font-medium transition-all duration-300 transform hover:scale-105">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-teal-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-300" />
              <div className="relative flex items-center">
                <span className="mr-2">Request Demo</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>

            <button className="px-8 py-4 border border-gray-700 hover:border-teal-400 rounded-lg text-gray-300 hover:text-teal-400 font-medium transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="relative z-10 px-8 mt-12">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      </div>
    </div>
  );
};

const style = document.createElement("style");
style.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  @keyframes float-slow {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  .animate-float-slow {
    animation: float-slow 8s ease-in-out infinite;
  }
`;
document.head.appendChild(style);

export default NavHero;
