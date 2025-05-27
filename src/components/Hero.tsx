
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 px-4 sm:py-24">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-6">
          <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-200 px-4 py-2 text-sm font-medium">
            🎓 Engineering Admissions 2025
          </Badge>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Confused About <span className="text-blue-600">JAC Delhi</span> or{" "}
          <span className="text-indigo-600">IPU Counseling</span> 2025?
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
          Get personal guidance from a <strong>DTU student</strong> who's helped{" "}
          <span className="text-blue-600 font-semibold">100+ students</span> secure the right college & branch.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdrAMpvVysbn4p0a11BuLclzpdqvU-4ljGaEwRXgrsth70wvQ/viewform?usp=header', '_blank')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105"
          >
            Fill Counseling Form Now
          </Button>
          <div className="text-sm text-gray-500 flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            Limited Seats | First-Come, First-Served
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto text-center">
          <div className="p-4">
            <div className="text-2xl font-bold text-blue-600">100+</div>
            <div className="text-sm text-gray-600">Students Helped</div>
          </div>
          <div className="p-4">
            <div className="text-2xl font-bold text-indigo-600">4.9★</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
          <div className="p-4">
            <div className="text-2xl font-bold text-green-600">95%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
          <div className="p-4">
            <div className="text-2xl font-bold text-purple-600">DTU</div>
            <div className="text-sm text-gray-600">Student Mentor</div>
          </div>
        </div>
      </div>
    </section>
  );
};
