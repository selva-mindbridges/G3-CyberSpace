"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuItem from "./MenuItem";
import { menus } from "../../../libs/menus";

const NavbarTwo: React.FC = () => {
  const [menu, setMenu] = useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId?.classList.add("is-sticky");
      } else {
        elementId?.classList.remove("is-sticky");
      }
    });
  });

  const mobileMenuClass = menu ? "hidden" : "block";
  const hamburgerClass = menu
    ? "flex flex-col gap-1.5 cursor-pointer"
    : "flex flex-col gap-1.5 cursor-pointer";

  return (
    <>
      <header className="relative">
        <div id="navbar" className="bg-white border-b border-gray-100 transition-all duration-300">
          <div className="w-full">
            <div className="container mx-auto">
              <nav className="flex items-center justify-between py-4">
                <Link href="/" className="flex-shrink-0">
                  <Image
                    src="/images/logo-01.png"
                    alt="logo"
                    width={150}
                    height={42}
                    className="h-auto"
                  />
                </Link>

                <button
                  onClick={toggleNavbar}
                  className={`${hamburgerClass} md:hidden z-50 p-2`}
                  type="button"
                  aria-label="Toggle navigation"
                >
                  <span className="w-6 h-0.5 bg-heading transition-all"></span>
                  <span className="w-6 h-0.5 bg-heading transition-all"></span>
                  <span className="w-6 h-0.5 bg-heading transition-all"></span>
                </button>

                <div className={`${mobileMenuClass} md:flex flex-col md:flex-row items-start md:items-center absolute md:relative left-0 top-full md:top-0 w-full md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none z-40`}>
                  <ul className="flex flex-col md:flex-row md:mx-auto p-4 md:p-0">
                    {menus.map((menuItem) => (
                      <MenuItem key={menuItem.label} {...menuItem} />
                    ))}
                  </ul>
                </div>

                <div className="hidden md:flex items-center">
                  <div>
                    <Link href="/contact" className="default-btn">
                      <span>Contact Us</span>
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavbarTwo;
