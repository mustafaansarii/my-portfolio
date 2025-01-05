import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
import { Dialog, DialogPanel } from "@headlessui/react";

function Navbar() {
  const navigation = [
    { name: "About Me", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Resume", href: "Resume" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50 w-full">
        <nav
          aria-label="Global"
          className="fixed top-0 left-0 w-full z-50 flex items-center justify-between p-6 lg:px-8 backdrop-blur bg-white/70 dark:bg-black/70"
          style={{ background: "transparent" }}
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 cursor-pointer">
              <span className="sr-only">Your Company</span>
              <h1 className="text-2xl font-handwriting dark:text-white">
                &lt;Mustafa Ansari/&gt;
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
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
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
                onClick={() => setMobileMenuOpen(false)}
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

        {/* Mobile Menu */}
        <Dialog
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50 bg-black/30" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm bg-gray-50 dark:bg-gray-900">
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
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-700/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      smooth={true}
                      duration={500}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-black dark:text-white hover:border hover:border-black dark:hover:border-white cursor-pointer"
                      onClick={() => setMobileMenuOpen(false)}
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
    </div>
  );
}

export default Navbar;
