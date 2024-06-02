// components/Navbar.js
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link id="link">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link id="link">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link id="link">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
