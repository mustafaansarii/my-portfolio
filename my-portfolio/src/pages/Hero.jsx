import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import socialIcons from "../components/Social";
import { Link } from "react-scroll"; // Import Link from react-scroll

export default function Hero() {
  const navigation = [
    { name: "About Me", href: "about" }, // Scroll to the section with id="about"
    { name: "Skills", href: "skills" }, // Scroll to the section with id="skills"
    { name: "Projects", href: "projects" }, // Scroll to the section with id="projects"
    { name: "Contact", href: "contact" }, // Scroll to the section with id="contact"
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="dark:text-black flex flex-col items-center mx-auto min-h-screen max-w-[900px]">
      <header className="absolute inset-x-0 top-0 z-50 w-full">
        {/* Transparent Navigation */}
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
          style={{ background: "transparent" }}
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 cursor-pointer">
              <span className="sr-only">Your Company</span>
              <h1 className="text-2xl font-handwriting dark:text-white">
                {" "}
                &lt;Mustafa Ansari/&gt;{" "}
              </h1>
            </a>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-white cursor-pointer"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                smooth={true}
                duration={500}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-black dark:text-white hover:border hover:border-black dark:hover:border-white"
                onClick={() => setMobileMenuOpen(false)} // Close menu on click
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="https://www.linkedin.com/in/mustafaansaari/"
              className="text-sm/6 font-semibold text-gray-900 dark:text-white cursor-pointer"
            >
              More <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>

        {/* Mobile Menu with Gray Background */}
        {/* Mobile Menu with Gray Background */}
        <Dialog
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)} // Close on clicking outside
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm bg-gray-50 text-black dark:bg-gray-900">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5 cursor-pointer">
                <span className="sr-only">Mustafa Ansari</span>
                <h1 className="text-2xl font-handwriting dark:text-white">
                  &lt;Mustafa Ansari /&gt;
                </h1>
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-white cursor-pointer"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root text-black dark:text-white">
              <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-700/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href} // This uses react-scroll
                      smooth={true}
                      duration={500}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-black dark:text-white hover:border hover:border-black dark:hover:border-white cursor-pointer"
                      onClick={() => setMobileMenuOpen(false)} // Close menu on click
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="https://www.linkedin.com/in/mustafaansaari/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-black dark:text-white hover:border hover:border-black dark:hover:border-white cursor-pointer"
                  >
                    More
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

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
