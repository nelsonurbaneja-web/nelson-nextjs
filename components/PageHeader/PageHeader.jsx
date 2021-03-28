import Link from 'next/link'
import React from 'react'
import styles from '../PageHeader/PageHeader.module.scss'

const PageHeader = () => {
  return (
    <header className={styles.main_header}>
      <div><img src="/nextjs.svg" alt="logo next"/></div>
      <nav>
        <ul className={styles.flexMenu}>
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/blog">Mi blog</Link></li>
          <li><Link href="/productos">Productos</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default PageHeader