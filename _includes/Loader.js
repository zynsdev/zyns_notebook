import React from 'react'
import s from  './Loader.scss'

export default function Loader() {
    return (
        <div className={s.Loader}>
            <img src="/img/loader.gif"/>
        </div>
    )
}
