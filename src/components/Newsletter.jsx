import { Mail } from "lucide-react";

function Newsletter() {
  return (
    <div
      className="relative min-h-screen  bg-[#0a0b14] text-white overflow-hidden"
      style={{
        backgroundImage: "url('/Group-125.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center py-64 space-y-8">
        <h2 className="text-lg tracking-wide uppercase">
          Subscribe to Newsletter
        </h2>

        <div className="relative flex w-full max-w-md">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Mail className="w-5 h-5 text-gray-400" />
          </div>

          <input
            type="email"
            placeholder="Your email"
            className="w-full p-3 pl-10 text-white bg-black bg-opacity-70 rounded-l-lg focus:outline-none placeholder-gray-400"
          />

          <button className="px-6 py-3 bg-[#56D5C0] hover:bg-[#00b991] text-gray-800  rounded-lg transition-all duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
