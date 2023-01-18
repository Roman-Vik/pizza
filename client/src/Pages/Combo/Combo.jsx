import React from "react";
import { useState, useEffect } from "react";
import { Footer } from "../../UI/Footer/Footer";
import { Header } from "../../UI/Header/Header";
import { Container } from "../../components/Container/Container";
import { Section } from "../../components/Section/Section";

export function Combo() {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/api", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*"
			}
		})
			.then((data) => data.json())
			.then((d) =>
				setData(
					d?.products?.find((el) => el.name === "Комбо")
				)
			);
	}, []);
	console.log(data);
	return (
		<>
			<Header></Header>
			<Container>
					<Section el={data} />
			</Container>
			<Footer></Footer>
		</>
	);
}
// {
// 	 {data?.products?.filter((el, i) => i === 1)
// 						.map((el, i) => (
// 							<div>
// 								{el?.arr?.map((el, i) => (
// 									<Card el={el} />
// 								))}
// 							</div>
// 						))} */
// }
