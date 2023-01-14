import Posts from "./posts"

function ListadoPosts({posts}) {
  return (
    <>
      <h2 className="headind">Blog</h2>
      <div className="blog">
        {posts.map(post=>(
          <Posts 
            post={post.attributes}
            key={post.id}
          />
        ))}
      </div>
    </>
  )
}

export default ListadoPosts