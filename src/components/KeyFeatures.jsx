import { Sparkles } from "lucide-react";

const KeyFeatures = () => {
  const features = [
    {
      title: "Real-Time Matching",
      description:
        "Efficiently connect with verified talent as soon as they become available, minimizing downtime and ensuring rapid project completion.",
      image: "/rtmatching.png",
    },
    {
      title: "On-Chain Certification",
      description:
        "Blockchain-backed verification keeps certifications up-to-date, eliminating manual checks and providing immediate access to verified professionals.",
      image: "/onchain.png",
    },
    {
      title: "AI-Powered Forecasting",
      description:
        "Predict upcoming talent needs and availability using predictive models, allowing for proactive staffing.",
      image: "/aipowered.png",
    },
    {
      title: "Seamless Integration",
      description:
        "Easily integrates with existing HR and project management systems, ensuring smooth adoption and effortless data syncing.",
      image: "/integration.png",
    },
    {
      title: "User-Friendly Interface",
      description:
        "Designed for effortless navigation and immediate usability, with a clear layout that allows anyone to start managing workforce needs instantly.",
      image: "/userinterface.png",
    },
    {
      title: "For Any Scale",
      description:
        "Whether you're a small business or a large enterprise, the platform grows with your staffing needs, adapting effortlessly.",
      image: "/scale.png",
    },
  ];

  return (
    <section className="bg-slate-900 text-white py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-teal-400" />
            <span className="mx-4 text-teal-400 text-sm font-medium tracking-wider flex items-center">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              PLATFORM FEATURES
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-teal-400" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-teal-200">
            Powerful Features for
            <br />
            Modern Workforce
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl transition-all duration-300 hover:translate-y-[-4px]"
            >
              <div className="absolute -inset-[1px] bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-300" />

              <div className="relative bg-gray-800 bg-opacity-50 p-6 rounded-xl backdrop-blur-sm">
                <div className="flex flex-col items-center">
                  <div className="mb-6 transform transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-48 h-48 object-contain"
                    />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-teal-300 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-gray-400 text-center leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 px-8 mt-24">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      </div>
    </section>
  );
};

export default KeyFeatures;
