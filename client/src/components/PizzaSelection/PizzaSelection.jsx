import s from "./PizzaSelection.module.css"

export function PizzaSelection() {
    return (
        <div>
            <input
                className={s.radio__input}
                type="radio"
                name="myRadio"
                value="Маленькая"
                id="regular"
                onClick={e => console.log(e.target.value)}
            />
            <label className={s.radio__label} htmlFor="regular">Маленькая</label>

        </div>
    )
}