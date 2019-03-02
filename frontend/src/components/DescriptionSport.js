import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPuzzlePiece, faTrophy, faMapSigns} from "@fortawesome/free-solid-svg-icons";

import '../style/descriptionSport.css'

const DescriptionSport = () => {
    return (
        <div className="description-container">
            <div className="row">
                <div className="col-md-4 col-sm-12">
                    <div className="row">
                        <div className="image-item">
                            <FontAwesomeIcon icon={faPuzzlePiece} color="#3ac5a9"
                                size="3x" />
                        </div>
                        <div className="description-item">
                            <span style={{ color: '#777777' }}>Sport type</span>
                            <h3 style={{ fontWeight: 'bold' }}>Cycling</h3>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-12">
                    <div className="row">
                        <div className="image-item">
                            <FontAwesomeIcon icon={faTrophy} color="#3ac5a9"
                                size="3x" />
                        </div>
                        <div className="description-item">
                            <span style={{ color: '#777777' }}>Mode</span>
                            <h3 style={{ fontWeight: 'bold' }}>Advanced</h3>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-12">
                    <div className="row">
                        <div className="image-item">
                            <FontAwesomeIcon icon={faMapSigns} color="#3ac5a9"
                                size="3x" />
                        </div>
                        <div className="description-item">
                            <span style={{ color: '#777777' }}>Route</span>
                            <h3 style={{ fontWeight: 'bold' }}>30 miles</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DescriptionSport