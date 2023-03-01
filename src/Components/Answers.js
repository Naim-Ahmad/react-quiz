import React from 'react'
import style from '../Styles/Quiz.module.css'

export default function Answers({ children }) {
  return (
    <>
      <div className={style.answers}>{children}</div>
    </>
  )
}
