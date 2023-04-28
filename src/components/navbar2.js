import Link from 'next/link';
import { useRef, useState } from 'react';

const Navbar2 = () => {
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
      <nav className="flex flex-row items-center justify-between bg-gray-900 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link href="/">
            <p className="font-semibold text-xl tracking-tight">My Website</p>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto`}>
          <div className="text-sm lg:flex-grow">
            <Link href="/">
              <p className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white mr-4">
                Home
              </p>
            </Link>
            <Link href="/about">
              <p className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white mr-4">
                About
              </p>
            </Link>
            <div className="relative inline-block text-left">
              <button
                className="mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white mr-4"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Dropdown
              </button>
              <div
                ref={dropdownRef}
                className={`${
                  showDropdown ? '' : 'hidden'
                } absolute z-50 mt-2 w-48 rounded-md shadow-lg bg-gray-800`}
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
              <Link href="/dropdown-item1">
                <p className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                  Dropdown item 1
                </p>
              </Link>
              <Link href="/dropdown-item2">
                <p className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                  Dropdown item 2
                </p>
              </Link>
              <Link href="/dropdown-item3">
                <p className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                  Dropdown item 3
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;