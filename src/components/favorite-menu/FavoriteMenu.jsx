import Header2 from "./../../../public/img/header-2.png";
import BlurGreen from "./../../../public/img/blur-green.svg";
const FavoriteMenu = () => {
  return (
    <>
      <div className="relative w-full py-[200px] ">
        <h1 className="text-[#ECEEED] absolute right-0 top-0 md:-translate-y-1/2 md:text-[280px] dark:text-[#044D2E] text-[150px]">
          Pride
        </h1>
        <div className="mx-auto md:max-w-[75%] grid md:grid-cols-2 grid-cols-1 max-sm:space-y-[50px] ">
          <div className="space-y-[40px] my-auto">
            <h2 className="text-[54px] text-[#2A3833] max-sm:text-[44px] dark:text-[#A1A1A1] -mb-1 w-[80%]">
              Choose your Favorite Coffee
            </h2>
            <p className="text-[16px] text-[#3C5049] dark:text-[#A1A1A1] sm:tracking-[4px]">
              Our current beans line up for filter coffee. We will add new
              selection for the guest beans. Keep you guys updated on this page.
            </p>
            <button className="bg-[#3C5049] dark:bg-white dark:text-[#3C5049] text-white px-[21px] py-[6px] uppercase">
              LEARN MORE
            </button>
          </div>
          <div className="w-full relative">
            <img
              src={Header2}
              className="md:ml-auto rounded-b-full border-green-300 border-solid border-[3px] md:w-[466.24px] md:h-[554.95px]"
              alt=""
            />
            <div className="absolute right-0 -translate-x-[10%] top-0 -translate-y-[10%] rounded-b-full border-[#C3A25D] border-solid border-[3px] md:w-[466.24px] md:h-[554.95px]"></div>
          </div>
        </div>
        <h1 className="text-[#D5D7D6] absolute left-0 bottom-0  md:text-[200px] text-[150px] dark:text-[#044D2E]">
          Asian
        </h1>
        <img
          src={BlurGreen}
          className="md:w-[835px] w-full absolute right-0 bottom-0 md:translate-y-1/4 "
          alt=""
        />
      </div>
    </>
  );
};

export default FavoriteMenu;
