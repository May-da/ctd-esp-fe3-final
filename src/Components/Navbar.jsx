

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import { Link, Links } from "react-router-dom"
import { routes } from "../Config/routes"
import { useCharsState } from "../Context/context";

const Navbar = () => {
  const { theme, changeTheme } = useCharsState();

  return (
    <nav className= {theme === "dark" ? "dark" : ""}>
      
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={changeTheme}>Change theme </button>
      <Link to={routes.home}>
        <h4>Home</h4>
      </Link>
      <Link to={routes.contact}>
        <h4>Contacto</h4>
      </Link>
      <Link to={routes.detail}>
        <h4>Detalle</h4>
      </Link>
      <Link to={routes.favorite}>
        <h4>Favoritos</h4>
      </Link>
    </nav>
  )
}

export default Navbar