import React from "react";
import Company from "./company/Company";
import Sertificat from "./sertifecat/Sertifecat";
import Product from "./product/Product";
import Form from "./forum/Form";
function Main() {
	return (
		<main className='main'>
			<Company />
			<Sertificat />
			<Product />
			<Form />
		</main>
	);
}

export default Main;
