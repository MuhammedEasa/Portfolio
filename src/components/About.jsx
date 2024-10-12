const About = () => {
  return (
    <section className="h-screen relative">
      <div className="shape absolute w-full h-[60vh] left-0 right-0 rotate-180"></div>
      <div className="h-full w-full backdrop-blur-3xl flex flex-col justify-center p-40">
        <h1 className="text-8xl p-20">About</h1>
        <div className="w-96 self-center flex flex-col gap-6 opacity-50 font-sans">
          <p>
            I’m a full-stack web developer with experience in building scalable
            web solutions. I specialize in the MERN stack, along with Next.js,
            TypeScript, and microservices. I also have hands-on expertise in
            Docker, Kubernetes, Helm, and Kafka.
          </p>
          <p>
            If you assign me a task with a deadline, I’m confident I can
            complete it and prove my skills.
          </p>
        </div>
        <div className="px-10 py-20">
          <div className="flex items-center justify-around gap-40">
            <h1 className="text-5xl">Services</h1>
            <ul className="space-y-2">
              <p>Development</p>
              <li className="opacity-60">Front-End</li>
              <li className="opacity-60">Back-End</li>
              <li className="opacity-60">Deployment</li>
            </ul>
            <ul className="space-y-2">
              <p>Design</p>
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

export default About;
