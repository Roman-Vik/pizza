import {Footer} from "../../UI/Footer/Footer";
import s from "./FooterCard.module.css"
import {Container} from "../../components/Container/Container";
import {Contacts} from "../../components/Contacts/Contacts";

export function FooterCard() {

    return (
        <div className={s.fooCard}>
            < Container>
                <div className={s.fooCard__wrapperContacts}>
                    < Contacts/>
                </div>

            </Container>
            <div>
                <Footer/>
            </div>
        </div>


    )
}