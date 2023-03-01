import React from 'react'
import { Link } from 'react-router-dom'
import Video from '../Components/Video'
import style from '../Styles/Video.module.css'

export default function Home() {
  return (
    <>
      <div className={style.videos}>
        <Link to="/quiz">
          <Video />
        </Link>
        <Link to="/quiz">
          <Video />
        </Link>
        <Link to="/quiz">
          <Video />
        </Link>
        <Link to="/quiz">
          <Video />
        </Link>
        <Link to="/quiz">
          <Video />
        </Link>
      </div>
    </>
  )
}
