import React from 'react';
import style from "./style.module.css";

function Modal({children}:any) {
  return (
    <div className={style.form__block}>
      {children}
    </div>
  );
}

export default Modal;