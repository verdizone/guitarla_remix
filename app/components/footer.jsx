import Navegacion from "./navegacion"


function Footer() {
    const copy = new Date().getFullYear()
  return (
    <footer className="footer">
        <div className="contenedor contenido">
            <Navegacion />
            <p className="copyright">
                Todos los derechos reservados VerdiZone&copy;{copy}
            </p>
        </div>
    </footer>
  )
}

export default Footer