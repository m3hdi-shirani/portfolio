import Image from "next/image";

const Homepage = () => {
  return (
    <div className="flex flex-col lg:flex-row h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* Image */}
      <div className="relative h-1/2 lg:h-full lg:w-1/2">
        <Image src="/hero.png" alt="" fill className="object-contain" />
      </div>
      {/* Text */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col items-center justify-center gap-8">
        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-bold">
          Crafting Digital Experiences, Designing Tomorrow.
        </h1>
        {/* DESC */}
        <p className="">
          Welcome to my digital canvas, where innovation and creativity
          converge. With a keen eye for aesthetics and a mastery of code, my
          portfolio showcases a diverse collection of projects that reflect my
          commitment to excellence.
        </p>
        {/* BUTTONS */}
        <div className="flex gap-4 w-full">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
            View My Work
          </button>
          <button className="p-4 rounded-lg ring-1 ring-black">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
