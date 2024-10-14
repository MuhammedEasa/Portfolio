import PropTypes from "prop-types";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = ({ id }) => {
  return (
    <section id={id} className="h-screen relative snap-start panel">
      <div className="shape size-24 lg:size-44 absolute right-4 lg:right-60 top-20 lg:top-36"></div>
      <div className="backdrop-blur-2xl flex flex-col lg:flex-row items-center justify-between px-4 lg:px-60 py-16 lg:py-32">
        <p className="text-2xl lg:text-4xl w-full lg:w-96 mb-8 lg:mb-0">
          Let&apos;s mix our skills with your ideas and create something
          Innovative
        </p>
        <button
          className="glass-btn size-32 lg:size-48 rounded-full text-base lg:text-lg"
          onClick={() => {
            window.location.href = "tel:+917012526343";
          }}
        >
          Call Me
        </button>
      </div>
      <div className="px-4 lg:px-60 py-8 lg:py-20 flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-8 lg:space-y-0">
        <div className="space-y-2">
          <p className="opacity-60">Phone Number</p>
          <p>+91 7012526343</p>
        </div>
        <div className="space-y-2">
          <p className="opacity-60">Email</p>
          <p>easanedumangad@gmail.com</p>
        </div>
        <div className="space-y-2">
          <p className="opacity-60">Social media</p>
          <div className="flex gap-8">
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
      </div>
      <footer className="text-sm lg:text-xl px-4 lg:px-60 py-4 lg:py-10 opacity-50 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
        <div className="text-sm lg:text-lg">&copy;2024 All rights reserved</div>
        <div className="flex items-center gap-4 lg:gap-8">
          {/* <p>Eng</p>
          <div className="w-10 lg:w-20 h-[1px] bg-white/50"></div>
          <p>Ar</p> */}
        </div>
      </footer>
    </section>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Contact;
