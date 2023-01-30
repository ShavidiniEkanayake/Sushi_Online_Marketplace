import { Link } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";

const Header = () => {
  const [burgerNav, setBurgerNav] = useState(false);

  const burgerNavController = () => {
    document.querySelector("html").style.overflowY = !burgerNav
      ? "hidden"
      : "auto";
    setBurgerNav(!burgerNav);
  };

  return (
    <div>
      <div
        className={`w-full flex flex-col md:flex-row justify-between items-center bg-blue-600 p-5 py-3 fixed top-0 z-50 backdrop-blur-[5px] border-b border-white/10 `}
      >
        <div className="w-full md:w-5/12 pl-2 md:pl-12"></div>
        <div className="hidden lg:flex justify-between items-center w-72 max-w-2xl">
          <div>
            <Link to="http://localhost:3000/vendor/dashboard">
              <span className="px-2 text-nav-links-unselected hover:text-primary transition duration-300 cursor-pointer text-white">
                Home
              </span>
            </Link>
          </div>

          <div>
            <Link to="http://localhost:3000/vendor/addProduct">
              <span className="px-2 text-nav-links-unselected hover:text-primary transition duration-300 cursor-pointer text-white">
                Add Cart
              </span>
            </Link>
          </div>

          <div>
            <Link to="http://localhost:3000/vendor/myProfile">
              <span className="px-2 text-nav-links-unselected hover:text-primary transition duration-300 cursor-pointer text-white">
                My Profile
              </span>
            </Link>
          </div>
        </div>
        <HiOutlineMenu
          className="fixed top-0 h-8 w-8 text-white right-1 lg:hidden mt-[0.8rem] lg:mt-4 mr-4 lg:mr-2 cursor-pointer"
          onClick={burgerNavController}
        />
      </div>
      <div>
        <nav
          className={`h-full w-full flex items-center fixed top-0 left-0 z-50 ${
            burgerNav ? "pointer-events-auto" : "pointer-events-none opacity-0"
          } bg-black/50 backdrop-blur-2xl transition duration-300`}
        >
          <IoIosClose
            className="fixed top-0 right-0 z-[60] h-14 w-14 text-white mt-2 mr-2 lg:hidden cursor-pointer"
            onClick={burgerNavController}
          />
          <ul className=" mr-auto w-full h-full flex-col flex items-center uppercase justify-center p-8 lg:hidden">
            <li className="h-full flex flex-col justify-between py-20">
              <div>
                <Link to="http://localhost:3000/vendor/addProduct">
                  <span className="px-2 text-nav-links-unselected hover:text-primary transition duration-300 cursor-pointer text-white">
                    Home
                  </span>
                </Link>
              </div>

              <div>
                <Link to="http://localhost:3000/vendor/addProduct">
                  <span className="px-2 text-nav-links-unselected hover:text-primary transition duration-300 cursor-pointer text-white">
                    Add Cart
                  </span>
                </Link>
              </div>

              <div>
                <Link to="http://localhost:3000/vendor/addProduct">
                  <span className="px-2 text-nav-links-unselected hover:text-primary transition duration-300 cursor-pointer text-white">
                    My Profile
                  </span>
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <div className="hidden lg:flex w-full h-[0.25px] bg bg-nav-links-unselected opacity-20"></div>
    </div>
  );
};

export default Header;
