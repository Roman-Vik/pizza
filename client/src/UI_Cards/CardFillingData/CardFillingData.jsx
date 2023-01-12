import {HeaderCard} from "../HeaderCard/HeaderCard";
import {FooterCard} from "../FooterCard/FooterCard";
import {Order} from "../../components/Order/Order";

export function CardFillingData() {
    return(
        <>
            <HeaderCard/>
            <Order/>
            <FooterCard/>
        </>
    )
}