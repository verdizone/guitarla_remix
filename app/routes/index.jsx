import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "../models/guitarras.server";
import { getPosts } from "../models/posts.server";
import { getCurso } from "../models/curso.server";
import stylesGuitarras from "../styles/guitarras.css";
import stylesPosts from "../styles/blog.css";
import stylesCurso from "../styles/curso.css";
import ListadoGuitarras from "~/components/listado-guitarras";
import ListadoPosts from "~/components/listado-posts";
import Curso from "~/components/curso";

export function meta() {
  return {
    title: "GuitarLa - Remix",
    description: "Página de inicio de nuestra WEB. GuitarLa es una...",
  };
}
export function links() {
  return[
    {
      rel: "stylesheet",
      href: stylesGuitarras,
    },
    {
      rel: "stylesheet",
      href: stylesPosts,
    },
    {
      rel: "stylesheet",
      href: stylesCurso,
    },
  ];
}
export async function loader() {
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(), 
    getPosts(),
    getCurso(),
  ]);

  /* 
  const guitarras = await getGuitarras()
  const posts = await getPosts() 
  */
  console.log(guitarras);
  console.log(posts);
  console.log(curso);
  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data,
  };
}

function Index() {
  const { guitarras, posts, curso } = useLoaderData();

  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras 
          guitarras = {guitarras}
        />
      </main>
      <div>
        <Curso 
          curso={curso.attributes}
        />
      </div>
      <section className="contenedor">
        <ListadoPosts 
          posts={posts}
        />
      </section>
    </>
  );
}

export default Index;
