import React from 'react'
import { useNavigate } from 'react-router-dom'

// Images
import Component_161_1 from '../../Images/Component_161_1.svg'
import facebook from '../../Images/Icon awesome-facebook-square.svg'
import twitter from '../../Images/Icon awesome-twitter.svg'
import linkdin from '../../Images/Icon awesome-linkedin.svg'
import instagram from '../../Images/Icon awesome-instagram.svg'

const Footer = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <div>
                            <div className="twenty"><b>COMPANY</b></div>
                            <ul className="footer_ul">
                                <li onClick={() => navigate('/about')}>About Us</li>
                                <li onClick={() => navigate('/gallery')}>Gallery</li>
                                <li onClick={() => navigate('/careers')}>Careers</li>
                                <li onClick={() => navigate('/awards&recogination')}>Awards</li>
                            </ul>
                        </div>
                        <div>
                            <div className="twenty"><b>OTHERS</b></div>
                            <ul className="footer_ul">
                                <li onClick={() => navigate('/product&service/endpoints')}>Products & Services</li>
                                <li onClick={() => navigate('/product&service/endpoints')}>Solutions</li>
                                <li onClick={() => navigate('/case-study')}>Case Studies</li>
                                <li onClick={() => navigate('/blogs&post')}>Blogs</li>
                            </ul>
                        </div>
                        <div>
                            <div className="twenty"><b>HELP & LEGAL</b></div>
                            <ul className="footer_ul">
                                <li>Help & Support</li>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                                <li>Cookies Policy</li>
                            </ul>
                        </div>
                        <div>
                            <div className="twenty"><b>REACH US</b></div>
                            <div className="footer_div" style={{ width: "394px" }}>
                                <div><b>Mumbai Office</b></div>
                                <div>281-283, V-Mall, Near Sai Dham, W.E. Highway, Kandivali(East), Mumbai-400101.</div>
                                <div className="mt-4">+91 22 28700178/ +91 22 28700179 /+91 22 28700180</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ padding: "70px 40px 40px 40px" }}>
                    <div className="d-flex align-items-center justify-content-between footer_box">
                        <img src={Component_161_1} alt="logo" width="164px" height="44px" />
                        <div className="twenty"><b>Techigent Technologies Pvt Ltd © 2021. All rights Reserved.</b></div>
                        <div className="d-flex align-items-center" style={{ gap: "40px", cursor: "pointer" }}>
                            <img src={facebook} alt="icons" width="37px" height="37px" />
                            <img src={twitter} alt="icons" width="37px" height="30px" />
                            <img src={linkdin} alt="icons" width="30px" height="30px" />
                            <img src={instagram} alt="icons" width="37px" height="37px" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer