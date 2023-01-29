
import { useNavigate } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import { useState, useContext } from "react";
// import { RegistrationOpenContext } from "../../";
// import { BsWhatsapp } from "react-icons/bs";
// import { WhatsappModal } from "../social";

const Header = () => {
//   const { registration } = useContext(RegistrationOpenContext);

  const [burgerNav, setBurgerNav] = useState(false);

  const burgerNavController = () => {
    document.querySelector("html").style.overflowY = !burgerNav
      ? "hidden"
      : "auto";
    setBurgerNav(!burgerNav);
  };

  const handleNavItemClick = (path) => {
    document.getElementById(path);
  };

  const handleBurgerNavItemClick = (path) => {
    document.getElementById(path);
    burgerNavController();
  };

  const navItems = [
    {
      name: "Home",
      path: "Home",
    },
    {
      name: "Contact",
      path: "Contact",
    },
  ];

  return (
    <div>
    <div
      className={`w-full flex flex-col md:flex-row justify-between items-center bg-black/70 p-5 py-4 fixed top-0 z-50 backdrop-blur-[5px] border-b border-white/10`}
    >
      <div className="w-full md:w-5/12 pl-2 md:pl-12">
        
      </div>
      <div className="hidden lg:flex justify-between items-center w-full max-w-4xl">
        {navItems.map((item) => {
          return (
            <div>
              <span
                className="px-2 text-nav-links-unselected hover:text-primary transition duration-300 cursor-pointer"
                onClick={() => handleNavItemClick(item.path)}
              >
                {item.name}
              </span>
            </div>
          );
        })}
      
      </div>
      <HiOutlineMenu
        className="fixed top-0 h-8 w-8 text-white right-1 lg:hidden mt-[0.8rem] lg:mt-4 mr-4 lg:mr-2 cursor-pointer"
        onClick={burgerNavController}
      />
    </div>
    <div>
      <nav
        className={`h-full w-full flex items-center fixed top-0 left-0 z-50 ${burgerNav ? "pointer-events-auto" : "pointer-events-none opacity-0"
          } bg-black/50 backdrop-blur-2xl transition duration-300`}
      >
        <IoIosClose
          className="fixed top-0 right-0 z-[60] h-14 w-14 text-white mt-2 mr-2 lg:hidden cursor-pointer"
          onClick={burgerNavController}
        />
        <ul className=" mr-auto w-full h-full flex-col flex items-center uppercase justify-center p-8 lg:hidden">
          <li className="h-full flex flex-col justify-between py-20">
            {navItems.map((item) => {
              return (
                <div className="w-full flex flex-col justify-center items-center">
                  <a
                    className="w-full text-white hover:text-primary text-center transition duration-300"
                    onClick={() => handleBurgerNavItemClick(item.path)}
                  >
                    {item.name}
                  </a>
                </div>
              );
            })}
          </li>
        </ul>
      </nav>
    </div>
    <div className="hidden lg:flex w-full h-[0.25px] bg bg-nav-links-unselected opacity-20"></div>
  </div>
  );
};

export default Header;
