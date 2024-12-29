import { useState } from "react";
import { ChevronRight, ChevronLeft, Sparkles, Calendar } from "lucide-react";

const Highlights = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const highlights = [
    {
      id: 1,
      image: "/futureai.jpg",
      date: "November 25, 2024",
      title: "The Future of AI in Workforce Management",
      description:
        "Exploring how artificial intelligence is transforming traditional staffing approaches and making more efficient hiring processes.",
    },
    {
      id: 2,
      image: "/blockchain.jpg",
      date: "November 23, 2024",
      title: "Blockchain: Securing the Future of Work",
      description:
        "How blockchain technology ensures transparent, secure, and efficient workforce management systems.",
    },
  ];

  const nextSlide = () => {
    if (currentIndex < highlights.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative bg-slate-900 min-h-screen p-8 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-teal-400" />
            <span className="mx-4 text-teal-400 text-sm font-medium tracking-wider flex items-center">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              LATEST HIGHLIGHTS
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-teal-400" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-teal-200">
            Industry Insights
          </h2>
        </div>

        <div className="relative px-4">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {highlights.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0 px-4">
                  <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300" />
                    <div className="relative bg-slate-800/50 backdrop-blur-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                      <div className="relative overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      <div className="p-8">
                        <div className="flex items-center mb-4">
                          <Calendar className="w-4 h-4 text-teal-400 mr-2" />
                          <p className="text-teal-400 text-sm font-medium">
                            {item.date}
                          </p>
                        </div>

                        <h3 className="text-white text-2xl font-bold mb-4 group-hover:text-teal-400 transition-colors duration-300">
                          {item.title}
                        </h3>

                        <p className="text-gray-400 text-base mb-6 line-clamp-2">
                          {item.description}
                        </p>

                        <button className="inline-flex items-center text-teal-400 font-medium group/button hover:text-teal-300 transition-colors duration-300">
                          <span className="group-hover/button:mr-2 transition-all duration-300">
                            Read More
                          </span>
                          <ChevronRight className="w-4 h-4 opacity-0 -ml-4 group-hover/button:opacity-100 group-hover/button:ml-0 transition-all duration-300" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300
              ${
                currentIndex === 0
                  ? "bg-slate-800/30 cursor-not-allowed"
                  : "bg-slate-800/50 hover:bg-teal-400/20 hover:border-teal-400 cursor-pointer"
              } border border-slate-700 backdrop-blur-sm`}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= highlights.length - 1}
            className={`absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300
              ${
                currentIndex >= highlights.length - 1
                  ? "bg-slate-800/30 cursor-not-allowed"
                  : "bg-slate-800/50 hover:bg-teal-400/20 hover:border-teal-400 cursor-pointer"
              } border border-slate-700 backdrop-blur-sm`}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {highlights.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-8 bg-teal-400"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Highlights;
