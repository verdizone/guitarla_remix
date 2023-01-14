import {Link, useLocation} from '@remix-run/react'
import imagen from '../../public/img/carrito.png'

function Navegacion() {
    const url = useLocation();
    const urlActual = url.pathname;
    // console.log(urlActual)
  return (
    <nav className="navegacion">
      <Link className={urlActual === "/" ? "active" : ""} to="/">
        Inicio
      </Link>
      <Link
        className={urlActual === "/nosotros" ? "active" : ""}
        to="/nosotros"
      >
        Nosotros
      </Link>
      <Link className={urlActual === "/blog" ? "active" : ""} to="/blog">
        Blog
      </Link>
      <Link className={urlActual === "/guitarras" ? "active" : ""} to="/guitarras">
        Tienda
      </Link>
      <Link className={urlActual === "/carrito" ? "active" : ""} to="/carrito">
        <img src={imagen} alt={'carrito de compras'} />
      </Link>

    </nav>
  );
}

export default Navegacion;
