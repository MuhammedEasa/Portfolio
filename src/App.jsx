import Nav from "./components/Nav";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Nav />
      <div className="fixed h-[70vh] bottom-0 w-24 flex flex-col justify-between items-center p-10">
        <div className="flex items-center gap-8 -rotate-90">
          <p>Eng</p>
          <div className="w-20 h-[1px] bg-white/50"></div>
          <p>Ar</p>
        </div>
        <div className="space-y-8 [&>8]:cursor-pointer">
          <FaLinkedin className="hover:text-orange-500" />
          <FaGithub className="hover:text-orange-500" />
          <FaInstagram className="hover:text-orange-500" />
        </div>
      </div>

      <div className="wrapper">
        <Hero/>
        <About/>
        <Contact/>
      </div>
    </>
  );
}

export default App;
