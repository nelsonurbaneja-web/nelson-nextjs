import Link from 'next/link'
import React from 'react'
import styles from '../PageHeader/PageHeader.module.scss'

const PageHeader = () => {
  return (
    <header className={styles.main_header}>
      <div><img src="/nextjs.svg" alt="logo next"/></div>
      <nav>
        <ul className={styles.flexMenu}>
          <li><Link href="/"><a>Inicio</a></Link></li>
          <li><Link href="/blog"><a>Mi blog</a></Link></li>
          <li><Link href="/blog/3"><a>Mi blog 3</a></Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default PageHeader