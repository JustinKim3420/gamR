import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const Footer = ()=>{
    return(<div className="footer">
        <ul className="footer-list">
            <li className="footer-item">Dashboard</li>
            <li className="footer-item">Discover</li>
            <li className="footer-item">Events</li>
            <li className="footer-item">Create</li>
        </ul>
    </div>)
}

export default Footer