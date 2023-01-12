import s from "./Statistic.module.css"
import { Container } from "../Container/Container"
import {Revenue} from "../Revenue/Revenue";
import {NumCompanies} from "../NumСompanies/NumСompanies";






export function Statistic() {
    return (
        <Container>
            <div className={s.statistic__container}>
           <Revenue/>
          <NumCompanies/>
            </div>
        </Container>
    )
}

