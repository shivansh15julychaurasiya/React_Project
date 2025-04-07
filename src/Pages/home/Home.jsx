import React from 'react'
import "./home.scss"
import Chart from '../../components/chart/Chart'
// import Featured from '../../components/features/Featured'
import Widget from '../../components/widget/Widget'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/features/Featured'
import Table from '../../components/table/Table'
import Widgets from '../../components/widget/Widgets'


export default function Home() {
  return (
    <div className="home">
        <Sidebar/>
        <div className="homeContainer">
            <Navbar/>
            <Widgets/>
           
            
            {/* <div className="charts">
                <Featured/>
                <Chart/>
            </div> */}
            <div className="listContainer">
              <div className="listTitle">Latest Transaction</div>
              <Table/>
            </div>
        </div>
    </div>
  )
}
