const KeyFeatures = () => {
  return (
    <section className="bg-[#020617] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl mb-12">PLATFORM KEY FEATURES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src="/rtmatching.png"
              alt="Real-Time Matching"
              className="mx-auto mb-4 w-64 h-64"
            />
            <h3 className="text-xl font-semibold mb-2">Real-Time Matching</h3>
            <p className="text-sm text-gray-400">
              Efficiently connect with verified talent as soon as they become
              available, minimizing downtime and ensuring rapid project
              completion.
            </p>
          </div>

          <div className="text-center">
            <img
              src="/onchain.png"
              alt="Real-Time Matching"
              className="mx-auto mb-4 w-64 h-64"
            />
            <h3 className="text-xl font-semibold mb-2">
              On-Chain Certification
            </h3>
            <p className="text-sm text-gray-400">
              Blockchain-backed verification keeps certifications up-to-date,
              eliminating manual checks and providing immediate access to
              verified professionals.
            </p>
          </div>

          <div className=" text-center">
            <img
              src="/aipowered.png"
              alt="Real-Time Matching"
              className="mx-auto mb-4 w-64 h-64"
            />
            <h3 className="text-xl font-semibold mb-2">
              AI-Powered Forecasting
            </h3>
            <p className="text-sm text-gray-400">
              Predict upcoming talent needs and availability using predictive
              models, allowing for proactive staffing.
            </p>
          </div>

          <div className="text-center">
            <img
              src="/integration.png"
              alt="Real-Time Matching"
              className="mx-auto mb-4 w-64 h-64"
            />
            <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
            <p className="text-sm text-gray-400">
              Easily integrates with existing HR and project management systems,
              ensuring smooth adoption and effortless data syncing.
            </p>
          </div>

          <div className=" text-center">
            <img
              src="/userinterface.png"
              alt="Real-Time Matching"
              className="mx-auto mb-4 w-64 h-64"
            />
            <h3 className="text-xl font-semibold mb-2">
              User-Friendly Interface
            </h3>
            <p className="text-sm text-gray-400">
              Designed for effortless navigation and immediate usability, with a
              clear layout that allows anyone to start managing workforce needs
              instantly.
            </p>
          </div>

          <div className=" text-center">
            <img
              src="/scale.png"
              alt="Real-Time Matching"
              className="mx-auto mb-4 w-64 h-64"
            />
            <h3 className="text-xl font-semibold mb-2">For Any Scale</h3>
            <p className="text-sm text-gray-400">
              Whether you&apos;re a small business or a large enterprise, the
              platform grows with your staffing needs, adapting effortlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
