import React from "react";
import logo from '../assets/cheflogo.jpg'
import HeroSection from "./HeroSection";
import MustTry from "./MustTry";
import AboutUs from "./AboutUs";

function NavrBar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ });
    }
  };

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <header className="bg-white dark:bg-gray-900 fixed top-0 w-full z-10 shadow-md">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <a className="block text-teal-600 dark:text-teal-300" href="#">
            <span className="sr-only">Home</span>
            <img src={logo} className="w-16 h-16" alt="Chef Logo" />
          </a>

          <div className="flex flex-1 items-center justify-center md:justify-between">
            <nav aria-label="Main Navigation" className="hidden md:block">
              <ul className="flex justify-center items-center gap-6 text-sm">
                <li>
                  <button
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    onClick={() => scrollToSection("home")}
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    onClick={() => scrollToSection("about")}
                  >
                    About us
                  </button>
                </li>

                <li>
                  <button
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    onClick={() => scrollToSection("must-try")}
                  >
                    Must Try
                  </button>
                </li>
              </ul>
            </nav>
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle mobile menu"
            ></button>
          </div>
        </div>
      </header>

      <main>
        <section
          id="home"
          className=" min-h-screen flex items-center justify-center"
        >
          <HeroSection />
        </section>

        <section
          id="about"
        >
          <div className="max-w-screen-xl px-4 sm:px-6 lg:mx-auto">
            <AboutUs />
          </div>
        </section>

        <section
          id="must-try"
          className="min-h-screen flex items-center justify-center"
        >
          <div className="max-w-screen-xl px-4 sm:px-6 lg:mx-auto">
            <MustTry />
          </div>
        </section>
      </main>
    </>
  );
}

export default NavrBar;