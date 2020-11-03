import Layout from '@layouts/Layout'
import { getAllPost, getPostBySlug } from '@utils/postAPI'
import React from 'react'
import s from './[slug].scss'

export default function Post({post}) {

    const head = {
        meta_keywords: post.meta_keywords,
        meta_description: post.meta_description,
        title: post.title
    }

    return (
        <Layout head={head}>
            <div className={s.Wrapper}>
                <h1 className={s.Title}>{post.title}</h1>
                <div 
                    className={s.Content} 
                    dangerouslySetInnerHTML={{__html: post.content}} 
                />
            </div>
            
        </Layout>
    )
}


const Tag = ({tag}) => {
    return (
        <Link href={`/tag/${tag}`}><a className={s.Tag}>{tag}</a></Link>
    )
}

export async function getStaticProps(context) {
    return {
        props: {
            post: await getPostBySlug(context.params.slug)
        }
    }
}

export async function getStaticPaths(){
    let paths = await getAllPost()    
    paths = paths.map(post => ({        
        params: {slug: post.slug}
    }));    
    
    return {
        paths: paths,
        fallback: false
    }
}