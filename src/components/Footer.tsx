
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <blockquote className="text-xl sm:text-2xl font-medium text-gray-300 mb-4 italic">
            "Your one decision now can shape your next 4 years. 
            Let's make it the right one — together."
          </blockquote>
          <div className="text-blue-400 font-semibold">– Kavi Kaushik</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">JAC Delhi Counseling</a></li>
              <li><a href="#" className="hover:text-white transition-colors">IPU Counseling</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>1-on-1 Counseling</li>
              <li>Choice Filling Strategy</li>
              <li>College Selection</li>
              <li>First Year Mentorship</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>WhatsApp Support</li>
              <li>Call Consultation</li>
              <li>Email Support</li>
              <li>Community Groups</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📧 kavikaushik@example.com</li>
              <li>📱 WhatsApp Support</li>
              <li>🎓 DTU Student</li>
              <li>📍 Delhi, India</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Kavi Kaushik Counseling. All rights reserved.
            </p>
            <div className="flex gap-4 text-gray-400 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
