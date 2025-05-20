import { HyperText } from "@/components/magicui/hyper-text";
import { IconCloud } from "@/components/magicui/icon-cloud";
import { TextAnimate } from "@/components/magicui/text-animate";
import { TextReveal } from "@/components/magicui/text-reveal";
import { Github, Linkedin } from "lucide-react";
import { imagesCloud } from "@/data/cloud";
import { MagicCard } from "@/components/magicui/magic-card";

export default function Home() {
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
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-10 flex flex-col justify-center items-start">
            <h1 className="text-3xl font-bold pb-4">
              <TextAnimate animation="slideLeft" by="character">
                Stack
              </TextAnimate>
            </h1>
            <MagicCard className="flex flex-col justify-center items-start gap-4 w-full p-4 bg-[#151312] text-[#FAF7F0] rounded-lg">
              <div>
                <p>Hello World</p>
                <span>Hover me</span>
              </div>
            </MagicCard>
          </div>
          <div className="p-10 flex flex-col justify-center items-center">
            <IconCloud images={imagesCloud} />
          </div>
        </div>
      </section>
    </>
  );
}
