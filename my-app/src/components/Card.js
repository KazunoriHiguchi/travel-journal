import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {
  return (
      <section>
        <img src={props.imageUrl} className="picture"></img>
        <div className="textArea">
          <div className="text-header">
            <FontAwesomeIcon icon={faLocationDot} size="2xs" className="textArea-icon"/>
            <span className="location">{props.location}</span>
            <span>
              <a href={props.googleMapUrl} className="googleMapUrl">
                View on Google Maps
              </a>
            </span>
          </div>
          <h2>{props.title}</h2>
          <h4>
            {props.startDate}-{props.endDate}
          </h4>
          <p>{props.description}</p>
          <hr></hr>
        </div>
      </section>
  );
}
