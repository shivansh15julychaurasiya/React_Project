import React from "react";
import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

export default function Widget({type}) {

   let data;
   console.log(type)

   // temporary
   const amount =100
  //  const diff=20
   switch(type){
    case "user":  
      data={
        title:"USERS",
        isMoney:false,
        link:"See all user",
        icon:<PersonOutlinedIcon className="icon"  style={{
          color: "crimson",
          backgroundColor: "rgba(255, 0, 0, 0.2)",
        }}/>,
      };
      break;
      case "order":
      data={
        title:"ORDERS",
        isMoney:false,
        link:"view all orders",
        icon:<ShoppingCartOutlinedIcon className="icon"  style={{
          backgroundColor: "rgba(218, 165, 32, 0.2)",
          color: "goldenrod",
        }}/>,
      };
      break;
      case "earning":
      data={
        title:"EARNINGS",
        isMoney:true,
        link:"view net earning",
        icon:<MonetizationOnOutlinedIcon className="icon"   style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}/>,
      };
      break;
      case "balance":
      data={
        title:"BALANCE",
        isMoney:true,
        link:"See details",
        icon:<AccountBalanceWalletOutlinedIcon className="icon"   style={{
          backgroundColor: "rgba(128, 0, 128, 0.2)",
          color: "purple",
        }}/>,
      };
      break;
      

   }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"} {amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          20%
        </div>
      </div>
    </div>
);
}
