import React from "react";
const AnimatedGradient =()=> {
    return (
      <div className="absolute inset-0 -z-10 overflow-hidden ">
        <div className="absolute inset-0 bg-gradient-to-br via-white to-blue-100" />
        <div 
          className="absolute -top-[40rem] left-1/2 -z-10 transform-gpu blur-3xl sm:top-[-20rem]" 
          aria-hidden="true"
        >
          <div
            className="aspect-[1200/900] w-[72.1875rem] bg-gradient-to-tr from-blue-400 to-blue-600 opacity-30"
            style={{
              clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    );  }
export default AnimatedGradient;  