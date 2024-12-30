import { Mail, SendHorizontal, Sparkles } from "lucide-react";

function Newsletter() {
  return (
    <div className="relative min-h-screen bg-slate-900 text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #56D5C0 0%, transparent 50%)`,
        }}
      />

      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        <div className="flex items-center mb-3">
          <Sparkles className="w-5 h-5 text-teal-400 mr-2 animate-pulse" />
          <span className="text-teal-400 text-sm font-medium tracking-wider">
            STAY UPDATED
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Subscribe to Our Newsletter
        </h2>

        <p className="text-gray-400 text-center max-w-md mb-12">
          Get the latest updates, news, and special offers sent directly to your
          inbox.
        </p>

        <div className="relative w-full max-w-lg group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

          <div className="relative flex flex-wrap w-full bg-slate-900 rounded-lg p-1">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Mail className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full p-4 pl-12 bg-slate-900 rounded-t-lg md:rounded-l-lg md:rounded-tr-none focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition-all duration-300 placeholder-gray-500"
              />
            </div>

            <button className="w-full md:w-auto flex items-center justify-center px-6 py-4 bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 text-gray-900 font-medium rounded-b-lg md:rounded-r-lg md:rounded-bl-none transition-all duration-300 group/button">
              <span className="mr-2">Subscribe</span>
              <SendHorizontal className="w-4 h-4 transform group-hover/button:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        <p className="mt-6 text-sm text-gray-500 max-w-sm text-center">
          By subscribing, you agree to our Privacy Policy and consent to receive
          updates from our company.
        </p>
      </div>
    </div>
  );
}

export default Newsletter;
