"use client";
import { HyperText } from "@/components/magicui/hyper-text";
import { IconCloud } from "@/components/magicui/icon-cloud";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Github, Linkedin } from "lucide-react";
import { imagesCloud } from "@/data/cloud";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section
        className="w-full h-screen bg-cover bg-center sm:bg-fixed px-8 font-mono text-[#FAF7F0]"
        style={{ backgroundImage: 'url("/images/office.jpg")' }}
      >
        <div className="container mx-auto h-screen flex items-center flex-col w-full">
          <div className="flex flex-col justify-center items-center flex-1 ">
            <h1 className="text-5xl sm:text-6xl [word-spacing:-10px] uppercase font-bold cursor-default w-max">
              Adrián Cendón
            </h1>
            <div className="uppercase">
              <HyperText className="text-lg sm:text-xl font-medium cursor-default">
                FullStack Developer
              </HyperText>
            </div>
            <div className="flex justify-center items-center pt-4 gap-5 uppercase font-bold cursor-default">
              <a
                className="transform transition-transform duration-300 hover:scale-125"
                href="https://github.com/Cendon19"
                target="_blank"
              >
                <Github />
              </a>
              <a
                className="transform transition-transform duration-300 hover:scale-125"
                href="https://www.linkedin.com/in/adri%C3%A1n-cend%C3%B3n-g%C3%B3mez-7a028519a/"
                target="_blank"
              >
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#FAF7F0] px-8 font-mono text-[#151312]">
        <div className="container mx-auto flex items-center justify-center w-full py-[75px] px-30">
          <TextAnimate
            className="text-base sm:text-lg italic font-medium cursor-default text-center"
            animation="scaleUp"
            by="line"
          >
            Web Developer committed to continuous learning, with the ability to
            develop both back-end and front-end solutions. Experienced in Agile
            methodologies, including Scrum and Kanban. Currently seeking new
            challenges—preferably front-end focused—that offer opportunities for
            both professional and personal growth.
          </TextAnimate>
        </div>
      </section>
      <section className="w-full bg-[#151312] py-[150px] font-mono text-[#FAF7F0]">
        <h1 className="container mx-auto text-3xl px-40 font-bold flex lg:justify-start justify-center">
          <TextAnimate animation="slideLeft" by="character">
            Stack
          </TextAnimate>
        </h1>
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="p-20 flex flex-col justify-center items-center lg:items-start h-max lg:col-span-2">
            <div className="flex items-center mb-2 text-[#151312] gap-5 flex-wrap justify-center">
              <NeonGradientCard data-aos="fade-right" data-aos-duration="1000" className="ease-in duration-150 w-32">
                <div className="gap-2 flex items-center flex-col">
                  <img src="https://cdn.simpleicons.org/nextdotjs/nextdotjs" alt="Nextjs" className="h-16 w-16" />
                  <h4 className="text-base font-semibold truncate">Next JS</h4>
                </div>
              </NeonGradientCard>
              <NeonGradientCard data-aos="fade-right" data-aos-duration="1000" className="ease-in duration-150 w-32" data-aos-delay="100">
                <div className="gap-2 flex items-center flex-col">
                  <img src="https://cdn.simpleicons.org/react/react" alt="Reactjs" className="h-16 w-16" />
                  <h4 className="text-base font-semibold truncate">React JS</h4>
                </div>
              </NeonGradientCard>
              <NeonGradientCard data-aos="fade-right" data-aos-duration="1000" className="ease-in duration-150 w-32" data-aos-delay="150">
                <div className="gap-2 flex items-center flex-col">
                  <img src="https://cdn.simpleicons.org/javascript/javascript" alt="Javascript" className="h-16 w-16" />
                  <h4 className="text-base font-semibold truncate">Javascript</h4>
                </div>
              </NeonGradientCard>
              <NeonGradientCard data-aos="fade-right" data-aos-duration="1000" className="ease-in duration-150 w-32" data-aos-delay="200">
                <div className="gap-2 flex items-center flex-col">
                  <img src="https://cdn.simpleicons.org/Typescript/Typescript" alt="Typescript" className="h-16 w-16" />
                  <h4 className="text-base font-semibold truncate">Typescript</h4>
                </div>
              </NeonGradientCard>
              <NeonGradientCard data-aos="fade-right" data-aos-duration="1000" className="ease-in duration-150 w-32" data-aos-delay="250">
                <div className="gap-2 flex items-center flex-col">
                  <img src={`tailwind.svg`} alt="tailwind" className="h-16 w-16" />
                  <h4 className="text-base font-semibold truncate">Tailwind</h4>
                </div>
              </NeonGradientCard>
              <NeonGradientCard data-aos="fade-right" data-aos-duration="1000" className="ease-in duration-150 w-32" data-aos-delay="300">
                <div className="gap-2 flex items-center flex-col">
                  <img src="https://cdn.simpleicons.org/Bootstrap/Bootstrap" alt="Bootstrap" className="h-16 w-16" />
                  <h4 className="text-base font-semibold truncate">Bootstrap</h4>
                </div>
              </NeonGradientCard>
              <NeonGradientCard data-aos="fade-right" data-aos-duration="1000" className="ease-in duration-150 w-32" data-aos-delay="350">
                <div className="gap-2 flex items-center flex-col">
                  <img src={`magicui.png`} alt="MagicUI" className="h-16 w-16" />
                  <h4 className="text-base font-semibold truncate">Magic UI</h4>
                </div>
              </NeonGradientCard>
              <NeonGradientCard data-aos="fade-right" data-aos-duration="1000" className="ease-in duration-150 w-32" data-aos-delay="400">
                <div className="gap-2 flex items-center flex-col">
                  <img src="https://cdn.simpleicons.org/jest/jest" alt="Jest" className="h-16 w-16" />
                  <h4 className="text-base font-semibold truncate">Jest</h4>
                </div>
              </NeonGradientCard>
              <NeonGradientCard data-aos="fade-right" data-aos-duration="1000" className="ease-in duration-150 w-32" data-aos-delay="450">
                <div className="gap-2 flex items-center flex-col">
                  <img src="https://cdn.simpleicons.org/git/git" alt="Git" className="h-16 w-16" />
                  <h4 className="text-base font-semibold truncate">Git</h4>
                </div>
              </NeonGradientCard>
              <NeonGradientCard data-aos="fade-right" data-aos-duration="1000" className="ease-in duration-150 w-32" data-aos-delay="500">
                <div className="gap-2 flex items-center flex-col">
                  <img src={`dots.svg`} alt="dots" className="w-16" />
                  <h4 className="text-base font-semibold truncate">And More</h4>
                </div>
              </NeonGradientCard>
            </div>
          </div>
          <div className="p-20 flex flex-col justify-center items-center" data-aos="zoom-in">
            <IconCloud images={imagesCloud} />
          </div>
        </div>
      </section>
    </>
  );
}
