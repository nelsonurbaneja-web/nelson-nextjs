import Head from 'next/head'
import Link from 'next/link'

const Blog = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Blog | {process.env.APP_NAME}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        {/* prefetch le dice a next que el enlace es impotante que lo vaya precargando solo carga HTML CSS Y JS no intialProps solo funciona en prod*/}
      <main>
        <h1>Posts: </h1>
        <div>
          {
            posts.map(post => 
              <div key={post.id}>
                <Link href={`/blog/${post.id}`} ><a><h4>leer post{post.id}</h4></a></Link>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
              </div>
            )
          }
        </div>
      </main>
    </>
  )
}

export const getStaticProps = async () => {

  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()

  // let [req1, req2] = await Promise.all([
  //   fetch('https://jsonplaceholder.typicode.com/posts'),
  //   fetch('https://jsonplaceholder.typicode.com/comments')
  // ])
 
  // const data = await req1.json()
  // const data2 = await req2.json()

  return {
    props: {
      posts: data,
      // comments: data2
    }
  }
}

export default Blog