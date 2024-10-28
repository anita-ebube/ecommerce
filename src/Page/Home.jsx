import AllProduct from "../Components/AllProduct";
import BestSelling from "../Components/BestSelling.jsx";
import Feature from "../Components/Feature";
import Hero from "../Components/Hero";
// import NewArival from "../Components/Arrival";
import TodayProduct from "../Components/TodayProduct";
import Heroimg from "../assets/hero.png";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <TodayProduct />
      <div className=" flex justify-center">
        <hr className=" border-t border-text1/30 w-5/6" />
      </div>
      <BestSelling />
      <div className=" w-full flex justify-center md:h-96 h-48 p-2">
        <img src={Heroimg} alt="" className=" md:w-5/6 w-full" />
      </div>

      {/* <AllProduct />
      <NewArival />
      <Feature /> */}
    </div>
  );
};

export default HomePage;