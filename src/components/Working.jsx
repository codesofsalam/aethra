const Working = () => {
  return (
    <div className="bg-[#020617] text-white py-16 px-4">
      <div
        className="mb-32 mt-0 ml-10 py-64 text-white"
        style={{
          backgroundImage: "url('/Group-132.png')",
          backgroundSize: "cover",
          backgroundPosition: " right center",
        }}
      >
        <h1 className="text-white text-5xl mb-6">
          HOW AETHRA
          <br />
          WORKS
        </h1>
        <button className="bg-[#56D5C0] text-black hover:bg-teal-500 text-navy-900 px-6 py-2 rounded-md transition-colors">
          Download pitch deck
        </button>
      </div>

      <div className="relative z-10 max-w-4xl mt-12 ml-60">
        <div className="grid grid-cols-2 gap-x-32 gap-y-16">
          <div className="bg-navy-800/50 backdrop-blur-sm rounded-lg border -ml-40 border-black w-80">
            <div>
              <img src="/aimatching.png" alt="" />
            </div>
            <h3 className="text-white text-lg font-semibold mb-2">
              AI Matching
            </h3>
            <p className="text-gray-400 text-sm">
              Effortless skill alignment across the workforce.
            </p>
          </div>

          <div className="bg-navy-800/50 backdrop-blur-sm rounded-lg border ml-40 border-black w-80">
            <div>
              <img src="/deploy.png" alt="" />
            </div>
            <h3 className="text-white text-lg font-semibold mb-2">
              Accurate Talent Deployment
            </h3>
            <p className="text-gray-400 text-sm">
              Placing professionals with precision.
            </p>
          </div>

          <div className="col-span-2 justify-self-center bg-navy-800/50 backdrop-blur-sm rounded-lg border border-black w-80">
            <div>
              <img src="/certificateverification.png" alt="" />
            </div>
            <h3 className="text-white text-lg font-semibold mb-2">
              Certification Verification
            </h3>
            <p className="text-gray-400 text-sm">
              Blockchain-secured validation of credentials.
            </p>
          </div>
        </div>

        <svg
          className="absolute top-0 right-20 w-full h-full "
          viewBox="0 0 800 400"
        >
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="10"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="#2DD4BF" />
            </marker>
          </defs>

          <path
            d="M220 100 C200 120, 300 120, 400 200"
            stroke="#2DD4BF"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrowhead)"
          ></path>

          <path
            d="M400 200 C500 120, 600 120, 650 100"
            stroke="#2DD4BF"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrowhead)"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Working;
