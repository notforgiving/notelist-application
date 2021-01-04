import Time from "../Time";
import style from "./style.module.css";

interface iNoteProps {
  title: string;
  date: number;
  description: string;
}

function Note({ title, date, description }: iNoteProps) {
  const dateinvalue = new Date(date - 3 * 3600 * 1000);
  console.log(date)
  return (
    <div className={style.noteList__note}>
      <div className={style.note__cicle}>
        <div className={style.note__cicleBody}></div>
      </div>
      <div className={style.note__data}>
        <div className={style.note__time}>
          <p className={style.note__title}>{title}</p>
          <p className={style.note__timeDate}>
            {dateinvalue.getDate() < 10
              ? `0${dateinvalue.getDate()}`
              : dateinvalue.getDate()}
            .
            {dateinvalue.getMonth() + 1 < 10
              ? `0${dateinvalue.getMonth() + 1}`
              : dateinvalue.getMonth() + 1}
            .{dateinvalue.getFullYear()}
          </p>
        </div>
        <p className={style.note__description}>{description}</p>
        <p className={style.note__timeOld}>
          <Time date={date} />
        </p>
      </div>
    </div>
  );
}

export default Note;
