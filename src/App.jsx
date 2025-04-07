import React from 'react'
import Home from './Pages/home/Home'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './Pages/login/Login'
import List from './Pages/list/List'
import Single from './Pages/single/Single'
import New from './Pages/new/New'
import NewCase from './components/case mangement/NewCase'
import Cases from './components/case mangement/Cases'
import AssignedCases from './components/case mangement/AssignedCases'
import Status from './components/case mangement/Status'
import JudgeDiretory from './components/judge&lawyer/JudgeDiretory'
import LawyerDirectory from './components/judge&lawyer/LawyerDirectory'

export default function App() {
  return (
  //  <Home/>
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
        </Route>

        <Route path="cases_mgmt">
          <Route path="cases" element={<Cases/>}/>
          {/* <Route path=":userId" element={<Single/>}/> */}
          <Route path="newcase" element={<NewCase/>}/>
          <Route path="assignedCase" element={<AssignedCases/>}/>
          <Route path="status" element={<Status/>}/>
          
        </Route>

        <Route path="judge_lawyer">
          <Route path="judgeDirectory" element={<JudgeDiretory/>}/>
          {/* <Route path=":userId" element={<Single/>}/> */}
          <Route path="lawyerDirectory" element={<LawyerDirectory/>}/>
          
        </Route>

        <Route path="products">
          <Route index element={<List/>}/>
          <Route path=":productId" element={<Single/>}/>
          <Route path="new" element={<New/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  </div>
  )
}
