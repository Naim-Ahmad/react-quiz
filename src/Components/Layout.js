import React from 'react'
import style from '../Styles/Layout.module.css'

export default function Layout({children}) {
  return (
    <main className={style.main}>
        <div className={style.container}>
            {children}
        </div>
    </main>
  )
}
