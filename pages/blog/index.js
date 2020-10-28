import Layout from '@layouts/Layout'
import { getAllPost } from '@utils/postAPI'
import React from 'react'
import s from './index.scss'

export default function Blog({posts}) {

    const head = {
        meta_keywords: "blog, lập trình, javascript, js",
        meta_description: "Zyns's Notebook - Nhật kí trai ngành dev",
        title: "Blog | Zyns Notebook"
    }
    
    return (
        <Layout head={head}>
        <div className={s.Wrapper}>
            <h1 className={s.Blog}> {"< Blog />"}</h1>
            <div className={s.Des}>
                Những thứ linh tinh mà hắn tưởng hắn biết rồi
            </div>
            <div className={s.ListPost}>

            </div>
        </div>
        </Layout>
    )
}

export async function getStaticProps() {    
    return {
        props: {
            posts: await getAllPost()            
        }
    }
}