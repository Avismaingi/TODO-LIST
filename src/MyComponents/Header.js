import React from 'react'
import PropTypes from 'prop-types'

export default function Header(props) {

    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            {props.aboutSection ? <li className="nav-item"> 
                                <a className="nav-link" href="/about">About</a>
                            </li> : ""}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

Header.defaultProps = {
    title: "Your Title Here",
}

Header.propTypes = {
    title: PropTypes.string,
    aboutSection: PropTypes.bool.isRequired
}