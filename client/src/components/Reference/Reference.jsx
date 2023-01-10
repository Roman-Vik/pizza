import s from "./Reference.module.css"
import { Container } from "../Container/Container"
import { UlReference } from "../UlReference/UlReference"
import { Platform } from "../Platform/Platform"
import { Contacts } from "../Contacts/Contacts"
import { Mail } from "../Mail/Mail"

export function Reference() {
    return (
        <Container>
            <div className={s.reference__wrapper}>
                <UlReference></UlReference>
                <UlReference></UlReference>
                <UlReference></UlReference>
                <UlReference></UlReference>
                <div className={   `${s.reference__item} ${s._reference__item_big}` }>
                    <Platform></Platform>
                    <Contacts>
                    <Mail></Mail>
                    </Contacts>
                </div>
            </div>
        </Container>
    )
}