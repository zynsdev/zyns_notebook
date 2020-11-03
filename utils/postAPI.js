import matter from 'gray-matter'
import md from './markdown'

export async function getAllPost(){
    const context = require.context('../_posts', false, /\.md$/);

    const posts = []
    for (const key of context.keys()){
        const fileContent = await import(`../_posts/${key.slice(2)}`)
        const meta = matter(fileContent.default)
        posts.push({
            date: key.slice(2, 12),
            slug: key.slice(2, -3),
            ...meta.data
        })
    }
    return posts.reverse();
}

export async function getPostBySlug(slug){    
    const fileContent = await import(`../_posts/${slug}.md`)
    const meta = matter(fileContent.default)    
    return {
        ...meta.data,
        content: md.render(meta.content),
        date: slug.slice(0, 10)               
    }
}

