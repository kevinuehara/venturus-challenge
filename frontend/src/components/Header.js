import React from 'react'
import '../style/header.css'

const Header = () => {
    return (<div>
        <nav className="navbar navbar-expand-lg navbar-light navbar-styled">
            <a className="navbar-brand" href="#"><h5 className="venturus-name">Venturus Sports</h5></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Kevin Uehara
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Friends List</a>
                            <a className="dropdown-item" href="#">Saved Items</a>
                            <a className="dropdown-item" href="#">Notification</a>
                            <a className="dropdown-item" href="#">User Preferences</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Log out</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>)
}

export default Header