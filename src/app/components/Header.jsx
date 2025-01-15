"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasHero, setHasHero] = useState(true);

  useEffect(() => {
    const heroElement = document.querySelector(".hero");
    setHasHero(!!heroElement); // Determine if a hero section exists

    const handleScroll = () => {
      if (heroElement) {
        // Handle scroll behavior for pages with a hero section
        const heroBottom = heroElement.getBoundingClientRect().bottom;
        const threshold = 100; // Adjust this value to trigger the style change sooner/later
        setIsScrolled(heroBottom <= threshold);
      } else {
        // Handle scroll behavior for pages without a hero section
        setIsScrolled(window.scrollY > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 text-white shadow-none z-50 transition-all duration-500 ${
        isScrolled
          ? hasHero
            ? "w-[70%] mt-7 px-10 py-2 bg-gradient-to-r from-gray-900 to-gray-600 rounded-full mx-auto shadow-lg"
            : "w-[70%] mt-7 px-10 py-2 bg-gradient-to-r from-gray-900 to-gray-600 rounded-full mx-auto shadow-lg"
          : hasHero
          ? "w-full py-9 px-20 bg-transparent transition-all duration-700"
          : "bg-transparent py-9 px-20 transition-all duration-700"
      }`}
    >
      <div className="flex justify-between items-center w-full">
        <h1 className="font-semibold text-4xl">
          <Link href="/">MD</Link>
        </h1>
        <nav>
          <ul className="flex justify-center items-center space-x-8">
            {/* <li className="font-semibold uppercase">
              <Link href="/works">Works</Link>
            </li> */}
            <li className="font-semibold uppercase">
              <Link href="/digitals">Digitals</Link>
            </li>
            <li className="font-semibold uppercase">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
