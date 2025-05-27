import { CheckCircle } from "lucide-react";

export const ValueSection = () => {
  const benefits = [
    "1-on-1 WhatsApp or call-based counseling",
    "Correct choice filling order for your rank",
    "Help avoiding fake paid counselor scams",
    "College & branch selection advice",
    "Real-time doubt-solving until seat is locked"
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
          {/* Image on the left, inside the box */}
          <div className="w-full md:w-1/2 flex justify-center items-end">
            {/* Circle around the image */}
            <div className="w-60 h-60 rounded-full border-4 border-blue-500 flex items-center justify-center overflow-hidden">
              <img src="/IMG_0702.png" alt="Error" className="w-full h-full object-cover" />
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
