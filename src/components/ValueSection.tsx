import { CheckCircle } from "lucide-react";

export const ValueSection = () => {
  const benefits = [
    "1-on-1 WhatsApp or call-based counseling",
    "Correct choice filling order for your rank",
    "Help avoiding fake paid counselor scams",
    "College & branch selection advice",
    "Real-time doubt-solving until seat is locked"
  ];

  const images = [
    {
      src: "/Image 2.png",
      alt: "EWS Certificate Guidance",
      description: "Swarnim Sharma (3rd Year DTU)"
    },
    {
      src: "/IMG_0702.png",
      alt: "Counseling Process",
      description: "Kavi Kaushik (3rd Year DTU)"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Heading and subheading at the top, outside the box */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What You'll Get
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive support throughout your counseling journey
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center gap-8">
          {/* Images on the left, inside the box */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
              Mentors
            </h3>
            <div className="grid grid-cols-1 gap-12">
              {images.map((image, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className={`w-48 h-48 rounded-full border-4 border-blue-500 flex items-center justify-center overflow-hidden shadow-lg ${
                    index === 1 ? 'bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100' : 'bg-white'
                  }`}>
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-medium text-gray-700 mt-4 text-center">
                    {image.description}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Text content on the right, inside the box */}
          <div className="w-full md:w-1/2">
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700 leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
