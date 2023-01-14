import imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'

export function meta(){
  return (
    {
      title: 'GuitarLA - Sobre Nosotros',
      desciption: 'Esta página describe la información acerca de la empresa',
    }
  )
}  
export function links(){
  return[
    {
      rel:'stylesheet',
      href:styles

    },
    {
      rel:'preload',
      href: imagen,
      as:'image'

    }
  ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">
        Nosotros
      </h2>
      <div className="contenido">
        <img src={imagen} alt="Imagen nosotros" />
      
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quisquam labore tempora, ab doloremque unde in. Consequatur ipsa vero eveniet? Ex architecto aperiam libero natus, pariatur quas atque rem asperiores?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quisquam labore tempora, ab doloremque unde in. Consequatur ipsa vero eveniet? Ex architecto aperiam libero natus, pariatur quas atque rem asperiores?</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros