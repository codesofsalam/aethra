const ShapingFuture = () => {
  return (
    <div className="min-h-screen bg-[#0a0b14] text-white p-8 relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/Group-132.png)" }}
      ></div>
      <div className="relative z-0 flex flex-col items-center text-center space-y-8  mt-96">
        <div className="relative">
          <div className="w-56 h-56 bg-gradient-to-b from-blue-600 to-transparent rounded-full blur-3xl opacity-30 absolute -z-10" />
          <h1 className="text-4xl md:text-5xl mt-64">Shape the Future</h1>
          <p className="text-2xl mt-5 ">
            of Staffing in the Universe of Talent
          </p>
        </div>
        <button className="px-6 py-3 bg-[#56D5C0] hover:bg-[#00b991] rounded-lg text-gray-900  transition-all duration-300">
          Request Demo
        </button>
      </div>
      <hr className="mt-24 border-t border-gray-600" />
    </div>
  );
};

export default ShapingFuture;
