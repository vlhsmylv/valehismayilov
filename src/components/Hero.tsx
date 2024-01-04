import { me } from "../assets";

const Hero = () => {
  return (
    <section
      id="about"
      className="grid lg:grid-cols-2 grid-cols-1 border-x-[4px] border-black"
    >
      <div className="lg:order-first order-last bg-[#FDFD96] flex flex-col justify-center h-[500px] gap-8 font-semibold py-14 lg:px-20 px-7 lg:border-r-[4px] lg:border-b-0 border-black">
        <div className="text-6xl">Hello! 👋</div>
        <div className="text-xl">My name is Valeh</div>
        <div className="text-lg">I am a...</div>
        <div>
          <a
            target="_blank"
            href="https://linkedin.com/in/vismayilov"
            className="external text-xl max-w-[350px] ease-in-out duration-100 shadow rounded-md flex w-full p-2 text-black shadow-black border-2 border-black bg-[#FFA07A]"
          >
            <div className="w-full flex justify-center items-center gap-2">
              <i className="bx bxl-linkedin-square text-3xl"></i>{" "}
              <span>Full-stack Web Developer</span>
            </div>
          </a>
        </div>
        <div className="mt-2 font-[500]">
          with good leadership and teamwork skills based in Baku, Azerbaijan 📍
        </div>
      </div>
      <div className="lg:border-b-[0px] border-b-[4px] border-b-black h-[500px] bg-[#BAFCA2] flex justify-center items-center">
        <div className="ease-in-out duration-100 border-2 border-black shadow-unset-hover bg-[#FFDB58] z-10 w-[320px] h-[370px] flex flex-col gap-10 justify-center">
          <img
            src={me}
            alt="Valeh Ismayilov"
            width={220}
            height={220}
            className="border-[4px] border-black mx-auto"
          />
          <div className="cursor-default font-semibold text-xl text-center">
            Valeh Ismayilov
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
