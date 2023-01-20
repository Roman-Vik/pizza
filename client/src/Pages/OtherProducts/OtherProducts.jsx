import React from "react";
import { useState, useEffect } from "react";
import { Container } from "../../components/Container/Container";
import { Section } from "../../components/Section/Section";
import { Ul } from "../../components/Ul/Ul";
import { Footer } from "../../UI/Footer/Footer";
import { Header } from "../../UI/Header/Header";

export function OtherProducts() {
  const [data, setData] = useState([]);
  const [nav, setNav] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((data) => data.json())
      .then((d) => {
        setData(d?.products?.find((el) => el.name === "Другие товары"));
        setNav(d);
      });
  }, []);
  return (
    <>
      <Header></Header>
      <Container>
        <Ul data={nav}></Ul>
        <Section  el={data}></Section>
      </Container>
      <Footer></Footer>
    </>
  );
}
