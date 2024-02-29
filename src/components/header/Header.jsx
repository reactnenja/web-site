import React from "react";
import Navbar from "./navbar/Navbar";
import Hero from "./hero/Hero";
import "./Header.scss";
function Header() {
	return (
		<header>
			<Navbar />
			<Hero />
		</header>
	);
}

export default Header;
