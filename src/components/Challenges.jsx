import { Sparkles } from "lucide-react";

const Challenges = () => {
  const items = [
    {
      challenge: {
        text: "Limited Talent Access",
        image: "/talent.png",
      },
      solution: {
        text: "AI Matching",
        image: "/ai.png",
      },
    },
    {
      challenge: {
        text: "Time-Consuming Sourcing",
        image: "/time.png",
      },
      solution: {
        text: "Real-Time Availability",
        image: "/realtime.png",
      },
    },
    {
      challenge: {
        text: "Hiring Unqualified Workers",
        image: "/hiring.png",
      },
      solution: {
        text: "Certification Verification",
        image: "/certificate.png",
      },
    },
    {
      challenge: {
        text: "Worker Volatility",
        image: "/volatility.png",
      },
      solution: {
        text: "Efficiency Insights",
        image: "/insight.png",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative z-10 pt-12 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-teal-400" />
              <span className="mx-4 text-teal-400 text-sm font-medium tracking-wider flex items-center">
                <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                INDUSTRY COLLABORATIONS
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-teal-400" />
            </div>
          </div>

          <div className="grid grid-cols-5 gap-4">
            {["BASF", "bayer", "ineos", "umicore", "covestro"].map(
              (company) => (
                <div key={company} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-300" />
                  <div className="relative bg-gray-800 p-8 rounded-lg flex items-center justify-center transform transition duration-300 group-hover:scale-105">
                    <img
                      src={`${company}-logo.png`}
                      alt={`${company} Logo`}
                      className="max-h-12"
                    />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 mt-24">
        <h1 className="text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-teal-200">
          CHALLENGES ACROSS
          <br />
          THE INDUSTRIES
        </h1>

        <div className="grid grid-cols-2 gap-x-24 gap-y-16">
          <div className="space-y-12">
            <h2 className="text-xl font-medium text-teal-400 mb-8 tracking-wider">
              CHALLENGE
            </h2>
            {items.map((item, index) => (
              <div
                key={`challenge-${index}`}
                className="group flex items-center gap-6 transform transition duration-300 hover:translate-x-2"
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-300" />
                  <div className="relative w-16 h-16 bg-gray-800 bg-opacity-60 rounded-lg flex items-center justify-center">
                    <img
                      src={item.challenge.image}
                      alt={item.challenge.text}
                      className="w-10 h-10 object-cover"
                    />
                  </div>
                </div>
                <span className="text-gray-300 text-lg group-hover:text-white transition-colors duration-300">
                  {item.challenge.text}
                </span>
              </div>
            ))}
          </div>

          <div className="space-y-12">
            <h2 className="text-xl font-medium text-teal-400 mb-8 tracking-wider">
              SOLUTION
            </h2>
            {items.map((item, index) => (
              <div
                key={`solution-${index}`}
                className="group flex items-center gap-6 transform transition duration-300 hover:translate-x-2"
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-300" />
                  <div className="relative w-16 h-16 bg-gray-800 bg-opacity-60 rounded-lg flex items-center justify-center">
                    <img
                      src={item.solution.image}
                      alt={item.solution.text}
                      className="w-10 h-10 object-cover"
                    />
                  </div>
                </div>
                <span className="text-gray-300 text-lg group-hover:text-white transition-colors duration-300">
                  {item.solution.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-400">
            Empowering projects with tailored workforce solutions.
          </p>
        </div>
      </div>

      <div className="relative z-10 px-8 mt-24">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      </div>
    </div>
  );
};

export default Challenges;
