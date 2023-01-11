import s from "./NumCompanies.module.css"

export function NumCompanies() {
    return (
        <div className={"statistic__wrapper"}>
            <h2 className={s.statistic__headline}>688 пиццерий</h2>
            <p className={s.statistic__text}>в 14 странах, включая Китай, США и Великобританию</p>
        </div>
    )
}