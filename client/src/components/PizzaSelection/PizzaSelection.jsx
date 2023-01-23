<<<<<<< HEAD

export function PizzaSelection() {

    return (<>


    </>
=======
import s from "./PizzaSelection.module.css"

export function PizzaSelection() {
    return (
        <>
            <div>
                <input
                    className={s.radio__input}
                    type="radio"
                    name="myRadio"
                    value="маленькая"
                    id="m1"
                    onClick={e => console.log(e.target.value)}
                />
                <label className={s.radio__label} htmlFor="m1">Маленькая</label>

            </div>
            <div>
                <input
                    className={s.radio__input}
                    type="radio"
                    name="myRadio"
                    value="средняя"
                    id="m2"
                    onClick={e => console.log(e.target.value)}
                />
                <label className={s.radio__label} htmlFor="m2">Маленькая</label>

            </div>
        </>

>>>>>>> main

    )
}