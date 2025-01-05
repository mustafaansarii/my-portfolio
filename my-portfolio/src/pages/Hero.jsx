import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import socialIcons from "../components/Social";
import { Link } from "react-scroll"; // Import Link from react-scroll

export default function Hero() {

  return (
    <div className="dark:text-black flex flex-col items-center mx-auto min-h-screen max-w-[900px]">
      

      {/* Main Section */}
      <div className="relative isolate px-6 pt-10 lg:px-8 dark:text-black max-w-[900px]">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            {/* Aligned to the left */}
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:border-white dark:ring-gray-700/30 dark:hover:ring-gray-700/20 cursor-pointer">
              Competitive Programmer.{" "}
              <a
                href="https://www.linkedin.com/in/mustafaansaari/"
                className="font-semibold text-indigo-600 dark:text-indigo-400"
              >
                <span aria-hidden="true" className="absolute inset-0" />
                Know more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="text-center">
            {/* Entire section aligned to the left */}
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
              {/* Social Icons */}
              {socialIcons.map(
                (icon, index) =>
                  icon.alt !== "Telegram" ? (
                    <a
                      key={index}
                      href={icon.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-transparent shadow-md font-normal h-6 w-6 flex items-center justify-center rounded-full cursor-pointer"
                    >
                      <img
                        src={icon.src}
                        alt={icon.alt}
                        className="h-full w-full rounded-full"
                      />
                    </a>
                  ) : null // Skip the Telegram icon
              )}
            </div>

            <div className="mt-10 flex items-start gap-x-6 justify-center">
              {/* Adjusted alignment */}
              <a
                href="#"
                className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-black bg-blue-600 dark:text-white border border-solid border-black dark:border-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
              >
                View Resume
              </a>
              <a
                href="#"
                className="rounded-md px-3.5 py-2.5 text-sm font-semibold bg-red-500 text-black dark:text-white border border-solid border-black dark:border-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
              >
                Contact Me 🔗
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
