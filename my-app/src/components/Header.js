import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAsia } from "@fortawesome/free-solid-svg-icons";

export default function Header () {
  return(
    <header>
    <FontAwesomeIcon icon={faEarthAsia} size="2x" className="header-icon"/>
      <h3>my travel journal</h3>
    </header>
  )
}