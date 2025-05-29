
export const WhyChooseSection = () => {
  const reasons = [
    {
      title: "DTU Student with Firsthand Experience",
      description: "Currently studying at DTU, I understand the system inside out"
    },
    {
      title: "Personally Helped 100+ Aspirants",
      description: "Proven track record of successful counselling and admissions"
    },
    {
      title: "Fully Honest, No Copy-Paste Advice",
      description: "Every guidance session is personalized for your specific situation"
    },
    {
      title: "Focused on Your Long-term Career Success",
      description: "Not just about getting admission, but choosing the right path"
    },
    {
      title: "Limited Batch for Full Personal Attention",
      description: "Quality over quantity - ensuring each student gets proper guidance"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Kavi Kaushik?
          </h2>
          <p className="text-lg text-gray-600">
            Your senior guiding you through the journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-lg">{index + 1}</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 leading-tight">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-block bg-blue-100 rounded-full p-1">
            <div className="bg-white rounded-full px-6 py-3">
              <span className="text-gray-700 font-medium">
                "Your success is my success" - Kavi Kaushik
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
