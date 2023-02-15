import "../styles/components/navbar.css";

export function Navbar() {
  return (
    <nav>
      <ul className="left">
        <li>
          <strong>OtakuDB</strong>
        </li>
      </ul>
      <ul className="right">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/all-manga">Manga</a>
        </li>
        <li>
          <a href="/all-anime">Anime</a>
        </li>
      </ul>
    </nav>
  );
}
