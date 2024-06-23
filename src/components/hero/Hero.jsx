import Header1 from "./../../../public/img/header-1.png";

const Hero = () => {
  return (
    <>
      <div className="w-full relative">
        <div className="content mx-auto md:max-w-[75%] w-full z-50 relative">
          <div className="grid md:grid-cols-2 grid-cols-1  max-sm:flex max-sm:flex-col-reverse relative z-10">
            <div className="w-full text-center max-sm:mt-[40px]">
              <img
                src={Header1}
                className="rounded-t-full md:-translate-x-[30px] md:w-[455px] md:h-[455px] w-full h-full border-solid border-[3px] border-green-400"
                alt=""
              />
            </div>
            <div className="h-full max-sm:h-fit flex items-center  ">
              <div className="my-auto h-fit ">
                <p className="text-[#456658] dark:text-[#D9D9D9] tracking-[0.6px] italic font-bold text-[20px]">
                  Modern Asian & Specialty Coffee
                </p>
                <h2 className="text-[54px] text-black -mb-1 dark:text-[#A1A1A1] max-sm:text-[44px]">
                  We welcome you to Savor the Flavor of The World
                </h2>
                <p className="text-[16px] text-[#3C5049] dark:text-[#A1A1A1]">
                  Get ready to taste our take on Modern Asian menu. Indulge your
                  tastebud with the burst of flavour.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-md:hidden w-[459px] h-[459px] absolute left-0 bottom-0 translate-y-[15%] bg-[#3C5049] dark:bg-white z-0 "></div>
      </div>
    </>
  );
};

export default Hero;
