
import s from "./NameProduct.module.css"
import {Card} from "../Card/Card";

export function NameProduct({el}) {
    return (<div>
            <h2 className={s.cards__headerline}>{el.name}</h2>
            <div className={s.cards__items}>
                {el?.arr?.map((el, i)=> <Card el={el}/>)}
            </div>
        </div>

    )
}

