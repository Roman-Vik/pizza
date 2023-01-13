import './App.css';
import { Routes, Route } from "react-router-dom"
import {useState, useEffect} from "react";
import {Header} from "../UI/Header/Header";
import {Main} from "../UI/Main/Main";
import {Footer} from "../UI/Footer/Footer";
import {Order} from "../components/Order/Order";
import {FooterCard} from "../UI_Cards/FooterCard/FooterCard";
import { Home } from '../Pages/Home';
import { NotFound } from '../Pages/NotFound';
import { Pizza } from '../Pages/Pizza';


export function App() {
    return (
        <>
        <Header/>
         <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/pizza" element={<Pizza></Pizza>}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
         </Routes>
        <Footer/>
        </>
    );
}
