import { useRef } from "react";
import { PROFILE } from "../constants";
import { RiArrowRightUpLine } from "@remixicon/react";
import saniya from "../assets/saniya2.webp.jpeg";

const Hero = () => {
  const heroRef = useRef(null);

  return (
    <section
    ref={heroRef}
    className="min-h-screen flex flex-col items-center justify-center px-4 text-center pt-24 lg:pt-10"
    >
      <div className="mt-8 lg:mt-20 max-w-4xl">
        <h1 className="text-4xl lg:text-7xl font-semibold uppercase font-poppins">
          {PROFILE.name}
        </h1>

        <h2 className="bg-gradient-to-b from-pink-200 to-purple-300 bg-clip-text text-transparent text-2xl lg:text-3xl mt-2 font-inter tracking-tighter">
          {PROFILE.role}
        </h2>

        <p className="mt-6 text-lg font-opensans max-w-2xl mx-auto leading-relaxed">
          {PROFILE.subheading}
        </p>

        <a
          href="/SF_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="inline-flex items-center gap-2 mt-6 border border-pink-200/50 px-4 py-2 rounded-full tracking-tighter text-sm hover:bg-pink-400 hover:text-white transition"
        >
          Download Resume <RiArrowRightUpLine />
        </a>

        <div className="mt-10">
          <img
            src={saniya}
            alt={PROFILE.name}
            width={400}
            height={400}
            className="rounded-3xl border border-purple-300/20 p-1 mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
