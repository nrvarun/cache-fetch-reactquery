import Link from "next/link";

const Header = () => {
  return (
    <header>
      <style jsx>
        {`
          header {
            padding: 20px;
            display: flex;
          }
          ul {
            display: flex;
            padding: 0;
            margin: 0 auto;
            list-style-type: none;
          }

          li {
            margin: 0 15px 0 0;
          }
        `}
      </style>
      <ul>
        <li>
          <Link href="/">
            <a>
              <p>Home</p>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/todos">
            <a>
              <p>Tasks</p>
            </a>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
