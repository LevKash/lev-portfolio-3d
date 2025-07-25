// src/components/layout/Navbar.tsx
import { useEffect, useState } from "react";
import { Link }                     from "react-router-dom";
import { styles }                   from "../../constants/styles";
import { navLinks }                 from "../../constants/navLinks";
import { logo, menu, close }        from "../../assets";
import { config }                   from "../../constants/config";

const Navbar: React.FC = () => {
  const [active, setActive]   = useState<string>("");
  const [toggle, setToggle]   = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (id === "") return window.scrollTo({ top: 0, behavior: "smooth" });
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
    setToggle(false);
  };

  return (
    <nav
      className={`${styles.paddingX} fixed top-0 w-full z-50 flex items-center py-5 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        {/* logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => scrollTo("")}
        >
          <img src={logo} alt="logo" className="h-9 w-9 object-contain" />
          <p className="text-white font-bold text-[18px] cursor-pointer">
            {config.html.fullName}
          </p>
        </Link>

        {/* desktop nav */}
        <ul className="hidden sm:flex flex-row gap-8">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`cursor-pointer text-[16px] font-medium ${
                active === nav.id ? "text-white" : "text-secondary"
              } hover:text-white`}
              onClick={() => scrollTo(nav.id)}
            >
              {nav.title}
            </li>
          ))}
        </ul>

        {/* mobile menu */}
        <div className="sm:hidden flex items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-6 h-6 object-contain"
            onClick={() => setToggle(!toggle)}
          />
          {toggle && (
            <div className="absolute top-16 right-4 bg-tertiary p-4 rounded-lg">
              <ul className="flex flex-col gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`cursor-pointer text-[16px] font-medium ${
                      active === nav.id ? "text-white" : "text-secondary"
                    } hover:text-white`}
                    onClick={() => scrollTo(nav.id)}
                  >
                    {nav.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
