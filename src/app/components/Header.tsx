// import React from 'react';
// import Link from 'next/link';
// import { FaShoppingCart } from 'react-icons/fa';

// const Header = () => {
//   return (
//     <header className='header'>
//       <h1 className='logo'>Perfume World</h1>
//       <nav>
//         <Link href="/">Home</Link>
//         <Link href="/about">About</Link>
//         <Link href="/perfumes">Perfumes</Link>
//         <Link href="/contact">Contact</Link>
//         <FaShoppingCart style={{ color: "white", fontSize: "20px" }} />
//       </nav>
//     </header>
//   );
// };

// export default Header;





"use client"


import React, { useState } from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi'; // Import hamburger icon

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu visibility
  };

  return (
    <header className='header'>
      <h1 className='logo'>Perfume World</h1>
      
      {/* Hamburger icon for small screens */}
      <div className="hamburger" onClick={toggleMenu}>
        <GiHamburgerMenu style={{ color: 'white', fontSize: '30px' }} />
      </div>

      {/* Navigation links */}
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/perfumes">Perfumes</Link>
        <Link href="/contact">Contact</Link>
        <FaShoppingCart style={{ color: "white", fontSize: "20px" }} />
      </nav>
    </header>
  );
};

export default Header;
