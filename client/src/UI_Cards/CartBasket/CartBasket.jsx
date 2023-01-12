import {HeaderCard} from "../HeaderCard/HeaderCard";
import {FooterCard} from "../FooterCard/FooterCard";
import {Container2} from "../../components/Container2/Container2";
import {Basket} from "../../components/Basket/Basket";

export function CartBasket() {
    return(
        <>
            <HeaderCard/>
                <Container2> <Basket/> </Container2>
            <FooterCard/>
        </>
    )

}