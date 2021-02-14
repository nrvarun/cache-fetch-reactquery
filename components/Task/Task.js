import style from "./task.module.css";

const Task = ({ title, status }) => {
  return (
    <div className={style.wrapper}>
      <h2
        className={style.title}
        style={{ textDecoration: status ? "line-through" : "none" }}
      >
        {title}
      </h2>
    </div>
  );
};

export default Task;
