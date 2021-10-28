import React from "react";
import "./Header.css";
import News from "../../../Assets/News.png";
export default function Header() {
  return (
    <div id="header">
      <img src={News} id="header-logo" href="/"></img>
    </div>
  );
}
