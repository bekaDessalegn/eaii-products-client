import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./navbaritem.js";
import logo from '../../public/images/logo.png'
import NavDropDown from "./navdropdown.js";
import { useRouter } from "next/router.js";

const MENU_LIST = [
    { text: "Home", href: "/" },
    { text: "Admins", href: "/admins" },
    { text: "Products", href: "/products" },
    { text: "Categories", href: "/categories" },
  ];

const NavBar = () => {

  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  const router = useRouter()

  return (
    <header>
      <nav className={`nav`}>
        <div className="flex flex-row justify-center items-center">
        <Link href={"/"}>
            <Image src={logo} width={70} height={70} />
        </Link>
        <div className="w-3"></div>
        <p className="text-secondaryColor text-xl font-medium">Ethiopian Artificial Intelligence Institue</p>
        </div>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
        <Link href='/'>
      <div
        className={`nav__item ${
          router.pathname === '/' ? "active" : ""
        }`}
      >
        Home
      </div>
    </Link>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <Link href='/category'><NavItem text='Health' href='/category' /></Link>
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default NavBar