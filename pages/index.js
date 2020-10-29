import Layout from '@layouts/Layout'
import Link from 'next/link'
import React from 'react'
import s from './index.scss'

export default function Home() {

    const head = {
        meta_keywords: "blog, lập trình, javascript, js",
        meta_description: "Zyns's Notebook - Nhật kí trai ngành dev",
        title: "Zyns's Notebook - Code never lie, Bug never die"
    }

    return (
        <Layout head={head}>
            <div className={s.Wrapper}>
                <div className={s.Content}>
                    <h1 className={s.Name}>Zyns's Notebook</h1>
                    <div className={s.Des}>
                        Code never lie, Bug never die
                        <br />
                        Một chiếc nhật kí ghi lại hành trình theo đuổi ước mơ.
                    </div>
                    <Link href="/about"><a className={s.Button}>More about me →</a></Link>
                </div>                
            </div>            
        </Layout>
    ) 
}
