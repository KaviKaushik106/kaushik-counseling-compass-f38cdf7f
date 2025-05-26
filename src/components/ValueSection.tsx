
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
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What You'll Get
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive support throughout your counseling journey
          </p>
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 sm:p-12">
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
    </section>
  );
};
