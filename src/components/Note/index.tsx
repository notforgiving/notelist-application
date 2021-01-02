import React from "react";
import style from "./style.module.css";

function Note() {
  return (
    <div className={style.noteList__note}>
      <div className={style.note__cicle}>
        <div className={style.note__cicleBody}></div>
      </div>
      <div className={style.note__data}>
        <div className={style.note__time}>
          <p className={style.note__title}>Заголовок</p>
          <p className={style.note__timeDate}>20.12.2021</p>
        </div>
        <p className={style.note__description}>Описание</p>
        <p className={style.note__timeOld}>1 час 1 минута</p>
      </div>
    </div>
  );
}

export default Note;
