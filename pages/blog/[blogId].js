import Head from 'next/head'
import { useRouter } from 'next/router';
import Error from 'next/error';

const BlogCurrent = ({post, code}) =>{
  const router = useRouter()

  if(code !== 200) {
    return <Error statusCode={code} />
  }

  return (
    <>
      <Head>
        <title>Blog {router.query.blogId} | {process.env.APP_NAME}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      
      {console.log(post, code)}
      <div key={post.id}>
        <h4>ESTAS EN EL  post{post.id}</h4>
       <h4>{post.title}</h4>
        <p>{post.body}</p>
      </div>
      </main>
    </>
  )
}

BlogCurrent.getInitialProps = async (context) => {
  try {
    const { blogId } = context.query
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`)
    const data = await response.json()
    return {
      post: data, 
      code: response.status
    }
  } catch (error) {
    return {
      post: null, 
      code: response.status
    }
  }
}
export default BlogCurrent