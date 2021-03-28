import Link from 'next/link'
import React from 'react'

const PageHeader = () => {
  return (
    <header>
      <div><img src="/nextjs.svg" alt="logo next"/></div>
      <nav>
        <ul>
          <li><Link href="/"><a>Inicio</a></Link></li>
          <li><Link href="/blog"><a>Mi blog</a></Link></li>
          <li><Link href="/blog/3"><a>Mi blog 3</a></Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default PageHeader