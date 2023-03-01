import React from 'react'
import Analysis from '../Components/Analysis'
import Answers from '../Components/Answers'
import CheckBox from '../Components/CheckBox'
import Question from '../Components/Question'
import Summary from '../Components/Summary'

export default function Result() {
  return (
    <>
      <Summary />
      <Analysis />
      <Question>
        <Answers>
          <CheckBox />
          <CheckBox />
          <CheckBox />
          <CheckBox />
          <CheckBox />
          <CheckBox />
          <CheckBox />
          <CheckBox />
          <CheckBox />
          <CheckBox />
        </Answers>
      </Question>
    </>
  )
}
