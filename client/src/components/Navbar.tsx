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
          <a href="/manga">Manga</a>
        </li>
        <li>
          <a href="/anime">Anime</a>
        </li>
      </ul>
    </nav>
  );
}
