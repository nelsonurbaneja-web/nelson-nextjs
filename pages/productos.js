
import Image from 'next/image'
import { NextSeo } from 'next-seo';


const Productos = ({ products }) =>  {
  return (
    <>
      <NextSeo
        title={`Página Inicial | ${process.env.APP_NAME}`}
        description="Esta es la página inicial del blog"
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/nextjs.svg',
          },
        ]}
      />
      <main>
        <h1>Productos</h1>
        {console.log(products)}
        {
          products.productos.map(p => 
            <div>
              <h4>{p.name}</h4>
              <h5>{p.description}</h5>
              <p>{p.price}</p>
            </div>
          )
        }
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const response = await fetch("https://porto-store.herokuapp.com/product")
  const data = await response.json()
  return {
    props: {
      products: data
    }
  }
}

export default Productos