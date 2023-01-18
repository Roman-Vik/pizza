import React from "react";
import { useState, useEffect } from "react";
import s from "./Combo.module.css";
import { Footer } from "../../UI/Footer/Footer";
import { Header } from "../../UI/Header/Header";
import { Container } from "../../components/Container/Container";
import { Card } from "../../components/Card/Card";
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
			.then((d) => setData(d));
	}, []);
	console.log(data);

	return (
		<>
			<Header></Header>
			<Container>
				<div className={s.cards__items}>
					
				</div>
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