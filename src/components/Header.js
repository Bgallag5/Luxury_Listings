import React from "react";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__logo">Luxury Listings</h1>
      <nav className="header__nav">
        <ul className="header__nav--ul">
          <li className="header__nav--li">Home</li>
          <li className="header__nav--li">Properties</li>
          <li className="header__nav--li">Our Story</li>
        </ul>
      </nav>
    </header>
  );
}
