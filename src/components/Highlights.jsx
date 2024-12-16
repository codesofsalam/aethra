import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const Highlights = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const highlights = [
    {
      id: 1,
      image: "/futureai.png",
      date: "November 25, 2024",
      title: "The Future of AI in Workforce Management",
      description:
        "Exploring how artificial intelligence is transforming traditional staffing approaches and making more efficient hiring processes.",
    },
    {
      id: 2,
      image: "/blockchain.png",
      date: "November 23, 2024",
      title: "Blockchain: Securing the Future of Work",
      description:
        "How blockchain technology ensures transparent, secure, and efficient workforce management systems.",
    },
    {
      id: 3,
      image: "/api/placeholder/600/400",
      date: "November 20, 2024",
      title: "Revolutionizing Workforce Management",
      description: "New approaches to managing modern workforce challenges.",
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
    <div className="bg-[#020617] min-h-screen p-6 sm:p-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-white text-xl sm:text-2xl mb-8 ml-6 sm:ml-10">
          Highlights
        </h2>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {highlights.map((item) => (
                <div
                  key={item.id}
                  className="w-full sm:w-1/2 flex-shrink-0 px-3"
                >
                  <div className="bg-[#131B2E] overflow-hidden group rounded-lg shadow-lg">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 sm:w-[240px] sm:h-[240px] mx-auto object-cover"
                      />
                    </div>

                    <div className="p-4 sm:p-6">
                      <p className="text-gray-400 text-xs sm:text-sm mb-2">
                        {item.date}
                      </p>
                      <h3 className="text-white text-lg sm:text-xl font-semibold mb-3 group-hover:text-teal-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm mb-4">
                        {item.description}
                      </p>
                      <button className="text-teal-400 text-xs sm:text-sm hover:text-teal-300 transition-colors">
                        Read More →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute left-2 top-1/2 -translate-y-1/2 w-8 sm:w-10 h-8 sm:h-10 rounded-full flex items-center justify-center transition-all
              ${
                currentIndex === 0
                  ? "bg-black/30 cursor-not-allowed"
                  : "bg-black/50 hover:bg-black/70 cursor-pointer"
              }`}
          >
            <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex >= highlights.length - 1}
            className={`absolute right-2 top-1/2 -translate-y-1/2 w-8 sm:w-10 h-8 sm:h-10 rounded-full flex items-center justify-center transition-all
              ${
                currentIndex >= highlights.length - 1
                  ? "bg-black/30 cursor-not-allowed"
                  : "bg-black/50 hover:bg-black/70 cursor-pointer"
              }`}
          >
            <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
