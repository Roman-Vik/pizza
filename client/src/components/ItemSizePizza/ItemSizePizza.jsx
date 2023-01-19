import s from "./ItemSizePizza.module.css"

export function ItemSizePizza({sizePizza,setSizePizza}) {
    return (
        <>
            <div>
                <input
                    checked={sizePizza === 'маленькая'}
                    className={s.radio__input}
                    type="radio"
                    name="myRadio"
                    value='маленькая'
                    id="m1"
                    onChange={e => setSizePizza(e.target.value)}
                />
                <label className={s.radio__label} htmlFor="m1">Маленькая</label>
            </div>
            <div>
                <input
                    checked={sizePizza === 'средняя'}
                    className={s.radio__input}
                    type="radio"
                    name="myRadio"
                    value="средняя"
                    id="m2"
                    onChange={e => setSizePizza(e.target.value)}
                />
                <label className={s.radio__label} htmlFor="m2">Средняя</label>
            </div>
            <div>
                <input
                    checked={sizePizza === 'большая'}
                    className={s.radio__input}
                    type="radio"
                    name="myRadio"
                    value="большая"
                    id="m3"
                    onChange={e => setSizePizza(e.target.value)}
                />
                <label className={s.radio__label} htmlFor="m3">Большая</label>
            </div>
        </>)
}