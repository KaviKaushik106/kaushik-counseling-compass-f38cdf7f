
import { Button } from "@/components/ui/button";

export const CommunitySection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Join Our Community
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Connect with fellow aspirants and get ongoing support
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
            <div className="text-4xl mb-4">📲</div>
            <h3 className="font-semibold text-gray-900 mb-2">WhatsApp Group</h3>
            <p className="text-gray-600 text-sm mb-4">
              Get instant updates and connect with peers
            </p>
            <Button 
              className="w-full bg-green-600 hover:bg-green-700 text-white"
              onClick={() => window.open('https://chat.whatsapp.com/FGlhXzdsCimIZYACDkJz53', '_blank')}
            >
              Join WhatsApp Group
            </Button>
          </div>
          
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
            <div className="text-4xl mb-4">📢</div>
            <h3 className="font-semibold text-gray-900 mb-2">Telegram Group</h3>
            <p className="text-gray-600 text-sm mb-4">
              Daily tips, updates, and study resources
            </p>
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => window.open('https://t.me/+2nvS1E_E3e85ZmFl', '_blank')}
            >
              Join Telegram Group
            </Button>
          </div>
        </div>
        
        <div className="mt-8 p-6 bg-white rounded-xl border border-gray-200 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">K</div>
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">A</div>
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">R</div>
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">+</div>
            </div>
            <span className="text-gray-600 font-medium">500+ Active Members</span>
          </div>
          <p className="text-gray-600 text-sm">
            Join a community of engineering aspirants helping each other succeed
          </p>
        </div>
      </div>
    </section>
  );
};
