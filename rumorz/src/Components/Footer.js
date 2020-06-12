import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="page-footer">
            <div className="container">
                <hr/>
                <div className="row">
                    <p className="col-sm">
                        Intended for internal use only <br/>
                        &copy;{new Date().getFullYear()} Rumorz Inc | All rights reserved | Privacy
                    </p>
                </div>
            </div>
        </div>            
    )
}

export default Footer;