import Nav from "./components/Nav";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function App() {
  gsap.registerPlugin(ScrollTrigger);
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
  return (
    <>
      <Nav />
      <div className="fixed h-[70vh] bottom-0 w-24 flex flex-col justify-between items-center p-10 z-50">
        <div className="flex items-center gap-8 -rotate-90">
          <p>Eng</p>
          <div className="w-20 h-[1px] bg-white/50"></div>
          <p>Ar</p>
        </div>
        <div className="space-y-8 [&>8]:cursor-pointer">
          <FaLinkedin
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/muhammed-easa/",
                "_blank"
              )
            }
            className="hover:text-orange-500 cursor-pointer"
          />

          <FaGithub
            onClick={() =>
              window.open("https://github.com/MuhammedEasa/", "_blank")
            }
            className="hover:text-orange-500 cursor-pointer"
          />

          <FaInstagram
            onClick={() =>
              window.open(
                "https://www.instagram.com/al_hafiz_muhammed_easa/",
                "_blank"
              )
            }
            className="hover:text-orange-500 cursor-pointer"
          />
        </div>
      </div>
      <div className="fixed space-y-6 top-2/4 right-10 z-50">
        <div className="bg-white/25 size-2 rounded-full bullet-1"></div>
        <div className="bg-white/25 size-2 rounded-full bullet-2"></div>
        <div className="bg-white/25 size-2 rounded-full bullet-3"></div>
      </div>
      <div className="wrapper">
        <Hero />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default App;
