import PropTypes from "prop-types";

const Hero = ({ id }) => {
  return (
    <section id={id} className="h-screen snap-start relative panel">
      <div className="shape w-full lg:w-[40rem] h-[15rem] lg:h-[25rem] -rotate-45 top-20 lg:top-40 right-0 lg:right-40 absolute"></div>
      <div className="px-4 lg:px-40 h-full backdrop-blur-3xl">
        <div className="px-4 lg:px-20 h-full flex flex-col justify-center gap-1">
          <span className="opacity-50 text-base lg:text-xl">
            Design & Development
          </span>
          <h1 className="text-4xl lg:text-7xl">
          In Muhammad’s (ﷺ) footsteps, <br className="hidden lg:block" />
          we seek wisdom to guide our endeavors.

          </h1>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Hero;
