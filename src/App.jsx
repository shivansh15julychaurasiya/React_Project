import React from 'react'
import Home from './Pages/home/Home'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './Pages/login/Login'
import List from './Pages/list/List'
import Single from './Pages/single/Single'
import New from './Pages/new/New'

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

        <Route path="users">
          <Route index element={<List/>}/>
          <Route path=":userId" element={<Single/>}/>
          <Route path="new" element={<New/>}/>
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
