import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import config from '../config';
const Footer = () => {
  const [socialIcons, setSocialIcons] = useState([]);

  // Fetch social icons data when the component mounts
  useEffect(() => {
    fetch(`${config.Backend_Api}/socials` )
      .then((response) => response.json())
      .then((data) => {
        setSocialIcons(data); // Store the data in the state
      })
      .catch((error) => {
        console.error("Error fetching social icons:", error);
      });
  }, []);

  return (
    <footer className="relative">
      {/* Bold Line Above Footer */}

      {/* Footer Content */}
      <div className="flex flex-col items-center">
        {/* Thin Line Above Icons */}
        <div className="w-full h-[1px] bg-gray-700 dark:bg-white mb-4"></div>

        <div className="mt-2 flex justify-center flex-wrap gap-3">
          {/* Social Icons */}
          {socialIcons.length > 0 ? (
            socialIcons.map((icon, index) => {
              const isEmail = icon.link.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
              const href = isEmail ? `mailto:${icon.link}` : icon.link;

              return (
                <a
                  key={index}
                  href={href}
                  target={isEmail ? "_self" : "_blank"}
                  rel={isEmail ? "" : "noopener noreferrer"}
                  className="bg-transparent shadow-md font-normal h-6 w-6 flex items-center justify-center rounded-full"
                >
                  <img
                    src={icon.imgSrc}
                    alt={`Social Icon ${index}`}
                    className="h-full w-full rounded-full"
                  />
                </a>
              );
            })
          ) : (
            <p>Loading social icons...</p>
          )}
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
