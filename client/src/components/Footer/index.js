import React from "react";
import "./footer.css"


import '../../index.css'


function Footer() {
    return (
    
     <div className="btm-footer product-font">
        <div className="d-flex fixed-bottom align-items-center footer-color justify-content-between footerDiv">
            <p className="pt-3 created-by uil uil-copyright"><span> E-Shop 2023</span></p>
            
            <p className='contact pt-3'>Contact for inquiries on
            <a className="github-icon" href="https://github.com/samadams412/e-shop" target='blank' alt="Github Icon" >
            <i className="mx-1 uil uil-github"></i>
            </a>
            </p>
        </div>
     </div>

    )
}

export default Footer;