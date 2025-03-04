import { useState } from "react";
import { Globe, MenuIcon, XIcon } from "lucide-react";
import { Link, useNavigate } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { title: "Contact Us", link: "/contact-us" },
    // { title: "About Us", link: "/about-us" },
    { title: "FAQ", link: "/faq" },
  ];

  const navigate = useNavigate()
  return (
    <nav className="relative w-full">
      <div className="w-full h-[70px] p-6 flex items-center justify-between md:px-10">
        <div className="w-1/2 flex items-center justify-start gap-2.5">
          <Globe color="#7F56D9" size={23} />
          <p  onClick={()=>{
            navigate("/")
          }} className="text-primary font-bold text-[24px] cursor-pointer">Nicholas Blog</p>
        </div>

        {/* Mobile menu button */}
        <div className="w-1/2 flex items-center justify-end lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? (
              <XIcon color="black" size={24} />
            ) : (
              <MenuIcon color="black" size={24} />
            )}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="w-1/2 hidden lg:block">
          <ul className="w-full flex items-center justify-end gap-3.5">
            {links.map(({ link, title }) => (
              <li key={title}>
                <Link
                  className="text-primary cursor-pointer font-medium transition duration-300 ease-in-out hover:underline"
                  to={link}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile navigation menu */}
      <div
        className={`lg:hidden absolute top-[70px] right-0 left-0 bg-white shadow-md transform transition-all duration-300 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
          }`}
      >
        <ul className="flex flex-col items-center gap-4 py-4">
          {links.map(({ link, title }) => (
            <li key={title}>
              <Link
                className="text-primary cursor-pointer font-medium transition duration-300 ease-in-out hover:underline"
                to={link}
                onClick={() => setIsOpen(false)}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
