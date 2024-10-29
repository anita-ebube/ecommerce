import { useState } from "react";
import { CiHeart, CiLogout, CiMenuFries, CiStar, CiUser } from "react-icons/ci";
import { LiaTimesCircle, LiaTimesSolid } from "react-icons/lia";
//import TopHeader from "./TopHeader";
import { PiShoppingBagThin, PiShoppingCartThin } from "react-icons/pi";
import { GoSearch } from "react-icons/go";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openUserMenu, setOpenUserMenu] = useState(false);

  return (
    <div className="sticky z-20 top-0 flex flex-col md:hidden w-full">
      <div className=" bg-white  flex justify-between px-3 p-3 items-center border-b border-b-text1/20">
        <div className="font-semibold text-button text-xl whitespace-nowrap ">
          Exclusive Store
        </div>
        <div className="flex gap-3 items-center">
          <button onClick={() => setOpenSearch(!openSearch)}>
            {!openSearch ? (
              <GoSearch className="h-6 w-6 hover:text-secondary2 cursor-pointer" />
            ) : (
              <LiaTimesSolid className="h-6 w-6" />
            )}
          </button>

          <Link to="/cart">
            <PiShoppingCartThin className="h-6 w-6 hover:text-secondary2 cursor-pointer" />
          </Link>
          <Link to="/account">
            <button
              className=" flex items-center"
              onClick={() => setOpenUserMenu(!openUserMenu)}
            >
              <CiUser className="h-6 w-6 hover:text-secondary2 cursor-pointer" />
            </button>
          </Link>
          <button onClick={() => setOpenMenu(!openMenu)}>
            {!openMenu ? (
              <CiMenuFries className="h-6 w-6" />
            ) : (
              <LiaTimesSolid className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      <div className="flex justify-center">{openSearch && <SearchBar />}</div>
      {openMenu && <Nav closeMenu={() => setOpenMenu(false)} />}
      {openUserMenu && (
        <UserDropDown closeMenu={() => setOpenUserMenu(false)} />
      )}
    </div>
  );
};

export default MobileNav;

function Nav({ closeMenu }) {
  return (
    <div className="fixed inset-0 z-50 flex justify-center bg-black bg-opacity-50 pt-10">
      <div className="relative bg-white w-full max-w-md rounded-lg p-6 shadow-lg max-h-[50%] overflow-y-auto items-center flex justify-center text-center">
        <button className="absolute top-4 right-4 text-xl" onClick={closeMenu}>
          <LiaTimesSolid className="h-6 w-6" />
        </button>
        <ul className="flex flex-col gap-4 text-lg font-light">
          <Link to="/">
            <li className="hover:text-secondary2 cursor-pointer">Home</li>
          </Link>
          <Link to="/contact">
            <li className="hover:text-secondary2 cursor-pointer">Contact Us</li>
          </Link>
          <Link to="/signup">
            <li className="hover:text-secondary2 cursor-pointer">Create an account</li>
          </Link>
          <Link to="/shop">
            <li className="hover:text-secondary2 cursor-pointer">Shop</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}


