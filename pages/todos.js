import Task from "../components/Task";
import useTodos from "../Hooks/useTodos";
import styles from "../styles/Home.module.css";

export default function ToDos() {
  const { status, data, error, isFetching } = useTodos();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <style jsx>
          {`
            h1 {
              margin: 0 0 15px 0;
            }

            li {
              margin: 0 15px 0 0;
            }

            ul {
              max-width: 400px;
              margin: 0 auto;
            }

            p {
              text-align: center;
            }
          `}
        </style>
        <ul>
          {data &&
            data.map(({ title, id, completed }, index) => (
              <li key={id}>
                <Task title={title} status={completed} />
              </li>
            ))}
        </ul>
      </main>
    </div>
  );
}
