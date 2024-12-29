import { motion } from "framer-motion";
import { Download, Brain, Target, AwardIcon } from "lucide-react";

const Working = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const features = [
    {
      icon: Brain,
      title: "AI Matching",
      description: "Effortless skill alignment across the workforce.",
      delay: 0.2,
    },
    {
      icon: Target,
      title: "Accurate Talent Deployment",
      description: "Placing professionals with precision.",
      delay: 0.4,
    },
    {
      icon: AwardIcon,
      title: "Certification Verification",
      description: "Blockchain-secured validation of credentials.",
      delay: 0.6,
    },
  ];

  return (
    <div className="bg-slate-900 text-white min-h-screen relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-24 pb-32">
        <motion.div className="max-w-3xl" {...fadeInUp}>
          <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-gray-200 to-teal-200 bg-clip-text text-transparent">
            HOW GALAXIUM
            <br />
            WORKS
          </h1>
          <motion.button
            className="group px-6 py-3 bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 text-gray-900 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5 mr-2" />
            Download pitch deck
          </motion.button>
        </motion.div>

        <div className="mt-32 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative flex flex-col h-full" // Flexbox applied to ensure equal height
                {...fadeInUp}
                transition={{ duration: 0.6, delay: feature.delay }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300" />
                <div className="relative p-8 bg-slate-800 rounded-lg border border-slate-700 hover:border-teal-400 transition-all duration-300 flex-grow">
                  <div className="w-14 h-14 mb-6 rounded-lg bg-gradient-to-br from-teal-400/20 to-blue-500/20 flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-teal-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-teal-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <svg
            className="absolute top-1/2 left-0 w-full h-full -z-10 hidden md:block"
            viewBox="0 0 1200 100"
          >
            <path
              d="M300 50 L500 50 L900 50"
              stroke="url(#gradient)"
              strokeWidth="2"
              strokeDasharray="6 6"
              fill="none"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2DD4BF" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#2DD4BF" stopOpacity="1" />
                <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Working;
