import { useState, useEffect } from "react";
import style from "./style.module.css";
import Note from "../Note";
import Add from "../Add";
import Exit from "../../assets/img/exit.svg";
import { useDispatch, useSelector } from "react-redux";
import { logoutactioncreactor } from "../../redux/action/login";
import classNames from "classnames";
import firebase from "firebase";
import { notesactioncreator } from "./../../redux/action/setnotes";

function Notelist() {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [searchText, setSearchText] = useState("");
  const { notes }: any = useSelector((state) => state);

  useEffect(() => {
    const db = firebase.database();
    const notesRef = db.ref("notes");
    notesRef.on("value", (elem) => {
      if (elem.val() != null) {
        dispatch(notesactioncreator(elem.val()));
      }
    });
  }, [dispatch]);

  const handleConrolModal = (): void => {
    setModal(!modal);
  };

  const handleSearch = (e: any): void => {
    setSearchText(e.target.value);
  };

  const logout = (): void => {
    firebase
      .auth()
      .signOut()
      .then((response) => {
        dispatch(logoutactioncreactor(false));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className={style.noteList}>
      <div className={style.noteList__header}>
        <h1 className={style.noteList__title}>Заметки</h1>
        <div className={style.noteList__control}>
          <button onClick={logout} className={style.noteList__logout}>
            <img style={{ width: 20 }} src={Exit} alt="Exit" />
          </button>
        </div>
      </div>
      <div className={style.notelist__searchGroup}>
        <input
          className={classNames("form__input", style.noteList__searchInput)}
          type="text"
          onChange={handleSearch}
          value={searchText}
        />
      </div>

      <div className={style.noteList__list}>
        {notes.items.map((item: any, index: number) => {
          if (
            item.title.includes(searchText) ||
            item.description.includes(searchText)
          ) {
            return (
              <Note
                key={`${index}${item.title}`}
                title={item.title}
                date={item.date}
                description={item.description}
              />
            );
          } else if (searchText === "") {
            return (
              <Note
                key={`${index}${item.title}`}
                title={item.title}
                date={item.date}
                description={item.description}
              />
            );
          } else return null;
        })}
      </div>
      {modal ? (
        <Add control={handleConrolModal} />
      ) : (
        <button onClick={handleConrolModal} className={style.noteList__addNote}>
          +
        </button>
      )}
    </div>
  );
}

export default Notelist;
