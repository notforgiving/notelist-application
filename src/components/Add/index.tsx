import React from "react";
import Modal from "../Modal";
import style from "./style.module.css";

function Add({ control }: any) {
  return (
    <div className={style.add__block}>
      <Modal>
        <form className={style.add__form}>
          <h1 className={style.add__title}>Создание заметки</h1>
          <input
            className="form__input"
            type="text"
            placeholder="Заголовок"
            value=""
          />
          <input
            className="form__input"
            type="text"
            placeholder="Описание"
            value=""
          />
          <button className="form__btn" type="submit">
            Добавить
          </button>
        </form>
      </Modal>
      <button onClick={control} className={style.add__close}>
        +
      </button>
    </div>
  );
}

export default Add;
