import React from 'react'
import style from '../Styles/MiniPlayer.module.css'

export default function MiniPlayer() {
  return (
    <div className={`${style.miniPlayer} ${style.floatingBtn}`}>
      <span className={`material-icons-outlined ${style.open}`}>
        {' '}
        play_circle_filled{' '}
      </span>
      <span className={`material-icons-outlined ${style.close}`}> close </span>
      <img src="./images/3.jpg" alt="" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  )
}
