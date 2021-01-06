import { useState } from "react";
import Modal from "../Modal";
import { useSelector } from "react-redux";
import style from "./style.module.css";
import firebase from "firebase";

function Add({ control }: any) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { notes,auth }: any = useSelector((state) => state);
  const db = firebase.database();

  const handleChangeTitle = (e: any): void => {
    setTitle(e.target.value);
  };

  const handleChangeDescription = (e: any): void => {
    setDescription(e.target.value);
  };

  const handleAddnote = (): void => {
    const note = {
      date: Math.floor(Date.now() / 1000),
      description: description,
      id: notes.items.length,
      title: title,
    };

    const login = auth.spaceName.replace('@','')
    const dataUser = db.ref(login.replace('.','')).child('notes')
    if (notes.items.length === 0) {
      dataUser.push();
      dataUser.set([note])
    } else {
      dataUser.child(`${notes.items.length}`).set(note);
    }

    control();
  };

  return (
    <div className={style.add__block}>
      <Modal>
        <div className={style.add__form}>
          <h1 className={style.add__title}>Создание заметки</h1>
          <input
            className="form__input"
            type="text"
            placeholder="Заголовок"
            value={title}
            onChange={handleChangeTitle}
          />
          <input
            className="form__input"
            type="text"
            placeholder="Описание"
            value={description}
            onChange={handleChangeDescription}
          />
          <div className={style.btn__group}>
            <button onClick={handleAddnote} className="form__btn" type="submit">
              Добавить
            </button>
            <button onClick={control} className={style.add__close}>
              +
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Add;
