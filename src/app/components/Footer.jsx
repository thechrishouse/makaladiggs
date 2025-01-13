import React from "react";
import { FaTiktok, FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full h-auto bg-gray text-center mx-auto py-10">
      <nav className="flex flex-row justify-center space-x-4">
        <a
          href="https://www.instagram.com/makaladiggs/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://www.tiktok.com/@makaladiggs"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Tiktok"
        >
          <FaTiktok size={24} />
        </a>
        <a href="mailto:diggsmakala@gmail.com" aria-label="Email">
          <FaEnvelope size={24} />
        </a>
        <a
          href="https://youtube.com/makaladiggs/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Youtube"
        >
          <FaYoutube size={24} />
        </a>
      </nav>
      <p className="mt-4"> {new Date().getFullYear()} All rights reserved</p>
      <div className="absolute inset-0 top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    </footer>
  );
}

export default Footer;
