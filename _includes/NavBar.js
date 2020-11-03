import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import s from './NavBar.scss'
import { Menu } from '@utils/config';

export default function NavBar() {

    const [show, setShow] = useState(false)
    const [sticky, setSticky] = useState(false);

    const handleScroll = () => {
        window.scrollY > 0 ? setSticky(true) : setSticky(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const pathname = useRouter().pathname;


    return (
        <div className={`${s.NavBar} ${sticky && s.sticky}`}>
            
            <div className={s.Logo}>                
                <img src="/img/logo.png" alt="notebook" />
            </div>
            <div className={`${s.Toggle} ${show && s.show}`} onClick={() => setShow(!show)}/>
            <ul className={`${s.Menu} ${show && s.show}`}>
                {
                    Menu.map(el => 
                        <li key={el.link}><Link href={el.link}>
                            <a className={pathname==el.link ? s.active : undefined} target={el.suffixesIcon && "_blank"}>
                                <span>{el.name}</span>
                                {el.suffixesIcon}
                            </a>
                        </Link></li>
                    )
                }                
            </ul>
        </div>
    )
}
