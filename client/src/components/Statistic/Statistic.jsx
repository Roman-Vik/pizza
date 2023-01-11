import s from "./Statistic.module.css"
import { Container } from "../Container/Container"
import {NumPhone} from "../NumPhone/NumPhone";
import {NumCompanies} from "../NumСompanies/NumСompanies";






export function Statistic() {
    return (
        <Container>
            <div className={s.statistic__container}>
           <NumPhone/>
          <NumCompanies/>
            </div>
        </Container>
    )
}

