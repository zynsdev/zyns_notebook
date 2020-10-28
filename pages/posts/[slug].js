import { getAllPost, getPostBySlug } from '@utils/postAPI'
import React from 'react'

export default function Post({post}) {
    return (
        <div>
            <h2>{post.title}</h2>
            <div dangerouslySetInnerHTML={{__html: post.content}}/>            
        </div>
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