import Head from 'next/head'
import { NextSeo } from 'next-seo';

export default function Home() {
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
        <h1>Bienvenido</h1>
        <span>{process.env.API_URL}</span>
      </main>
    </>
  )
}
