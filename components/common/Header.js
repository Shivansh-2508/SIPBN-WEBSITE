import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const navRef = useRef(null);

  useEffect(() => {
    setActiveLink(router.pathname);

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [router.pathname]);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <header>
            <Link href='/'>
              <img
                className="sipLogo"
                src='https://res.cloudinary.com/dq23wxdum/image/upload/v1719265063/SIPBN/acssi7dnvshtv6u9igie.png'
                alt='logo'
                height={"60px"}
              />
            </Link>
      <div className='container'>
        <nav ref={navRef} className={open ? "openMenu" : "closeMenu"}>
          <Link
            href='/'
            onClick={handleLinkClick}
            className={activeLink === "/" ? "activeLink" : ""}>
            Home
          </Link>
          <Link
            href='/agency'
            onClick={handleLinkClick}
            className={activeLink === "/agency" ? "activeLink" : ""}>
            About
          </Link>
          <Link
            href='/team'
            onClick={handleLinkClick}
            className={activeLink === "/team" ? "activeLink" : ""}>
            CapTech 2024
          </Link>
          <Link
            href='/services'
            onClick={handleLinkClick}
            className={activeLink === "/services" ? "activeLink" : ""}>
            CapTech 2023
          </Link>
          <Link
            href='/showcase'
            onClick={handleLinkClick}
            className={activeLink === "/showcase" ? "activeLink" : ""}>
            Events
          </Link>
          <Link
            href='/contact'
            onClick={handleLinkClick}
            className={activeLink === "/contact" ? "activeLink" : ""}>
            Contact Us
          </Link>
          <button className='button-primary'>Apply for Membership</button>
        </nav>
        <button className='menu-toggle' onClick={() => setOpen(!open)}>
          {open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
