const Hero = () => {
  return (
    <section className="h-screen">
      <div className="shape w-[40rem] h-[25rem] -rotate-45 top-40 right-40 absolute"></div>
      <div className="px-40 h-full backdrop-blur-3xl">
        <div className="px-20 h-full flex flex-col justify-center gap-1">
          <span className="opacity-50 text-xl">Design & development</span>
          <h1 className="text-7xl">
            If code is a poetry - then <br /> we are Dante
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
