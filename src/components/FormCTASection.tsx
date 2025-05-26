
import { Button } from "@/components/ui/button";

export const FormCTASection = () => {
  return (
    <section id="form-section" className="py-16 px-4 bg-blue-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Fill the form and I'll personally guide you through the process.
        </p>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
          <div className="space-y-6">
            <div className="text-left">
              <h3 className="font-semibold text-gray-900 mb-4">What happens next?</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">1</div>
                  <span className="text-gray-700">Fill out the counseling form</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">2</div>
                  <span className="text-gray-700">I'll review your details within 2 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">3</div>
                  <span className="text-gray-700">Get personalized counseling guidance</span>
                </div>
              </div>
            </div>
            
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold rounded-lg"
              onClick={() => window.open('https://forms.google.com/d/e/1FAIpQLSe_example/viewform', '_blank')}
            >
              Fill Counseling Form Now
            </Button>
            
            <p className="text-sm text-gray-500">
              Secure & confidential. Your information is safe with us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
