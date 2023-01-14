
export async function getCurso(){
    const respuesta = await fetch(`${process.env.API_URL}/curso?populate=imagen`)
    const res = await respuesta.json()
    return res
}