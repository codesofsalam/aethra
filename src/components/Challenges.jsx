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
    <div className="min-h-screen bg-[#0a0b14] text-white p-8 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/challengesback.png"
          alt="Background"
          className="w-full h-full object-cover  "
        />
      </div>

      <div className="mt-0">
        <h2 className="text-2xl mb-8 ml-8">Industry Collaborations</h2>
        <div className="grid grid-cols-5 gap-1">
          <div className=" z-10 bg-gray-800 p-8 rounded-lg flex items-center justify-center">
            <img src="BASF-logo.png" alt="BASF Logo" />
          </div>

          <div className=" z-10 bg-gray-800 p-8 rounded-lg flex items-center justify-center">
            <img src="bayer-logo.png" alt="BASF Logo" />
          </div>

          <div className=" z-10 bg-gray-800 p-8 rounded-lg flex items-center justify-center">
            <img src="ineos-logo.png" alt="BASF Logo" />
          </div>

          <div className=" z-10 bg-gray-800 p-8 rounded-lg flex items-center justify-center">
            <img src="umicore-logo.png" alt="BASF Logo" />
          </div>
          <div className=" z-10 bg-gray-800 p-8 rounded-lg flex items-center justify-center">
            <img src="covestro-logo.png" alt="BASF Logo" />
          </div>
        </div>
      </div>

      <div className="mt-5 pb-8 text-sm text-white-400 text-right">
        Empowering projects with tailored workforce solutions.
      </div>

      <div className="relative z-10 max-w-6xl mx-auto ">
        <h1 className="text-4xl font-light mt-10 mb-20 ml-12">
          CHALLENGES ACROSS
          <br />
          THE INDUSTRIES
        </h1>
        <div className="min-h-screen p-8 relative overflow-hidden">
          <div className="flex justify-end mr-6 ">
            <div className="grid grid-cols-2 gap-x-64 gap-y-12">
              <div className="space-y-12">
                <h2 className="text-xl mb-8">CHALLENGE</h2>
                {items.map((item, index) => (
                  <div
                    key={`challenge-${index}`}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 bg-gray-800 bg-opacity-60  flex items-center justify-center">
                      <img
                        src={item.challenge.image}
                        alt={item.challenge.text}
                        className="w-8 h-8 object-cover"
                      />
                    </div>
                    <span className="text-gray-300">{item.challenge.text}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-12">
                <h2 className="text-xl mb-8">SOLUTION</h2>
                {items.map((item, index) => (
                  <div
                    key={`solution-${index}`}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 bg-gray-800 bg-opacity-60  flex items-center justify-center">
                      <img
                        src={item.solution.image}
                        alt={item.solution.text}
                        className="w-8 h-8 object-cover"
                      />
                    </div>
                    <span className="text-gray-300">{item.solution.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
