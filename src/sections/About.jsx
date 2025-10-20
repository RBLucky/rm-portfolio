import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  // Punchier header text
  const text = `Strategic. Creative. Results-Driven.
  I build passionate online communities
  and help brands grow.`;

  // Refined body text with "##" markers for subheadings
  const aboutText = `I am a Social Media and Digital Marketing Specialist. 
My passion is assisting brands and company owners 
in creating and maintaining an online presence.
## I HELP BRANDS:
  🤝 Connect with their audiences
  ❤️ Build brand loyalty
  📈 Drive business growth
## MY CORE SKILLS INCLUDE:
  ✨ Developing social media strategies
  🎨 Creating engaging content
  💬 Managing online communities
  📊 Analyzing social media performance`;

  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"About Me"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="images/man.jpg" // NOTE: This image still needs to be replaced
          alt="Rorisang Mathe"
          className="w-md rounded-3xl"
        />
        <AnimatedTextLines text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
};

export default About;