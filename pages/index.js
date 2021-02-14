import UserCard from "../components/UserCard";
import useRandomUsers from "../Hooks/useRandomUsers";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { status, data, error, isFetching } = useRandomUsers();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <style jsx>
          {`
            h1 {
              margin: 0 0 15px 0;
            }

            li {
              flex: 1 0 auto;
              margin: 0 15px 15px 0;
            }

            ul {
              display: flex;
              flex-wrap: wrap;
            }

            p {
              text-align: center;
            }
          `}
        </style>
        <ul>
          {data &&
            data.map((item, index) => (
              <li>
                <UserCard
                  name={`${item?.name.title}${item?.name.first}${item?.name.last}`}
                  img_src={item?.picture.thumbnail}
                  email={item?.email}
                  location={item?.location?.city}
                />
              </li>
            ))}
        </ul>
      </main>
    </div>
  );
}
