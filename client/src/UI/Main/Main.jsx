import s from "./Main.module.css"
import { Ul } from "../../components/Ul/Ul"
import { Button } from "../../components/Button/Button"
import { Card } from "../../components/Card/Card";
import { NameProduct } from "../../components/NameProduct/NameProduct";
import { Reference } from "../../components/Reference/Reference";
import { Container } from "../../components/Container/Container";
import { Statistic } from "../../components/Statistic/Statistic";
import {New} from "../../components/New/New";
import {Sliders} from "../../components/Sliders/Sliders";

export function Main({data}){

    return (
        <main>
    <section>
        <Container>
            <div className={s.menu}>
                <Ul data={data}></Ul>
                <Button></Button>
            </div>
        </Container>
    </section>
    <section className={s.range}>
        <Sliders/>
        <Container>
            <New data={data}/>
            <NameProduct></NameProduct>
         <div className={s.cards__items}>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
         </div>
         </Container>
    </section>
    <section className={s.reference}>
        <Reference>
        </Reference>
    </section>
    <section className={s.statistic}>
        <Statistic>
        </Statistic>
    </section>
        </main>
    )
}