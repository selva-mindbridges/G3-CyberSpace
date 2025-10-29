"use client";

import React, { useEffect, useState } from "react";

const GoTop = () => {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 150) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <>
      {showButton && (
        <div 
          onClick={scrollToTop} 
          className="fixed right-6 bottom-6 w-12 h-12 bg-primary hover:bg-secondary rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 z-50 group"
        >
          <i className="bx bx-chevrons-up text-white text-2xl group-hover:animate-bounce"></i>
        </div>
      )}
    </>
  );
};

export default GoTop;
