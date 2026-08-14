import {useState} from "react";
import {FiMenu, FiX} from "react-icons/fi";
import {NavLink} from "react-router-dom";
import Logo from "../../assets/logo.jpg";

const navItems = [
  {title: "صفحه اصلی", path: "/"},
  {title: "خدمات", path: "/services"},
  {title: "پروژه ها", path: "/project"},
  {title: "درباره شرکت", path: "/about"},
  {title: "گالری", path: "/gallery"},
  {title: "سوالات متداول", path: "/?to=faq-section"},
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className=" sticky top-0 left-0 z-50 w-full md:border-b   text-[#050505]  bg-white">
      <nav
        dir="rtl"
        className="mx-auto flex h-[70px] w-full max-w-[1440px] items-center justify-between px-5 lg:px-8"
      >
        {/* Logo */}
        <NavLink
          to="/"
          className="flex shrink-0 items-center gap-2"
          onClick={() => setIsMenuOpen(false)}
        >
          {/* Logo */}
          <div className="flex h-[52px] w-[62px] shrink-0 items-center justify-center ">
            <img src={Logo} alt="بامیکا نیرو" className="h-full w-full " />
          </div>
          <div className="text-right leading-tight">
            <h1 className="text-[18px] font-bold text-white">بامیکا نیرو</h1>

            <p className="text-[8px] font-medium text-gray-500">
              شرکت ریخته گری بامیکا نیرو
            </p>

            <p className="text-[7px] text-gray-500">
              Bamika Nero Casting Company
            </p>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({isActive}) =>
                `relative py-6 text-[14px] font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-[#D4A72C]"
                    : "text-black hover:text-[#D4A72C]"
                }`
              }
            >
              {({isActive}) => (
                <>
                  {item.title}

                  {isActive && (
                    <span className="absolute bottom-0 right-0 h-[2px] w-full bg-[#D4A72C]" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Desktop Contact */}
        <div className="hidden md:flex">
          <NavLink
            to="/contact"
            className="flex h-[40px] items-center justify-center rounded-[4px] bg-[#D4A72C] px-6 text-[13px] font-medium text-black transition-all duration-200 hover:bg-[#e4ba48]"
          >
            تماس با ما
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-10 items-center justify-center text-black transition-colors hover:text-[#D4A72C] md:hidden"
          aria-label="باز کردن منو"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          dir="rtl"
          className="border-t  text-[#050505] bg-white px-5 pb-5 md:hidden"
        >
          <div className="flex flex-col">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={({isActive}) =>
                  `border-b  py-4 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[#D4A72C]"
                      : "text-[#050505] hover:text-[#D4A72C]"
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}

            {/* Mobile Contact */}
            <NavLink
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 flex h-[42px] items-center justify-center rounded-[4px] bg-[#D4A72C] text-sm font-medium text-black"
            >
              تماس با ما
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
