import "./Header.css";
export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="#">
          <img src="assets/logo.svg" alt="logo" />
          <p>
            Sweetest<br></br>Cake
          </p>
        </a>
      </div>
      <ul className="header-links">
        <li>
          <a href="#empresa">Empresa</a>
        </li>
        <li>
          <a href="#productos">Productos</a>
        </li>
        <li>
          <a href="#productos">Contacto</a>
        </li>
      </ul>
    </header>
  );
};
