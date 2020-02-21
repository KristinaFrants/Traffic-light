import React, { useState } from "react";

//create your first componentv
//
// const redStyles{
// backgrounColor: red,
// height: 150 px,
// width : 400 px,
// }

export function Home() {
	const [greenLight, setgreenLight] = useState("inactive");
	const [amberLight, setamberLight] = useState("inactive");
	const [redLight, setredLight] = useState("card");

	return (
		<div className="container">
			<div
				className={redLight}
				onClick={() => {
					setredLight(redLight === "card" ? "inactive" : "card");
					setgreenLight(
						redLight === "card" ? "inactive" : "inactive"
					);
					setamberLight(
						redLight === "card" ? "inactive" : "inactive"
					);
				}}
			/>

			<div
				className={amberLight}
				onClick={() => {
					setamberLight(
						amberLight === "card1" ? "inactive" : "card1"
					);
					setredLight(
						amberLight === "card1" ? "inactive" : "inactive"
					);

					setgreenLight(
						amberLight === "card1" ? "inactive" : "inactive"
					);
				}}
			/>
			<div
				className={greenLight}
				onClick={() => {
					setgreenLight(
						greenLight === "card2" ? "inactive" : "card2"
					);
					setredLight(
						greenLight === "card2" ? "inactive" : "inactive"
					);
					setamberLight(
						greenLight === "card2" ? "inactive" : "inactive"
					);
				}}
			/>
		</div>
	);
}
