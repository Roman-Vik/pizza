import s from "./HeaderCard.module.css"
import {DoDoPizza} from "../../components/DoDoPizza/DoDoPizza";

export  function HeaderCard() {
    return (
      <>
        <header className={s.header}>
          <DoDoPizza />
          <ol className={s.wrapper_round}>
            <li className={s.round}>1</li>
            <div className={s.line}></div>
            <li className={s.round}>2</li>
            <div className={s.line}></div>
            <li className={s.round}>3</li>
          </ol>
        </header>
      </>
    );
}