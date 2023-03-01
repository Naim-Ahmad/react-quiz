import React from 'react'
import Answers from '../Components/Answers'
import CheckBox from '../Components/CheckBox'
import MiniPlayer from '../Components/MiniPlayer'
import ProgressBar from '../Components/ProgressBar'
import style from '../Styles/Quiz.module.css'

export default function Quiz() {
  return (
    <>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answers>
        <CheckBox />
        <CheckBox />
        <CheckBox />
        <CheckBox />
        <CheckBox />
        <CheckBox />
        <CheckBox />
        <CheckBox className={style.wrong} />
        <CheckBox />
        <CheckBox />
      </Answers>
      <ProgressBar />
      <MiniPlayer />
    </>
  )
}
