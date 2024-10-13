import PropTypes from "prop-types";

const About = ({ id }) => {
  return (
    <section id={id} className="min-h-screen relative snap-start panel overflow-y-auto py-20">
      <div className="shape absolute w-full h-[40vh] lg:h-[60vh] left-0 right-0 rotate-180"></div>
      <div className="relative w-full backdrop-blur-3xl flex flex-col justify-center p-4 sm:p-8 lg:p-20">
        <h1 className="text-4xl sm:text-5xl lg:text-8xl p-4 sm:p-8 lg:p-20 text-center">About</h1>
        <div className="w-full max-w-2xl mx-auto flex flex-col gap-4 lg:gap-6 font-sans text-sm sm:text-base text-white/60">
          <p>
            I&apos;m Muhammed Easa, a passionate full-stack web developer
            specializing in building scalable solutions. My expertise lies in
            the MERN stack, Next.js, and TypeScript, complemented by hands-on
            experience with microservices, Docker, and Kubernetes.
          </p>
          <p>
            Known for my ability to tackle complex challenges, I thrive on
            turning innovative ideas into efficient, high-quality code. Whether
            it&apos;s a tight deadline or a demanding project, I&apos;m confident in
            delivering results that exceed expectations.
          </p>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="flex flex-col items-center gap-8 lg:gap-12">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl text-center">Skills & Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl">
              <SkillCategory title="Development" skills={[
                "Full-Stack Web Development",
                "Front-End Development",
                "Back-End Development",
                "Microservices Architecture",
                "Database Management"
              ]} />
              <SkillCategory title="Technologies" skills={[
                "JavaScript / TypeScript",
                "React / Next.js 14",
                "Node.js / Express",
                "MongoDB / MySQL",
                "Docker / Kubernetes",
                "Apache Kafka",
                "Elasticsearch"
              ]} />
              <SkillCategory title="Tools & Platforms" skills={[
                "Git / GitHub",
                "AWS / Firebase",
                "Netlify / Vercel / Render",
                "Figma (UI/UX Design)"
              ]} />
              <SkillCategory title="Frontend Specialties" skills={[
                "GSAP (Animation)",
                "Responsive Web Design",
                "Performance Optimization",
                "TailwindCSS"
              ]} />
              <SkillCategory title="Architecture & Design" skills={[
                "Clean Architecture",
                "MVC Architecture",
                "RESTful API Design",
                "Microservices Design"
              ]} />
              <SkillCategory title="Other Experience" skills={[
                "Angular",
                "Java",
                "C"
              ]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCategory = ({ title, skills }) => (
  <ul className="space-y-2">
    <p className="font-bold text-lg sm:text-xl mb-3">{title}</p>
    {skills.map((skill, index) => (
      <li key={index} className="opacity-60 text-sm sm:text-base">{skill}</li>
    ))}
  </ul>
);

SkillCategory.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

About.propTypes = {
  id: PropTypes.string.isRequired,
};

export default About;