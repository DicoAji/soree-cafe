import Menu1 from "./../../../public/img/menu-1.png";
import Menu2 from "./../../../public/img/menu-2.png";
import Menu3 from "./../../../public/img/menu-3.png";
const SignatureMenu = () => {
  return (
    <>
      <div className="mx-auto md:max-w-[75%] relative">
        <div className="grid md:grid-cols-2 grid-cols-1 max-sm:space-y-[40px] z-10 relative">
          <div className="space-y-[30px] ">
            <p className="text-[16px] text-[#3C5049] dark:text-[#A1A1A1] sm:tracking-[4px]">
              A progression of rare and beautiful ingrediens where texture,
              flavour, and harmony is paramount.
            </p>
            <button className="bg-[#3C5049] text-white px-[21px] py-[6px] uppercase dark:bg-white dark:text-[#3C5049]">
              Get Menu
            </button>
          </div>
          <h2 className="text-[48px] max-sm:text-[44px] text-right md:ml-auto md:-translate-x-[20px] w-[80%] text-white dark:text-[#A1A1A1] max-md:text-[#003D23] max-md:text-left">
            —Let’s talk about our Signature Menu
          </h2>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 mt-[40px] z-10 relative">
          <div className="p-2">
            <img
              src={Menu1}
              className="border-[3px] mx-auto  border-green-400"
              alt=""
            />
          </div>
          <div className="p-2">
            <img
              src={Menu2}
              className="border-[3px] mx-auto md:translate-y-[15%] border-green-400"
              alt=""
            />
          </div>
          <div className="p-2">
            <img
              src={Menu3}
              className="border-[3px] mx-auto md:translate-y-[30%] border-green-400"
              alt=""
            />
          </div>
        </div>
        <div className="absolute bg-[#456658] dark:bg-white md:w-[547px] md:h-[752px] right-0 top-0 z-0 md:-translate-y-[10%]"></div>
      </div>
    </>
  );
};

export default SignatureMenu;
