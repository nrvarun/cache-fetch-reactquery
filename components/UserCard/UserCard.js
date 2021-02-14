import style from "./card.module.css";

const Card = ({ img_src = "", name = "", email = "", location = "" }) => {
  return (
    <article className={style.wrapper}>
      <div className={style.content}>
        <img src={img_src} />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
          <p>{location}</p>
        </div>
      </div>
    </article>
  );
};

export default Card;
