import React from 'react'
import { useNavigate } from 'react-router-dom'

// Images
import Component_161_1 from '../../Images/Component_161_1.svg'
import facebook from '../../Images/Icon awesome-facebook-square.svg'
import twitter from '../../Images/Icon awesome-twitter.svg'
import linkdin from '../../Images/Icon awesome-linkedin.svg'
import instagram from '../../Images/Icon awesome-instagram.svg'

const FooterMob = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="footer_mob">
                <div className="container">
                    <div className="d-flex justify-content-center sm-pb2" onClick={()=> navigate("/")}>
                        <img src={Component_161_1} alt="logo" width="164px" height="44px" />
                    </div>
                    <div className="d-flex align-items-center justify-content-between footer_mob_border sm-pb2" style={{ width:"100%",paddingTop:"20px", cursor: "pointer" }}>
                        <img src={facebook} alt="icons" width="30px" height="30px" />
                        <img src={twitter} alt="icons" width="34px" height="27px" />
                        <img src={linkdin} alt="icons" width="27px" height="27px" />
                        <img src={instagram} alt="icons" width="30px" height="30px" />
                    </div>
                    <div className="footer_mob_border sm-pt2">
                        <div className="sm-14 text-center"><b>Techigent Technologies Pvt Ltd © 2021. All rights Reserved.</b></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterMob