import { useLoaderData } from "@remix-run/react";
import { getGuitarra } from "~/models/guitarras.server";

export async function loader({ params }) {
  const { guitarraUrl } = params;
  const guitarra = await getGuitarra(guitarraUrl);
  
  if(guitarra.data.length === 0){
    throw new Response('', {
      status:404,
      statusText: 'Guitarra No Encontrada'
    })
  }

  return guitarra;
}

export function meta({data}){
  // console.log(data.data)
  if(!data){
    return{
      title:'GuitarLa - Guitarra No Encontrada',
      description: `Guitarra no encontrada`,
    }
  }
  return {
    title: `GuitarLa - ${data.data[0].attributes.nombre}`,
    description: `${data.data[0].attributes.descripcion}`
  }
}

function Guitarra() {
  const guitarra = useLoaderData();
  const { nombre, descripcion, precio, imagen } = guitarra.data[0].attributes;
  return (
    <div className="guitarra">
      <img
        className="imagen"
        src={imagen.data.attributes.url}
        alt={`Imagen de la guitarra ${nombre}`}
      />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">${precio}</p>
      </div>
    </div>
  );
}
export default Guitarra;
