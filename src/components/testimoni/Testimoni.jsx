const Testimoni = () => {
  return (
    <>
      <div className="bg-[#003D23] dark:bg-white py-[50px] ">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-[56px] text-white  dark:text-[#3C5049] max-sm:text-[44px]">
            Some of Our Happy Customer
          </h2>
          <div className="h-[2px] mx-auto w-[100px] bg-white mt-[20px] "></div>
          <div className="grid md:grid-cols-3 gap-3 mt-[40px]">
            <div className="px-3 py-3 text-center h-full flex items-center bg-white dark:bg-[#3C5049]  dark:text-[#A1A1A1] text-[#3C5049] space-y-[10px] ">
              <div className="my-auto ">
                <p className="text-start text-[46px]">``</p>
                <p className="text-[16px] mb-1 tracking-[1.5px] mx-auto w-[80%]">
                  One of the best place to visit and hang out. Good service and
                  lot of spots to take a photo
                </p>
                <p className="italic mt-4">— Quinta Adelia</p>
                <p className="ml-auto text-end text-[46px]">``</p>
              </div>
            </div>
            <div className="px-3 py-3 text-center h-full flex items-center bg-white   dark:bg-[#3C5049]  dark:text-[#A1A1A1] text-[#3C5049] space-y-[20px]">
              <div className="">
                <p className="text-start text-[46px]">``</p>
                <p className="text-[16px] mb-1 tracking-[1.5px] mx-auto w-[80%]">
                  Cozy place with many instagrammable spots, but most
                  importantly excellent service and tasty food with reasonable
                  price
                </p>
                <p className="italic mt-4">— Natasya</p>
                <p className="ml-auto text-end text-[46px]">``</p>
              </div>
            </div>
            <div className="px-3 py-3 text-center h-full flex items-center bg-white  dark:bg-[#3C5049]   dark:text-[#A1A1A1] text-[#3C5049] space-y-[20px]">
              <div className="">
                <p className="text-start text-[46px]">``</p>
                <p className="text-[16px] mb-1 tracking-[1.5px] mx-auto w-[80%]">
                  This place where you can got a good atmosphere and good food,
                  the owner have good taste high enough
                </p>
                <p className="italic mt-4">— Yosina Ribkah Kalalo</p>
                <p className="ml-auto text-end text-[46px]">``</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
