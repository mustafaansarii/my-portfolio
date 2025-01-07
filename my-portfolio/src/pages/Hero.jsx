import React, { useState, useEffect } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import config from '../config';
export default function Hero() {
  const [socialIcons, setSocialIcons] = useState([]);
  const [resumeLink, setResumeLink] = useState("");

  useEffect(() => {
    // Fetching social icons
    fetch(`${config.Backend_Api}/socials`) // Replace with your actual backend API
      .then((response) => response.json())
      .then((data) => {
        setSocialIcons(data); // Store the social icons data in the state
      })
      .catch((error) => {
        console.error("Error fetching social icons:", error);
      });

    // Fetching resume link
    fetch(`${config.Backend_Api}/resumes`) // Replace with your actual backend API
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          setResumeLink(data[0].resumeLink); // Store the resume link in the state
        }
      })
      .catch((error) => {
        console.error("Error fetching resume link:", error);
      });
  }, []);

  return (
    <div className="dark:text-black flex flex-col items-center mx-auto min-h-screen max-w-[900px]">
      <div className="relative isolate px-6 pt-10 lg:px-8 dark:text-black max-w-[900px]">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-balance text-5xl tracking-tight text-red-500 dark:text-red-500 sm:text-5xl">
              Hi, I'm Mustafa Ansari
            </h1>

            <p className="mt-8 text-lg font-sans dark:text-gray-500 sm:text-xl/5">
              A 3rd-year Computer Science Engineering student specializing in
              Data Science at Maharishi Markandeshwar University, Ambala, India.
              I am curious about full-stack development and focus on software
              solutions for real-world problems. Having solved over{" "}
              <strong>1000+ coding challenges</strong>, I am enthusiastic about
              competitive programming and continuously enhancing my technical
              skills.
            </p>
            <br />
            <div className="mt-2 flex justify-center flex-wrap gap-3">
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
                      className="bg-transparent shadow-md font-normal h-6 w-6 flex items-center justify-center rounded-full cursor-pointer"
                    >
                      <img
                        src={icon.imgSrc}
                        alt={icon.alt}
                        className="h-full w-full rounded-full"
                      />
                    </a>
                  );
                })
              ) : (
                <p>Loading social icons...</p>
              )}
            </div>

            <div className="mt-10 flex items-start gap-x-6 justify-center">
              <a
                href={resumeLink || "#"}
                className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-black bg-blue-600 dark:text-white border border-solid border-black dark:border-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
              <Link
                to="contact"
                smooth={true}
                className="rounded-md px-3.5 py-2.5 text-sm font-semibold bg-red-500 text-black dark:text-white border border-solid border-black dark:border-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
              >
                Contact Me 🔗
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
