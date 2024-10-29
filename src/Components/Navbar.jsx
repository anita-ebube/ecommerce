import { CiLogout, CiStar, CiUser } from "react-icons/ci";
import SearchBar from "./SearchBar";
import { PiShoppingBagThin, PiShoppingCartThin } from "react-icons/pi";
import { useState } from "react";
import { LiaTimesCircle, LiaTimesSolid } from "react-icons/lia";
import { Link, useLocation } from "react-router-dom";
import { auth } from "./firebase";

const NavBar = () => {
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const location = useLocation();

  const menuItems = [
    { label: "Home", to: "/" },
    { label: "Contact", to: "/contact" },
    { label: "Create an account", to: "/signup" },
    { label: "Shop", to: "/shop" },
  ];

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
    } catch (error) {
      console.error("Error Logging Out", error.message);
    }
  }
  return (
    <div className=" md:flex flex-col hidden w-full sticky top-0 bg-white z-20">

      <div className=" flex justify-around p-3 items-center border-b border-b-text1/20">
        <div className=" font-semibold text-button text-2xl whitespace-nowrap">
          Food Trove
        </div>
        <div className=" ">
          <ul className="flex gap-9 font-light">
            {menuItems.map((item) => (
              <Link key={item.label} to={item.to}>
                <li
                  className={`${
                    location.pathname === item.to
                      ? "text-text2 border-b-2  border-b-text1 whitespace-nowrap"
                      : " hover:text-secondary2 whitespace-nowrap"
                  }`}
                >
                  {item.label}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className=" flex gap-5 items-center">
          <SearchBar />
          <Link to="/cart">
            <PiShoppingCartThin className=" h-6 w-6 hover:text-secondary2 cursor-pointer" />
          </Link>
          <button
            className=" hover:text-secondary2"
            onClick={() => setOpenUserMenu(!openUserMenu)}
          >
            <CiUser className=" h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;


