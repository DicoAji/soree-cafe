import { useState, useEffect } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "./../../../public/img/logo.png";
import Logo2 from "./../../../public/img/logo-dark.png";
import lamp from "./../../../public/img/lamp.svg";
import lampDark from "./../../../public/img/lamp-dark.svg";
import "./navbar.css";

const navigation = [
  { name: "Home", href: "#home", current: false },
  { name: "Menu", href: "#menu", current: false },
  { name: "Facility", href: "#facility", current: false },
  { name: "Reservation", href: "#reservation", current: false },
];

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto md:max-w-[75%]">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="relative inline-flex items-center justify-center p-2">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block h-6 w-6 text-[#3C5049] dark:text-[#A1A1A1]"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-6 w-6 text-[#3C5049] dark:text-[#A1A1A1]"
                      aria-hidden="true"
                    />
                  )}
                </DisclosureButton>
              </div>
              <div className="absolute right-0 -translate-x-[10px] sm:hidden">
                <button onClick={toggleDarkMode} className="flex items-center ">
                  <img
                    src={isDarkMode ? lampDark : lamp}
                    alt="Lamp Icon"
                    className="h-8 w-8 "
                  />
                </button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <img src={Logo} alt="" className="h-[30px] dark:hidden" />
                  <img
                    src={Logo2}
                    alt=""
                    className="h-[30px] hidden dark:block"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-[40px] text-[#388878] text-[16px] font-light">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="tracking-[0.64px] menu_nav py-[5px]"
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                    <button
                      onClick={toggleDarkMode}
                      className="flex items-center "
                    >
                      <img
                        src={isDarkMode ? lampDark : lamp}
                        alt="Lamp Icon"
                        className="h-8 w-8 "
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-1 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="text-[#388878] hover:bg-[#456658] hover:text-white text-[16px] text-center tracking-[0.64px] block px-2 py-1  font-light"
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
