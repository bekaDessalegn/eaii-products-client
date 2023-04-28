import Link from "next/link";
import { useRouter } from 'next/router'
import { useRef, useState } from "react";
import { AiOutlineDown } from 'react-icons/ai'

const NavItem = ({ text, href }) => {
  const router = useRouter()
  
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setShowDropdown(false), 300);
  };

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleDropdownMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setShowDropdown(false), 300);
  };

  return (
    <Link href={href}>
      <div 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex flex-row justify-center items-center text-secondaryColor">
      <div
        className={`nav__item ${
          router.pathname === href ? "active" : ""
        }`}
      >
        {text}
      </div>
      <AiOutlineDown className="ml-1 mt-1 h-4 w-4 text-secondaryColor"/>
      </div>
      <div
          ref={dropdownRef}
          className={`${
            showDropdown ? '' : 'hidden'
          } absolute z-50 mt-2 w-48 rounded-md shadow-lg bg-white`}
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleDropdownMouseLeave}
        >
        <Link href="/dropdown-item1">
          <div className="block px-4 py-2 text-sm text-secondaryColor hover:text-primaryColor">
            Dropdown item 1
          </div>
        </Link>
        <Link href="/dropdown-item2">
          <div className="block px-4 py-2 text-sm text-secondaryColor hover:text-primaryColor">
            Dropdown item 2
          </div>
        </Link>
        <Link href="/dropdown-item3">
          <div className="block px-4 py-2 text-sm text-secondaryColor hover:text-primaryColor">
            Dropdown item 3
          </div>
        </Link>
      </div>
    </Link>
  );
};

export default NavItem;