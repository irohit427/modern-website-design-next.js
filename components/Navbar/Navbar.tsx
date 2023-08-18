import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import React, { Fragment } from 'react'
import styles from './navbar.module.css';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

const links = NAV_LINKS;

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Luminax</Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {NAV_LINKS.map(link =>  (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>

  )
}

export default Navbar