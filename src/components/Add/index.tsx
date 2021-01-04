import { useState } from "react";
import Modal from "../Modal";
import { useSelector } from "react-redux";
import style from "./style.module.css";
import firebase from "firebase";

function Add({ control }: any) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")
  const { notes }: any = useSelector((state) => state);

  console.log(notes.items.length)

  const handleChangeTitle = (e: any): void => {
    setTitle(e.target.value);
  };

  const handleChangeDescription = (e: any): void => {
    setDescription(e.target.value);
  };

  const handleAddnote = (): void => {
    const db = firebase.database();
    const note = {
      "date" : Math.floor(Date.now() / 1000),
      "description" : description,
      "id" : 6,
      "title" : title
    }
    const notesRef = db.ref('notes');

    if(notes.items.length===0){
      notesRef.push()
      notesRef.set([note]);
    }
    else{
     notesRef.push()
      notesRef.set(note);
    }
  };

  return (
    <div className={style.add__block}>
      <Modal>
        <form className={style.add__form}>
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
        </form>
      </Modal>
    </div>
  );
}

export default Add;
