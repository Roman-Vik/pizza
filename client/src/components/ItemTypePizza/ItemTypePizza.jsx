import s from "./ItemTypePizza.module.css"

export function ItemTypePizza({pizzaDough,setPizzaDough}) {
    return (
        <>
            <div>
                <input
                    checked={pizzaDough === 'традиционное'}
                    className={s.radio__input}
                    type="radio"
                    name="pizzaDough"
                    value="традиционное"
                    id="m4"
                    onChange={e => setPizzaDough(e.target.value)}
                />
                <label className={s.radio__label} htmlFor="m4">Традиционное</label>
            </div>
            <div>
                <input
                    checked={pizzaDough === 'тонкое'}
                    className={s.radio__input}
                    type="radio"
                    name="pizzaDough"
                    value="тонкое"
                    id="m5"
                    onChange={e => setPizzaDough(e.target.value)}
                />
                <label className={s.radio__label} htmlFor="m5">Тонкое</label>
            </div>
        </>)
}