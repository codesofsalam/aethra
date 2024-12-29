import {
  Sparkles,
  TrendingUp,
  Users,
  BriefcaseBusiness,
  Globe,
} from "lucide-react";

const Expanding = () => {
  const stats = [
    {
      value: "$35B",
      label: "Digital HR Market",
      subtext: "by 2028",
      icon: <BriefcaseBusiness className="w-5 h-5 text-blue-400" />,
      position: "left-[5%]",
    },
    {
      value: "$500B",
      label: "Temporary Labor Market",
      subtext: "(2023) with 4-6% annual growth",
      icon: <TrendingUp className="w-5 h-5 text-blue-400" />,
      position: "left-[25%]",
    },
    {
      value: "69%",
      label: "of companies",
      subtext: "struggle to find certified professionals",
      icon: <Users className="w-5 h-5 text-blue-400" />,
      position: "left-[50%]",
    },
    {
      value: "Flexible",
      label: "Staffing solutions",
      subtext: "are reshaping the global labor market",
      icon: <Globe className="w-5 h-5 text-purple-500" />,
      position: "right-[5%]",
    },
  ];

  return (
    <div className="relative min-h-screen bg-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/expanding.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900/70"></div>
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="pt-20 pb-32">
          <div className="flex items-center mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-teal-400" />
            <span className="mx-4 text-teal-400 text-sm font-medium tracking-wider flex items-center">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              MARKET POTENTIAL
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-teal-400" />
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg blur opacity-30" />
            <h1 className="relative text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-teal-200">
              Expanding the
              <br />
              Horizons of Workforce
              <br />
              Management
            </h1>
          </div>
        </div>

        <div className="absolute top-20 md:right-60 w-40 md:w-48">
          <img
            src="/character.png"
            alt="Astronaut"
            className="object-contain animate-float"
          />
        </div>

        <div className="relative mt-8">
          <div className="absolute w-[95%] left-[2.5%] border-t border-dashed border-gray-600/50 top-0 mt-8" />

          {stats.map((stat, index) => (
            <div
              key={index}
              className={`absolute ${stat.position} top-7 text-center group transform transition-transform duration-300 hover:scale-110`}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-300" />
                <div className="relative">
                  <div className="flex justify-center mb-4">{stat.icon}</div>
                  <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-200">
                    {stat.value}
                  </p>
                  <p className="text-sm font-medium text-gray-300">
                    {stat.label}
                  </p>
                  <span className="text-sm text-gray-400">{stat.subtext}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 px-8">
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
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
`;
document.head.appendChild(style);

export default Expanding;
