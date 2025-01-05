import React from "react";
import socialIcons from "./Social";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative">
      {/* Bold Line Above Footer */}
      
      {/* Footer Content */}
      <div className="flex flex-col items-center">
        {/* Thin Line Above Icons */}
        <div className="w-full h-[1px] bg-gray-700 dark:bg-white mb-4"></div>

        <div className="mt-2 flex justify-center flex-wrap gap-3">
          {/* Social Icons */}
          {socialIcons.map((icon, index) => (
            <a
              key={index}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent shadow-md font-normal h-6 w-6 flex items-center justify-center rounded-full"
            >
              <img
                src={icon.src}
                alt={icon.alt}
                className="h-full w-full rounded-full"
              />
            </a>
          ))}
        </div>

        <div className="text-xs dark:text-white font-semibold py-3 text-center">
          © {new Date().getFullYear()}{" "}
          <Link to="/admin">Mustafa. Built with ❤️ using React.</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
