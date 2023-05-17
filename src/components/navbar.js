import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import NavItem from "./navbaritem.js";
import logo from '../../public/images/logo.png'
import { useRouter } from "next/router.js";


const NavBar = ({loadingState}) => {

  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  const router = useRouter()

  const [catgories, setCategories] = useState([])

  const fetchData = () => {

    loadingState(true)

    const query = `
        query {
            categories {
              id  
              name
              categories_product{
              title
            }
            }
          }
        `;

        const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
        };

        fetch(process.env.baseUrl, options)
        .then(response => response.json())
        .then(data => {
          setCategories(data.data.categories);
          loadingState(false)
        });
  }

  useEffect(() => {
    if(catgories.length < 1){
      fetchData();
    }
  }, []);

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
          {catgories.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.name}
            >
              <NavItem category={menu} href={`/category/${menu.id}/category`} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default NavBar