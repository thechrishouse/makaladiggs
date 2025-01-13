"use-strict";

function Hero() {
  return (
    <div className="hero w-full h-screen min-h-[500px] relative">
      <video
        className="w-full h-full object-cover"
        src="/vid/AnastasiaBH.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
        <h1 className="text-white text-3xl md:text-6xl font-bold">
          Makala Diggs
        </h1>
      </div>
    </div>
  );
}

export default Hero;
