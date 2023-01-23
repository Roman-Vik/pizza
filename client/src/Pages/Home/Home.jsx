import React from "react";
import { useState, useEffect } from "react";
import { Header } from "../../UI/Header/Header";
import { Main } from "../../UI/Main/Main";

export function Home({setAct, setLinkPizza}) {
	const [data, setData] = useState({});
	


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

	return (
		<>
			<Header></Header>
			<Main setLinkPizza={setLinkPizza} setAct={setAct} data={data} />
		</>
	);
}