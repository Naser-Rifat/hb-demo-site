import Link from "next/link";
import React from "react";
import navStyles from "../../styles/Nav.module.css";

const Nav = () => {
  return (
    <header className="hidden md:block">
      <nav className={navStyles.nav}>
        <img
          className="mr-80"
          src="https://i.ibb.co/qkhZ6NT/healthbondhu-logo-tm-01-2.png"
        />
        <ul>
          <li>
            <Link href="/">Featured Service</Link>
          </li>
          <li>
            <Link href="/about">Package</Link>
          </li>
          <li>
            <Link href="/signup">Best Deals</Link>
          </li>
          <li>
            <Link href="/signin">Sign In</Link>
          </li>
        </ul>

        <button className={navStyles.singupbutton}>
          {" "}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.3333 14V12.6667C13.3333 11.9594 13.0524 11.2811 12.5523 10.781C12.0522 10.281 11.3739 10 10.6667 10H5.33332C4.62608 10 3.9478 10.281 3.4477 10.781C2.94761 11.2811 2.66666 11.9594 2.66666 12.6667V14"
              stroke="#8E8E8E"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.00001 7.33333C9.47277 7.33333 10.6667 6.13943 10.6667 4.66667C10.6667 3.19391 9.47277 2 8.00001 2C6.52725 2 5.33334 3.19391 5.33334 4.66667C5.33334 6.13943 6.52725 7.33333 8.00001 7.33333Z"
              stroke="#8E8E8E"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Link href="/signup">
            <span className="">Sign UP </span>
          </Link>{" "}
          <span>/</span>{" "}
          <Link href="/signin">
            <span className="">Sign In</span>
          </Link>
        </button>
      </nav>
    </header>
  );
};

export default Nav;
