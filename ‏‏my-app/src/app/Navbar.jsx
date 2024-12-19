"use client"
import styles from './page.module.css'
import { useState } from 'react'
import logo from '../../public/logo.svg'
import menu from '../../public/icons8-menu.svg'
import Image from 'next/image'
import Link from 'next/link'
import datasLinks from './data'

const Navbar = () => {
    const widthImage = 40;
    const [menus,setMenu] = useState(false);
    
    const handleClick = () => {
        if(menus == true){
            setMenu(false)
        }else{
            setMenu(true)
        }
    }
  return (
    <div className={styles.nav}>
    <Link href={{pathname:'/'}}>
    <Image
      src={logo}
      alt='Logo Zajil'
      width={widthImage}
     />
     </Link>
    {menus&&
        <div className={styles.parent}>
        {datasLinks.map((link) => {
          return(<Link key={link.id} href={link.pathname} >{link.title}</Link>)
        })}
       </div>}
     <Image
      src={menu}
      alt='icon menu'
      width={25}
      onClick={handleClick}
     />
  </div>
  )
}

export default Navbar