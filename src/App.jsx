import React from "react";
import Home from "./Pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./Pages/login/Login";
import List from "./Pages/list/List";
import Single from "./Pages/single/Single";
import New from "./Pages/new/New";
import Login from "./components/Login";
// import Cases from './components/case mangement/Cases'
// import AssignedCases from './components/case mangement/AssignedCases'
// import Status from './components/case mangement/Status'
import JudgeDiretory from "./components/judge&lawyer/JudgeDiretory";
import LawyerDirectory from "./components/judge&lawyer/LawyerDirectory";
import Search from "./components/Search";
import Dashboard from "./components/DashboardLayout";
import PDFViewer from "./components/pdf/PDFViewer";
import ForgotPassword from "./components/ForgotPassword";
// import { imageListClasses } from "@mui/material";

export default function App() {
  return (
    //  <Home/>
    <div className="App">
      <BrowserRouter>
        {/* <Routes>
          <Route path="/pdf" element={<PDFViewer />} />
        </Routes> */}
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>

          <Route path="home">
            <Route path="search" element={<Search />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot" element={<ForgotPassword />} />
          </Route>

          <Route path="judge_lawyer">
            <Route path="judgeDirectory" element={<JudgeDiretory />} />
            {/* <Route path=":userId" element={<Single/>}/> */}
            <Route path="lawyerDirectory" element={<LawyerDirectory />} />
          </Route>

          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


