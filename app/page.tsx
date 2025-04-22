import { HyperText } from "@/components/magicui/hyper-text";
import { Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <>
      <section
        className="w-full h-screen bg-cover bg-center sm:bg-fixed px-8"
        style={{ backgroundImage: 'url(\"/images/office.jpg\")' }}
      >
        <div className="container mx-auto h-screen flex items-center flex flex-col w-full">
          <div className="flex flex-col justify-center items-center gap-5 flex-1 ">
            <h1 className="text-4xl sm:text-7xl text-white uppercase font-bold cursor-default">
              Adrián Cendón
            </h1>
            <div className="text-white uppercase font-bold">
              <HyperText>FullStack Developer</HyperText>
            </div>
            <div className="flex justify-center items-center gap-5 text-white uppercase font-bold cursor-default">
              <a className="transform transition-transform duration-300 hover:scale-125" href="https://github.com/Cendon19" target="_blank"><Github /></a>
              <a className="transform transition-transform duration-300 hover:scale-125" href="https://www.linkedin.com/in/adri%C3%A1n-cend%C3%B3n-g%C3%B3mez-7a028519a/" target="_blank"><Linkedin /></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
