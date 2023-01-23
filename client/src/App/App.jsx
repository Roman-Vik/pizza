import {Routes, Route} from "react-router-dom"
import {useState, useEffect} from "react";
import {Home} from '../Pages/Home/Home';
import {NotFound} from "../Pages/NotFound/NotFound"
import {Pizza} from "../Pages/Pizza/Pizza"
import {BasketPages} from '../Pages/Basket/BasketPages';
import {FoodOrdering} from '../Pages/FoodOrdering/FoodOrdering';
import {Accepted} from '../Pages/Accepted/Accepted';
import {Combo} from '../Pages/Combo/Combo';
import {Snacks} from "../Pages/Snacks/Snacks"
import {Desserts} from "../Pages/Desserts/Desserts"
import {Drinks} from "../Pages/Drinks/Drinks"
import {OtherProducts} from '../Pages/OtherProducts/OtherProducts';
import {ModalPizza} from "../components/ModalPizza/ModalPizza";
import {Portal} from "../components/Portal/Portal";


export function App() {
    const [data, setData] = useState({});
    const [act, setAct] = useState(false);
    const [sizePizza, setSizePizza] = useState('средняя')
    const [pizzaDough, setPizzaDough] = useState('традиционное')
    const [linkPizza, setLinkPizza] = useState('')





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

            <Portal>
                {act && <ModalPizza
                    linkPizza={linkPizza}
                    setAct={setAct}
                    pizzaDough={pizzaDough} setPizzaDough={setPizzaDough}
                    sizePizza={sizePizza} setSizePizza={setSizePizza}/>}
            </Portal>

            <Routes>
                <Route path="/" element={<Home   setLinkPizza={setLinkPizza} setAct={setAct}></Home>}></Route>
                <Route
                    path="/basket"
                    element={<BasketPages></BasketPages>}
                ></Route>
                <Route
                    path="/order"
                    element={<FoodOrdering></FoodOrdering>}
                ></Route>
                <Route path="/accepted" element={<Accepted></Accepted>}></Route>
                <Route path="/pizza" element={<Pizza setLinkPizza={setLinkPizza} setAct={setAct}></Pizza>}></Route>
                <Route path="/combo" element={<Combo></Combo>}></Route>
                <Route path="/snacks" element={<Snacks></Snacks>}></Route>
                <Route path="/desserts" element={<Desserts></Desserts>}></Route>
                <Route path="/drinks" element={<Drinks></Drinks>}></Route>
                <Route path="/other_products" element={<OtherProducts></OtherProducts>}></Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
        </>
    );
}

