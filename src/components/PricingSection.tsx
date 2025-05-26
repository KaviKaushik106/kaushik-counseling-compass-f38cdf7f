
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star } from "lucide-react";

export const PricingSection = () => {
  const packages = [
    {
      name: "JAC Delhi Full Support",
      price: "₹499",
      description: "Complete guidance for JAC Delhi counseling",
      features: [
        "WhatsApp + Call Support",
        "Choice Filling Strategy",
        "Rank Analysis",
        "College Selection Advice"
      ],
      popular: false
    },
    {
      name: "IPU Full Counseling Support",
      price: "₹499", 
      description: "Comprehensive IPU counseling assistance",
      features: [
        "Rank Analysis & Strategy",
        "College Selection Guidance", 
        "Personal 1-on-1 Sessions",
        "Real-time Doubt Solving"
      ],
      popular: true
    },
    {
      name: "IPU Choice Filling Only",
      price: "₹249",
      description: "Quick help with preference order",
      features: [
        "Choice Filling Strategy",
        "Preference Order Optimization",
        "Quick Consultation",
        "WhatsApp Support"
      ],
      popular: false
    }
  ];

  const bonusOffer = {
    name: "First Year Mentorship Program",
    price: "₹1,499",
    originalPrice: "₹2,999",
    description: "Complete first-year guidance package",
    features: [
      "4 Live Google Meet Sessions",
      "Resume Building Workshop",
      "Coding Guidance & Resources",
      "Club & Society Recommendations",
      "Internship Preparation",
      "Academic Planning"
    ]
  };

  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Pricing & Packages
          </h2>
          <p className="text-lg text-gray-600">
            Choose the support that fits your needs
          </p>
        </div>
        
        {/* Main Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {packages.map((pkg, index) => (
            <div key={index} className={`relative bg-white rounded-2xl border-2 p-8 ${pkg.popular ? 'border-blue-500 shadow-lg' : 'border-gray-200'}`}>
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1">
                  Most Popular
                </Badge>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">{pkg.price}</div>
                <p className="text-gray-600 text-sm">{pkg.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                onClick={scrollToForm}
                className={`w-full py-3 ${pkg.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-800 hover:bg-gray-900'} text-white font-semibold rounded-lg`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
        
        {/* Bonus Offer */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="absolute top-4 right-4">
            <Badge className="bg-yellow-400 text-yellow-900 px-3 py-1 font-bold">
              <Star className="w-4 h-4 mr-1" />
              BONUS OFFER
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">{bonusOffer.name}</h3>
              <p className="text-purple-100 mb-6">{bonusOffer.description}</p>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold">{bonusOffer.price}</span>
                <span className="text-purple-200 line-through text-xl">{bonusOffer.originalPrice}</span>
                <Badge className="bg-green-400 text-green-900 px-2 py-1 font-bold">50% OFF</Badge>
              </div>
              
              <Button 
                onClick={scrollToForm}
                className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg"
              >
                Claim Bonus Offer
              </Button>
            </div>
            
            <div className="space-y-3">
              {bonusOffer.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span className="text-purple-100">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
