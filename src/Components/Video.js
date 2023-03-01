import React from 'react'
import image from '../Assets/3.jpg'
import style from '../Styles/Video.module.css'

export default function Video() {
  return (
    <a href="quiz.html">
      <div className={style.video}>
        <img src={image} alt="" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        <div className={style.qmeta}>
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
    </a>
  )
}
