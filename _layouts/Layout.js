import NavBar from '@includes/NavBar'
import Head from 'next/head'
import React from 'react'
import s from './Layout.scss'

export default function Layout({children, head}) {
    return (
        <>
        <Head>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
            <title>{head.title}</title>
            <meta name="description" content={head.meta_description} />
            <meta name="keywords" content={head.meta_keywords} />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        </Head>
        <div className={s.Layout}>
            <NavBar />  
            {children}
        </div>
        </>
    )
}
