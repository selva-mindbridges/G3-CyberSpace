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
        <li className="nav-item" key={subItem.label}>
          <Link
            href={subItem.link}
            className={`nav-link ${isActive ? "active" : ""}`}
          >
            {subItem.label}
            {subItem.submenu && <i className="bx bx-chevron-right"></i>}
          </Link>
          {subItem.submenu && (
            <ul className="dropdown-menu">
              {renderSubmenu(subItem.submenu)}
            </ul>
          )}
        </li>
      );
    });
  };

  if (submenu) {
    return (
      <li className="nav-item" key={label}>
        <Link
          href={link}
          className={`nav-link`}
          onClick={(e) => e.preventDefault()}
        >
          {label} <i className="bx bx-chevron-down"></i>
        </Link>

        <ul className="dropdown-menu">
          {renderSubmenu(submenu)}
          {/* {submenu.map((subItem) => {
            const isActive = pathname == subItem.link;
            return (
              <li className="nav-item" key={subItem.label}>
                <Link
                  href={subItem.link}
                  className={`nav-link ${isActive ? "active" : ""}`}
                >
                  {subItem.label}
                </Link>
              </li>
            );
          })} */}
        </ul>
      </li>
    );
  }

  return (
    <li className="nav-item" key={label}>
      <Link href={link} className={`nav-link ${isActive ? "active" : ""}`}>
        {label}
      </Link>
    </li>
  );
};

export default MenuItem;
