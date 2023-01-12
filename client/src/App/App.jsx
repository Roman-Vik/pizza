import './App.css';
import {useState, useEffect} from "react";
import {Header} from "../UI/Header/Header";
import {Main} from "../UI/Main/Main";
import {Footer} from "../UI/Footer/Footer";
import {Order} from "../components/Order/Order";
import {FooterCard} from "../UI_Cards/FooterCard/FooterCard";
import {HeaderCard} from "../UI_Cards/HeaderCard/HeaderCard";
import {CartBasket} from "../UI_Cards/CartBasket/CartBasket";
import {CardFillingData} from "../UI_Cards/CardFillingData/CardFillingData";
import {CardDelivery} from "../UI_Cards/CardDelivery/CardDelivery";

export function App() {
	const [data, setData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/api",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*'
                }
            }
        ).then(data => data.json()).then(d => setData(d ))
    },[])



    return (
        <>
            {/*<h1>✓</h1>*/}
            {/*<CardDelivery/>*/}
            {/*<CardFillingData/>*/}
            {/*<CartBasket/>*/}
            {/*<Header/>*/}
            <Main data={data} />
            {/*<Footer/>*/}
        </>
    );
}
