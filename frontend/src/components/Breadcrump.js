import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from "@fortawesome/free-solid-svg-icons";

import '../style/breadcrump.css'

const Breadcrump = () => {
    return (<nav aria-label="breadcrumb" className="background-navbar">
        <ol className="breadcrumb breadcrump-styled">
            <li className="breadcrumb-item">
                <a href="#" className="item-styled">
                <FontAwesomeIcon icon={faHome} color='#2bc0a2'/>
                </a>
            </li>
            <li className="breadcrumb-item"><a href="#" className="item-styled">Page Name</a></li>
            <li className="breadcrumb-item"><a href="#" className="item-styled">...</a></li>
            <li className="breadcrumb-item active" aria-current="page">Current Page</li>
        </ol>
    </nav>)
}

export default Breadcrump