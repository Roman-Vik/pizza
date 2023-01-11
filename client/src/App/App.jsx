import './App.css';
import {useState, useEffect} from "react";
import {Header} from "../UI/Header/Header";
import {Main} from "../UI/Main/Main";
import {Footer} from "../UI/Footer/Footer";
import {Order} from "../components/Order/Order";

export function App() {
    const [data, setData] = useState('')

    useEffect(() => {
        fetch("http://localhost:5000/api",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*'
                }
            }
        ).then(data => data.json()).then(d => setData(d))

    }, [])

    return (
        <>
            <Order/>
            <Header/>
            <Main/>
            <Footer/>
        </>
    );
}


