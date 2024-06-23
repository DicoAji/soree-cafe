import "./App.css";
import HeaderComponent from "./components/navbar/Navbar";
import HeroComponent from "./components/hero/Hero";
import FavoriteMenuComponent from "./components/favorite-menu/FavoriteMenu";
import SignatureMenuComponent from "./components/signature-menu/SignatureMenu";
import BookingComponent from "./components/booking/Booking";
import TestimoniComponent from "./components/testimoni/Testimoni";

function App() {
  return (
    <>
      <div className="space-y-[100px] max-sm:space-y-[50px] max-w-[1990px] mx-auto bg-white dark:text-[#A1A1A1] dark:bg-[#003D23] overflow-x-auto ">
        <HeaderComponent />
        <HeroComponent />
        <FavoriteMenuComponent />
        <SignatureMenuComponent />
        <BookingComponent />
        <TestimoniComponent />
      </div>
    </>
  );
}

export default App;
