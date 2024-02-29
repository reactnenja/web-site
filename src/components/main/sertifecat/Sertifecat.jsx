import React from "react";
import Slider from "./Slider";
import "./Sertifecat.scss";
function Sertificat() {
	return (
		<section className='sertificat__main'>
			<div className='container'>
				<h2 className='sertificat__heading'>
					Качество продукции подтверждают <span>сертификаты</span>
				</h2>
				<Slider />
			</div>
		</section>
	);
}

export default Sertificat;
