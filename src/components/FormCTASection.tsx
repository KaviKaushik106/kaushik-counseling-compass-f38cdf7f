import { Youtube } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";

export const FormCTASection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const videos = [
    {
      id: 1,
      title: "Jac Delhi EWS Certificate Doubt",
      thumbnail: "/EWS-CERTIFICATE-DOUBT.png",
      youtubeUrl: "https://youtube.com/shorts/XQBc4Fl-sQg?si=5eQy8jlo8ZR4ROKD"
    },
    {
      id: 2,
      title: "Jac Delhi OBC Certificate Doubts",
      thumbnail: "/OBC-CERTIFICATE-DOUBT.png",
      youtubeUrl: "https://youtu.be/U_rYY5tjrsk?si=YmTdAG28Kz0fd64G"
    },
    {
      id: 3,
      title: "Choice Filling Order Explained",
      thumbnail: "/freechoice-filling-order.png",
      youtubeUrl: "https://youtu.be/8m0kNmUnV8g?si=2s0nyTwlWFwyak2A"
    },
    // {
    //   id: 4,
    //   title: "Scholarship Application Tips",
    //   thumbnail: "/IMG_0702.png",
    //   youtubeUrl: "https://youtube.com/watch?v=example4"
    // }
  ];

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (api) {
        api.scrollNext();
      }
    }, 7000);

    return () => clearInterval(interval);
  }, [api]);

  const handleSlideChange = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <section id="form-section" className="py-16 px-4 bg-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Watch My YouTube Videos
          </h2>
          <p className="text-lg text-gray-600">
            Get expert guidance through my educational videos
          </p>
        </div>
        
        <div className="relative">
          {/* Fade overlays */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-blue-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-blue-50 to-transparent z-10 pointer-events-none"></div>
          
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
              skipSnaps: false,
              containScroll: "trimSnaps"
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {videos.map((video) => (
                <CarouselItem key={video.id} className="pl-2 md:pl-4 basis-full">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in max-w-2xl mx-auto">
                    <div className="relative group cursor-pointer" onClick={() => window.open(video.youtubeUrl, '_blank')}>
                      <div className="aspect-video w-full overflow-hidden">
                        <img 
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-contain bg-gray-100"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Youtube className="w-10 h-10 text-white ml-1" />
                        </div>
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{video.title}</h3>
                      <button 
                        onClick={() => window.open(video.youtubeUrl, '_blank')}
                        className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 text-lg"
                      >
                        <Youtube className="w-5 h-5" />
                        Watch on YouTube
                      </button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};