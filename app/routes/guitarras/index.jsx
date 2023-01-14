import {useLoaderData} from '@remix-run/react'  
import ListadoGuitarras from '~/components/listado-guitarras'
import {getGuitarras} from '~/models/guitarras.server'

export function meta(){
  return {
    title: 'GuitarLa - Tienda',
    descrption: 'GuitarLa - Nuestra colección de guitarras a la venta.'
  }
}

export async function loader(){
  const guitarras = await getGuitarras()
  return guitarras.data

}


function Tienda() {
  const guitarras = useLoaderData()
  return (
     <ListadoGuitarras 
      guitarras={guitarras}
     />
  )
}

export default Tienda