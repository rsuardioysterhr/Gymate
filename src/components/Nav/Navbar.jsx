import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../../images/logo/logo.svg";
import NavList, { links, NavItem } from "../Nav/NavList";
import { Link } from "react-router-dom";
import LogoSide from "../../images/logo/logo-footer.svg";
import SideImg1 from "../../images/sidebar/1.jpg";
import SideImg2 from "../../images/sidebar/2.jpg";
import SideImg3 from "../../images/sidebar/3.jpg";
import SideImg4 from "../../images/sidebar/4.jpg";
import SideImg5 from "../../images/sidebar/5.jpg";
import SideImg6 from "../../images/sidebar/6.jpg";

const sideImages = [SideImg1, SideImg2, SideImg3, SideImg4, SideImg5, SideImg6]

function Navbar() {
  const { pathname } = useLocation();
  const [spin, setSpin] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [sidebar, setSideBar] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  window.addEventListener("scroll", () => setSticky(window.scrollY > 10));

  useEffect(() => {
    setHamburger(false);
  }, [pathname]);

  // sidebar
  const sideBar = () => {
    setSideBar(!sidebar);
  };

  return (
    <>
      <nav
        className={`flex flex-row bg-transparent items-center justify-between py-8 px-12  fixed top-0 left-0 right-0 w-full z-50 ${sticky && "shadow-xl !bg-black"
          }`}
      >
        <Link to="/">
          <img
            src={Logo}
            alt="logo_img"
            className="w-full h-auto"
          />
        </Link>
        <div className="navlist-nav">
          {!hamburger && <NavList />}
        </div>
        <div className="flex items-center gap-10">
          <div className="flex gap-10">
            {/* mobile menu -------------- */}

            {/* hamburger menu */}
            <div
              className={`flex top-0 flex-col fixed w-full left-0 h-screen bg-white z-[9999999999] py-[60px] px-[40px] ease-in-out duration-500  ${hamburger ? "left-0" : "-left-[100%]"
                }`}
            >
              <i
                onClick={() => setHamburger(false)}
                className="fa-solid fa-xmark text-[#ff0336] text-[3.3rem] cursor-pointer self-end"
              ></i>

              {/* links */}
              <ul className="text-center flex flex-col gap-10 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                {links.map(({ name, url }, index) => (
                  <NavItem
                    key={index}
                    name={name}
                    url={url}
                    isMobile={true}
                    className={"text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"}
                  />
                ))}
              </ul>
            </div>

            {/* sidebar */}

            <div>
              <div
                className={`flex flex-col fixed w-[40rem] min450:w-full h-[100vh] bg-white top-0 left-0 z-[9999999999] p-[45px] gap-24 overflow-x-hidden ease-in-out duration-[0.5s] ${sidebar ? "left-0" : "-left-[100%]"
                  }`}
              >
                {/* logo & X */}
                <div className="flex justify-between items-center">
                  <img src={LogoSide} alt="logo_img" className="w-[13rem]" />
                  <i
                    onClick={sideBar}
                    className="fa-solid fa-xmark text-[#ff0336] text-[3.3rem] cursor-pointer"
                  ></i>
                </div>
                {/* about us */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-[2rem] font-bold">About Us</h3>
                  <p className="text-[1.6rem] font-medium text-[#000000b1]">
                    Find out who we are and what makes us unique. We are a
                    community-driven gym committed to providing personalized
                    fitness experiences for all levels of fitness enthusiasts in
                    a welcoming and supportive environment.
                  </p>
                </div>
                {/* gallery */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-[2rem] font-bold">Gallery</h3>
                  <div className="grid grid-cols-3 grid-rows-2 gap-4">
                    {sideImages.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt="sidebar_gallery"
                        className="rounded-xl cursor-pointer "
                      />
                    ))}
                  </div>
                </div>
                {/* contact */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-[2rem] font-bold">Contact Info</h3>
                  <p className="text-[1.6rem] font-medium text-[#000000b1] hover:text-[#ff0336] cursor-pointer ease-in duration-200">
                    <i className="fa-solid fa-location-dot text-[#ff0336]"></i>
                    &nbsp; 59 Street, House Newyork City
                  </p>
                  <p className="text-[1.6rem] font-medium text-[#000000b1] hover:text-[#ff0336] cursor-pointer ease-in duration-200">
                    <i className="fa-solid fa-phone text-[#ff0336]"></i>&nbsp;
                    +123-678800090
                  </p>
                  <p className="text-[1.6rem] font-medium text-[#000000b1] hover:text-[#ff0336] cursor-pointer ease-in duration-200">
                    <i className="fa-solid fa-envelope text-[#ff0336]"></i>
                    &nbsp; gymate@gymail.com
                  </p>
                </div>
                {/* follow us */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-[2rem] font-bold">Follow Us</h3>
                  <div className="flex gap-5">
                    <span className="bg-[#ff0336] rounded-full py-[12px] px-[17px] cursor-pointer">
                      <i className="fa-brands fa-facebook-f text-[2.2rem] text-white"></i>
                    </span>
                    <span className="bg-[#ff0336] rounded-full py-[12px] px-[12px] cursor-pointer">
                      <i className="fa-brands fa-twitter text-[2.2rem] text-white"></i>
                    </span>
                    <span className="bg-[#ff0336] rounded-full py-[10px] px-[13px] cursor-pointer">
                      <i className="fa-brands fa-instagram text-[2.2rem] text-white"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* hamburger */}
            <i onClick={() => setHamburger(true)}
              className="fa-bars fa-solid hidden text-white text-4xl cursor-pointer hover:text-[#FF0336] ease-in duration-200"
            ></i>
            {/* account */}
            <Link to="/signup" title="signup_button">
              <i className="fa-regular fa-user  text-white text-4xl cursor-pointer hover:text-[#FF0336] ease-in duration-200"></i>
            </Link>
            {/* sidebar */}
            <i
              onClick={sideBar}
              className="fa-regular fa-chart-bar text-white text-4xl cursor-pointer hover:text-[#FF0336] ease-in duration-200"
            ></i>
          </div>
          {/* spin box */}
          <div className="border-[rgb(255,255,255,0.3)] border-solid border-2  p-2 rounded-md min620:hidden">
            <Link
              to={"/contact"}
              onMouseEnter={() => setSpin(true)}
              onMouseLeave={() => setSpin(false)}
              className="flex items-center "
            >
              <i
                className={`fa-solid fa-plus bg-[#FF0336] text-white text-2xl py-3 px-4 rounded-md ${spin ? "nav-btn-hover" : ""
                  }`}
              ></i>
              <h3 className="text-white text-[14px] font-bold uppercase ml-4 mr-8 tracking-wider">
                join class now
              </h3>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
