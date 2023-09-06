import React from "react";
import "./Suggestions.css";
import { Avatar } from "@mui/material";

function Sugesstions() {
  return <><div className="suggestions">
    <div className="suggestions__title"></div>Suggestions for you </div>
    <div className="sugesstions__usernames">
     
      <div className="suggesstion__username">

        <div className="username__left">
          <span className="avatar">
            <Avatar>B</Avatar>
            
          </span>
          <div className="username__info">
            <span className="username">bhanu_</span>
            <span className="relation">New to Instagram</span>

          </div>
        </div>
        <button  className="follow__button">Follow</button>
      </div>

      <div className="suggesstion__username">

        <div className="username__left">
          <span className="avatar">
            <Avatar>G</Avatar>
            
          </span>
          <div className="username__info">
            <span className="username">gungun_</span>
            <span className="relation">New to Instagram</span>

          </div>
        </div>
        <button  className="follow__button">Follow</button>
      </div>
      <div className="suggesstion__username">

        <div className="username__left">
          <span className="avatar">
            <Avatar>M</Avatar>
            
          </span>
          <div className="username__info">
            <span className="username">mansi_</span>
            <span className="relation">New to Instagram</span>

          </div>
        </div>
        <button  className="follow__button">Follow</button>
      </div>
      <div className="suggesstion__username">

        <div className="username__left">
          <span className="avatar">
            <Avatar>V</Avatar>
            
          </span>
          <div className="username__info">
            <span className="username">vanshika_</span>
            <span className="relation">New to Instagram</span>

          </div>
        </div>
        <button  className="follow__button">Follow</button>
      </div>

      <div className="suggesstion__username">

        <div className="username__left">
          <span className="avatar">
            <Avatar>O</Avatar>
            
          </span>
          <div className="username__info">
            <span className="username">oshi_</span>
            <span className="relation">New to Instagram</span>

          </div>
        </div>
        <button  className="follow__button">Follow</button>
      </div>
    </div></>;
}

export default Sugesstions;
 
