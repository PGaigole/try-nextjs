const Links = [
  { href: "/counter", text: "counter" },
  { href: "/bar", text: "bar" },
  { href: "/todo-list", text: "todo list" },
  { href: "/prisma", text: "prisma" },
];

import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-base-300">
      <div className="navbar max-w-6xl mx-auto flex-col sm:flex-row">
        <Link href="/" className="btn btn-primary">
          Home
        </Link>
        <ul className="menu md:ml-8 flex-col sm:flex-row">
          {Links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="capitalize">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
