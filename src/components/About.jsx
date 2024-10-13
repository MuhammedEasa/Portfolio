import PropTypes from 'prop-types';

const About = ({ id }) => {
  return (
    <section id={id} className="h-screen relative snap-start panel">
      <div className="shape absolute w-full h-[40vh] lg:h-[60vh] left-0 right-0 rotate-180"></div>
      <div className="h-full w-full backdrop-blur-3xl flex flex-col justify-center p-4 lg:p-40">
        <h1 className="text-5xl lg:text-8xl p-4 lg:p-20">About</h1>
        <div className="w-full lg:w-96 self-center flex flex-col gap-4 lg:gap-6 opacity-50 font-sans text-sm lg:text-base">
          <p>
            I&apos;m a full-stack web developer with experience in building scalable
            web solutions. I specialize in the MERN stack, along with Next.js,
            TypeScript, and microservices. I also have hands-on expertise in
            Docker, Kubernetes, Helm, and Kafka.
          </p>
          <p>
            If you assign me a task with a deadline, I&apos;m confident I can
            complete it and prove my skills.
          </p>
        </div>
        <div className="px-4 lg:px-10 py-8 lg:py-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-around gap-8 lg:gap-40">
            <h1 className="text-3xl lg:text-5xl">Services</h1>
            <ul className="space-y-2">
              <p className="font-bold">Development</p>
              <li className="opacity-60">Front-End</li>
              <li className="opacity-60">Back-End</li>
              <li className="opacity-60">Deployment</li>
            </ul>
            <ul className="space-y-2">
              <p className="font-bold">Design</p>
              <li className="opacity-60">UI/UX</li>
              <li className="opacity-60">Branding</li>
              <li className="opacity-60">Motion Design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

About.propTypes = {
  id: PropTypes.string.isRequired,
};

export default About;