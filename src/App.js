import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout'
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Quiz from './Pages/Quiz'
import Result from './Pages/Result'
import Signup from './Pages/Signup'

export default function App() {
  return (
    <>
      <NavBar />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Layout>
    </>
  )
}
