import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "../UI/Header/Header";
import { Footer } from "../UI/Footer/Footer";
import { Home } from "../Pages/Home";
import { NotFound } from "../Pages/NotFound";

export function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
				<Route path="*" element={<NotFound></NotFound>}></Route>
			</Routes>
			<Footer />
		</>
	);
}
