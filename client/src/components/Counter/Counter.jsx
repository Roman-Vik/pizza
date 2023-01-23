import React from "react";
import { useState } from "react";
import s from "./Counter.module.css";

export function Counter() {
  const [counter, setCounter] = useState(1);

  const increase = () => {
    setCounter((count) => count + 1);
  };

  const decrease = () => {
    setCounter((count) => count - 1);
  };

  return (
    <div className={s.btn}>
      <button disabled={counter === 1} className={s.btn_min} onClick={decrease}>
        -
      </button>
      <p className={s.btn_num}>{counter}</p>
      <button className={s.btn_sum} onClick={increase}>
        +
      </button>
    </div>
  );
}
