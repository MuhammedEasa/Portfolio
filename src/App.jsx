import { useState, useRef } from "react";
import Nav from "./components/Nav";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const wrapperRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  useGSAP(() => {
    ScrollTrigger.defaults({
      scroller: ".wrapper",
    });

    gsap.utils.toArray(".panel").forEach((panel, index) => {
      gsap.to(`.bullet-${index + 1}`, {
        background: "#fff",
        scrollTrigger: {
          trigger: panel,
          toggleActions: "play reverse play reverse",
        },
      });
    });
  });

  const scrollTo = (section) => {
    gsap.to(wrapperRef.current, {
      duration: 1,
      scrollTo: { y: `#${section}`, autoKill: false },
      ease: "power2.inOut",
    });
    setIsMenuOpen(false);
  };

  return (
    <>
      <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="fixed bottom-0 w-full lg:h-[70vh] lg:w-24 flex flex-row lg:flex-col justify-between items-center p-4 lg:p-10 z-40">
        <div className="flex items-center gap-4 lg:gap-8 lg:-rotate-90">
          <p className="text-sm lg:text-base">Eng</p>
          <div className="w-10 lg:w-20 h-[1px] bg-white/50"></div>
          <p className="text-sm lg:text-base">Ar</p>
        </div>
        <div className="flex lg:flex-col space-x-4 lg:space-x-0 lg:space-y-8 [&>*]:cursor-pointer">
          <FaLinkedin
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/muhammed-easa/",
                "_blank"
              )
            }
            className="hover:text-indigo-500 cursor-pointer"
          />

          <FaGithub
            onClick={() =>
              window.open("https://github.com/MuhammedEasa/", "_blank")
            }
            className="hover:text-indigo-500 cursor-pointer"
          />

          <FaInstagram
            onClick={() =>
              window.open(
                "https://www.instagram.com/al_hafiz_muhammed_easa/",
                "_blank"
              )
            }
            className="hover:text-indigo-500 cursor-pointer"
          />
        </div>
      </div>
      <div className="fixed space-y-4 lg:space-y-6 top-2/4 right-4 lg:right-10 z-40">
        <div className="bg-white/25 size-1.5 lg:size-2 rounded-full bullet-1"></div>
        <div className="bg-white/25 size-1.5 lg:size-2 rounded-full bullet-2"></div>
        <div className="bg-white/25 size-1.5 lg:size-2 rounded-full bullet-3"></div>
      </div>
      <div ref={wrapperRef} className="wrapper">
        <Hero id="hero" />
        <About id="about" />
        <Contact id="contact" />
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-8 right-8 text-white text-4xl"
          >
            &times;
          </button>
          <ul className="text-2xl lg:text-4xl space-y-6 lg:space-y-8">
            <li>
              <button onClick={() => scrollTo("hero")}>Home</button>
            </li>
            <li>
              <button onClick={() => scrollTo("about")}>About</button>
            </li>
            <li>
              <button onClick={() => scrollTo("contact")}>Contact</button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default App;
