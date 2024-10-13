import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Contact = () => {
  return (
    <section className="h-screen relative">
      <div className="shape size-44 absolute right-60 top-36"></div>
      <div className=" backdrop-blur-2xl flex items-center justify-between px-60 py-32">
        <p className="text-4xl w-96">
          Let&apos;s mix our skills with your ideas and create something
          Innoative
        </p>
        <button className="glass-btn size-48 rounded-full text-lg">
          Start a project
        </button>
      </div>
      <div className="px-60 py-20 flex items-center justify-between">
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
            <FaLinkedin className="hover:text-orange-500" />
            <FaGithub className="hover:text-orange-500" />
            <FaInstagram className="hover:text-orange-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
