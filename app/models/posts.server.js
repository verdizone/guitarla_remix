export async function getPosts() {
  const respuesta = await fetch(
    `${process.env.API_URL}/posts/?populate=imagen`
  );
  const res = await respuesta.json();
  console.log(res);
  return res;
}

export async function getPost(url) {
  const respuesta = await fetch(
    `${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`
  );
  const res = await respuesta.json();
  return res;
}
