import { useState } from "react";
import Header from "./components/header/Header";
import "./sass/style.scss";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
import Main from "./components/main/Main";

function App() {
	return (
		<>
			<Header />
			<Main />
		</>
	);
}

export default App;
