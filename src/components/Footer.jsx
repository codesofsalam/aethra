import { Github, Send, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0a0b14] text-white py-6 px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
      <div className="flex items-center justify-center">
        <img
          src="/logo.png"
          alt="Aethra Logo"
          className="h-8 w-auto object-contain"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center sm:justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-center">
        <p>© 2024 Aethra, All rights reserved</p>
        <p className="hover:text-[#00e7b0] transition-colors cursor-pointer">
          team@aethra.work
        </p>
      </div>

      <div className="flex space-x-3 sm:space-x-1">
        <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#222434]  rounded-lg hover:bg-[#00e1b0] transition duration-300">
          <Send className="text-[#9BF4E5]" size={18} sm:size={20} />
        </div>

        <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#222434]  rounded-lg hover:bg-[#00e1b0] transition duration-300">
          <Twitter className="text-[#9BF4E5]" size={18} sm:size={20} />
        </div>

        <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#222434]  rounded-lg hover:bg-[#00e1b0] transition duration-300">
          <Github className="text-[#9BF4E5]" size={18} sm:size={20} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
