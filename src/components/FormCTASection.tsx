
import { Youtube } from "lucide-react";

export const FormCTASection = () => {
  const videos = [
    {
      id: 1,
      title: "How to Choose the Right College",
      thumbnail: "photo-1649972904349-6e44c42644a7",
      youtubeUrl: "https://youtube.com/watch?v=example1"
    },
    {
      id: 2,
      title: "Complete Counseling Guide",
      thumbnail: "photo-1488590528505-98d2b5aba04b", 
      youtubeUrl: "https://youtube.com/watch?v=example2"
    },
    {
      id: 3,
      title: "Admission Process Explained",
      thumbnail: "photo-1518770660439-4636190af475",
      youtubeUrl: "https://youtube.com/watch?v=example3"
    }
  ];

  return (
    <section id="form-section" className="py-16 px-4 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Watch My YouTube Videos
          </h2>
          <p className="text-lg text-gray-600">
            Get expert guidance through my educational videos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative group cursor-pointer" onClick={() => window.open(video.youtubeUrl, '_blank')}>
                <img 
                  src={`https://images.unsplash.com/${video.thumbnail}?w=400&h=225&fit=crop`}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Youtube className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{video.title}</h3>
                <button 
                  onClick={() => window.open(video.youtubeUrl, '_blank')}
                  className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
                >
                  <Youtube className="w-4 h-4" />
                  Watch on YouTube
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
