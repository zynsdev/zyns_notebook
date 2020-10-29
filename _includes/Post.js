import Link from 'next/link'
import React from 'react'
import s from './Post.scss'

export default function Post(props) {
    const {
        title,
        description,
        date,
        imageUrl,
        tags,
        slug
    } = props

    return (        
        <div className={s.Post}>
            <Link href={`/post/${slug}`}>
                <img className={s.Image} src={imageUrl} alt={title}/>
            </Link>
            
            
            <div className={s.Content}>
                <div className={s.Tags}>
                {
                    tags.map(tag => <Tag key={tag} tag={tag} />)
                }
                </div>
                <Link href={`/post/${slug}`}>
                    <a className={s.Title}>{title}</a>
                </Link>
                
                <div className={s.Des}>{description}</div>
                <Link href={`/post/${slug}`}>
                    <a className={s.ReadMore}>Read more →</a>
                </Link>
            </div>
        </div>                
    )
}


const Tag = ({tag}) => {
    return (
        <Link href={`/tag/${tag}`}><a className={s.Tag}>{tag}</a></Link>
    )
}