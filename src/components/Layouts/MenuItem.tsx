"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SubMenuItem {
  label: string;
  link: string;
  submenu?: SubMenuItem[];
}

interface MenuItemProps {
  label: string;
  link: string;
  submenu?: SubMenuItem[];
}

const MenuItem: React.FC<MenuItemProps> = ({ label, link, submenu }) => {
  const pathname = usePathname();
  const isActive = pathname == link;

  const renderSubmenu = (submenuItems: SubMenuItem[]) => {
    return submenuItems.map((subItem) => {
      const isActive = pathname == subItem.link;
      return (
        <li className="group/subitem relative" key={subItem.label}>
          <Link
            href={subItem.link}
            className={`block px-6 py-3 text-sm hover:bg-gray-50 hover:text-primary transition-all ${
              isActive ? "text-primary font-semibold" : "text-body"
            }`}
          >
            {subItem.label}
            {subItem.submenu && <i className="bx bx-chevron-right float-right mt-1"></i>}
          </Link>
          {subItem.submenu && (
            <ul className="absolute left-full top-0 min-w-[220px] bg-white shadow-lg opacity-0 invisible group-hover/subitem:opacity-100 group-hover/subitem:visible transition-all duration-300">
              {renderSubmenu(subItem.submenu)}
            </ul>
          )}
        </li>
      );
    });
  };

  if (submenu) {
    return (
      <li className="group relative" key={label}>
        <Link
          href={link}
          className="block px-5 py-8 text-heading font-semibold text-base hover:text-primary transition-all cursor-pointer"
          onClick={(e) => e.preventDefault()}
        >
          {label} <i className="bx bx-chevron-down ml-1"></i>
        </Link>

        <ul className="absolute left-0 top-full min-w-[220px] bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
          {renderSubmenu(submenu)}
        </ul>
      </li>
    );
  }

  return (
    <li key={label}>
      <Link 
        href={link} 
        className={`block px-5 py-8 text-base font-semibold transition-all ${
          isActive 
            ? "text-primary" 
            : "text-heading hover:text-primary"
        }`}
      >
        {label}
      </Link>
    </li>
  );
};

export default MenuItem;
