import Header3 from "./../../../public/img/header-3.png";
import BlurOrange from "./../../../public/img/blur-orange.svg";
const Booking = () => {
  return (
    <>
      <div className="md:max-w-[75%] grid md:grid-cols-2 grid-cols-1 md:pt-[150px] relative max-sm:flex max-sm:flex-col-reverse">
        <div className="relative max-sm:pt-[100px]">
          <img
            src={Header3}
            className="rounded-br-[50%] md:w-[507px] relative z-10"
            alt=""
          />
          <div className="absolute w-[351.54px] z-0 border-[3px] border-[#C3A25D] rounded-br-[60%] -z-10 h-[502px] bottom-0 translate-x-[200px] max-sm:translate-x-[90px] left-0 translate-y-[20px]"></div>
          <img
            src={BlurOrange}
            className="md:w-[835px] absolute z-0 left-0 top-0 -translate-y-1/2 "
            alt=""
          />
        </div>
        <div className="space-y-[40px] max-sm:pt-[80px] relative">
          <h2 className="text-[#3C5049] text-[56px] dark:text-[#A1A1A1] max-sm:text-[44px]">
            “Having an afternoon tea with best friend is all theraphy you need”
            - anonymous
          </h2>
          <p className="text-[#3C5049]  text-[16px] dark:text-[#A1A1A1]">
            Imagine having a quality time with your family and friend in a
            comfortable and fully aesthetic place where you can taste various
            asian fusion food and a finest beans coffee.
          </p>
          <button className="bg-[#3C5049] text-white px-[21px] py-[6px] uppercase dark:bg-white dark:text-[#3C5049]">
            Book now
          </button>
        </div>
      </div>
    </>
  );
};

export default Booking;
