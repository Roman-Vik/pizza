import './App.css';
import {Routes, Route} from "react-router-dom"
import { Home } from '../Pages/Home/Home';
import { NotFound } from "../Pages/NotFound/NotFound"
import { Pizza } from '../Pages/Pizza/Pizza';
import { BasketPages } from '../Pages/Basket/BasketPages';
import { FoodOrdering } from '../Pages/FoodOrdering/FoodOrdering';
import { Accepted } from '../Pages/Accepted/Accepted';
import { Combo } from '../Pages/Combo/Combo';
import { Snacks } from "../Pages/Snacks/Snacks"
import { Desserts } from "../Pages/Desserts/Desserts"
import { Drinks } from "../Pages/Drinks/Drinks"
import { ModalCard } from '../components/ModalCard/ModalCard';
import {ToppingToPizza} from "../components/ToppingToPizza/ToppingToPizza";


export function App() {
    return (
        <>
{/*<ToppingToPizza/>*/}
        {/*<ModalCard></ModalCard>*/}
         <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            {/* <Route path='/' element={<Layout></Layout>}></Route> */}
            <Route path='/basket' element={<BasketPages></BasketPages>}></Route>
            <Route path='/order' element={<FoodOrdering></FoodOrdering>}></Route>
            <Route path='/accepted' element={<Accepted></Accepted>}></Route>
            <Route path="/pizza" element={<Pizza></Pizza>}></Route>
            <Route path="/combo" element={<Combo></Combo>}></Route>
            <Route path="/snacks" element={<Snacks></Snacks>}></Route>
            <Route path="/desserts" element={<Desserts></Desserts>}></Route>
            <Route path="/drinks" element={<Drinks></Drinks>}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
         </Routes>
        </>
    );
}
