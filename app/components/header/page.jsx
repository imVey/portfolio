"use client";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <img className=" w-10 object-contain" src="/mb.png" alt="Logo" />
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href={{ pathname: "/", hash: "#projets" }}>Projets</Link>
          </li>
          <li>
            <Link href={{ pathname: "/", hash: "#contact" }}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
