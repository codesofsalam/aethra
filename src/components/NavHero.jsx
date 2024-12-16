import { Github, Send, Twitter } from "lucide-react";

const NavHero = () => {
  return (
    <div className="min-h-screen bg-[#0a0b14] text-white">
      <nav className="p-6 flex justify-between items-center">
        <div className="flex items-center">
          <div className="rounded-full flex items-center justify-center">
            <img src="/logo.png" alt="" />
          </div>
        </div>

        <div className="flex space-x-0.5">
          <div className="flex items-center justify-center w-12 h-12 bg-[#222434]    rounded-lg hover:bg-[#00e1b0] transition duration-300">
            <Send className="text-[#9BF4E5]" size={20} />
          </div>

          <div className="flex items-center justify-center w-12 h-12 bg-[#222434]      rounded-lg hover:bg-[#00e1b0] transition duration-300">
            <Twitter className="text-[#9BF4E5]" size={20} />
          </div>

          <div className="flex items-center justify-center w-12 h-12 bg-[#222434]     rounded-lg hover:bg-[#00e1b0] transition duration-300">
            <Github className="text-[#9BF4E5]" size={20} />
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 pt-20">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-normal mb-6">
            Next Gen
            <br />
            Staffing Platform
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            AI & Blockchain Powered Workforce Management
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-[#56D5C0] text-black rounded-lg hover:bg-opacity-90">
              Request Demo
            </button>
            <button className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-opacity-90">
              Learn More
            </button>
          </div>
        </div>

        <div className="absolute top[35%] left-1/4 transform -translate-y-1/2">
          <div className=" flex items-center justify-center ">
            <div>
              <img src="/Herologo.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavHero;
