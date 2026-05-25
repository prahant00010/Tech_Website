"use client";

import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {

  const [isVisible, setIsVisible] = useState(false);

  // Show / Hide Button when scrolling
  useEffect(() => {

    const toggleVisibility = () => {

      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

    };

    window.addEventListener("scroll", toggleVisibility);

    return () =>
      window.removeEventListener("scroll", toggleVisibility);

  }, []);

  // Scroll To Top Function
  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

  return (

    <div className="fixed bottom-5 right-5 z-50">

      {isVisible && (

        <button
          onClick={scrollToTop}
          className="bg-orange-500 hover:bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 animate-bounce focus:outline-none"
        >
          <FaArrowUp className="text-lg" />
        </button>

      )}

    </div>

  );
};

export default ScrollToTop;