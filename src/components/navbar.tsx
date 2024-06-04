"use client"
// components/Navbar.js
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about"></Link>
          </li>
          <li>
            <Link href="mailto:andrew.webster403@hotmail.co.uk">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
