const Expanding = () => {
  return (
    <div className="relative min-h-screen bg-[#020617] text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/expanding.png"
          alt="Background"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/80 to-[#020617]/60"></div>
      </div>

      <div className="relative z-10">
        <div className="bg-gradient-to-r p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl md:text-5xl ml-10 mt-10 text-white leading-tight">
            Expanding the
            <br />
            Horizons of Workforce
            <br />
            Management
          </h1>
        </div>

        <div className="absolute top-20 md:right-60 w-40 md:w-48 animate-float">
          <img
            src="/character.png"
            alt="Astronaut"
            className="object-contain"
          />
        </div>

        <div className="relative mt-32">
          <div className="absolute top-7 left-[5%] text-center">
            <div className="w-2 h-2 bg-blue-400 rounded-full mx-auto mb-2"></div>
            <p className="text-2xl font-bold">$35B</p>
            <p className="text-sm ">Digital HR Market</p>
            <span className="ml-12 text-gray-400"> by 2028</span>
          </div>

          <div className="absolute top-7 left-[30%] transform -translate-x-1/2 text-center">
            <div className="w-2 h-2 bg-blue-400 rounded-full mx-auto mb-2"></div>
            <p className="text-3xl font-bold">$500B</p>
            <p className="text-sm ">Temporary Labor Market</p>
            <span className="text-gray-400">
              {" "}
              (2023) with 4-6% annual growth
            </span>
          </div>

          <div className="absolute -top-24 left-[58%] transform -translate-x-1/2 text-center">
            <h2 className="text-5xl font-bold text-white">69%</h2>

            <p className="text-lg ">of companies</p>
            <span className="text-gray-400">
              {" "}
              struggle to find certified professionals
            </span>
            <div className="w-2 h-2 bg-blue-400 rounded-full mx-auto mt-6"></div>
          </div>

          <div className="absolute w-[95%] left-[2.5%] border-t border-dotted border-gray-600 top-0 mt-8"></div>

          <div className="absolute top-7 right-[5%] text-center">
            <div className="w-2 h-2 bg-purple-500 rounded-full mx-auto mb-2"></div>
            <p className="text-xl font-bold">Flexible</p>
            <p className="text-sm ">Staffing solutions</p>
            <span className="text-gray-400">
              {" "}
              are reshaping the global labor market
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Expanding;
