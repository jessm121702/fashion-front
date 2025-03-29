import React from 'react';

const ThankYouModal = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-gray-900 text-white rounded-3xl max-w-md w-full py-8 px-8 text-center shadow-xl relative overflow-hidden">
        {/* Decorative accent */}
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-gray-800 rounded-full opacity-50"></div>
        
        <h1 className="font-serif text-3xl mb-5 leading-tight">
          Thank you for submitting your market list!
        </h1>
        
        <p className="uppercase text-xs tracking-wider mb-6 font-light text-gray-200 mx-auto max-w-xs">
          OUR SYSTEMS ARE WORKING TO GET
          THESE EMAILS OUT - ONCE COMPLETED,
          WE WILL SEND OVER AN EMAIL
        </p>
        
        <div className="mt-5">
          <p className="text-lg mb-2">Any questions?</p>
          <p className="text-sm text-gray-300">
            Email us at <a href="mailto:contact@styloire.com" className="text-white hover:underline transition-colors">contact@styloire.com</a> or dm us <span className="text-white">@styloire</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouModal;
