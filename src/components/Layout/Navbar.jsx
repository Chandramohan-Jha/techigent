import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

// Images
import techigent_logo from '../../Images/techigent_logo.png'
import Component_235_1 from '../../Images/Component_235_1.png'

// Icons
import { BiChevronDown } from 'react-icons/bi'

const Navbar = () => {

    const navigate = useNavigate();
    const [hide, setHide] = useState(0);

    return (
        <>
            <div className="navbar_css">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between">
                        <img onClick={() => navigate('/')} src={techigent_logo} width="174px" height="53px" alt="Logo" style={{ cursor: "pointer" }} />
                        <div className="d-flex align-items-center" style={{ gap: "44px" }}>
                            <div className="dropdown_effect" style={{ position: "relative" }}>
                                <div className="d-flex align-items-center" onClick={() => setHide(1)}>
                                    <div className="nav_lists">Solutions</div>
                                    <BiChevronDown style={{ color: "#00155A", fontSize: "22px" }} />
                                </div>
                                <div className={hide === 1 ? "nav_drop_box" : "hide"} onClick={()=>setHide(0)}>
                                    <div>
                                        <Link style={{ textDecoration: "none" }} to="/product&service/endpoints" >Infrastructure Solutions</Link>
                                    </div>
                                    <div>
                                        <Link style={{ textDecoration: "none" }} to="/product&service/hardware-solutions" >Hardware Solutions</Link>
                                    </div>
                                    <div>
                                        <Link style={{ textDecoration: "none" }} to="/product&service/software-solutions" >Software Solutions</Link>
                                    </div>
                                    <div>
                                        <Link style={{ textDecoration: "none" }} to="/" >Others</Link>
                                    </div>
                                </div>
                            </div>
                            <div style={{ position: "relative" }}>
                                <div className="d-flex align-items-center" onClick={() => setHide(2)}>
                                    <div className="nav_lists">Company</div>
                                    <BiChevronDown style={{ color: "#00155A", fontSize: "22px" }} />
                                </div>
                                <div className={hide === 2 ? "nav_drop_box" : "hide"} onClick={()=>setHide(0)}>
                                    <div>
                                        <Link style={{ textDecoration: "none" }} to="/about" >About Us</Link>
                                    </div>
                                    <div>
                                        <Link style={{ textDecoration: "none" }} to="/leadership_team" >Leadership Team</Link>
                                    </div>
                                    <div>
                                        <Link style={{ textDecoration: "none" }} to="/awards&recogination" >Awards & Recognitions</Link>
                                    </div>
                                    <div>
                                        <Link style={{ textDecoration: "none" }} to="/case-study" >Case Studies</Link>
                                    </div>
                                </div>
                            </div>
                            <div style={{ position: "relative" }}>
                                <div className="d-flex align-items-center" onClick={() => setHide(3)}>
                                    <div className="nav_lists">Newsroom</div>
                                    <BiChevronDown style={{ color: "#00155A", fontSize: "22px" }} />
                                </div>
                                <div className={hide === 3 ? "nav_drop_box" : "hide"} onClick={()=>setHide(0)}>
                                    <div>
                                        <Link style={{ textDecoration: "none" }} to="/gallery" >Gallery</Link>
                                    </div>
                                    <div>
                                        <Link style={{ textDecoration: "none" }} to="/news" >News & Events</Link>
                                    </div>
                                    <div>
                                        <Link style={{ textDecoration: "none" }} to="/blogs&post" >Blogs & Posts</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center" onClick={() => navigate('/contact')}>
                                <div className="nav_lists">Contact Us</div>
                            </div>
                            <div className="d-flex align-items-center" onClick={() => navigate('/careers')}>
                                <div className="nav_lists">Careers</div>
                            </div>
                            <div className="d-flex align-items-center">
                                <img src={Component_235_1} alt="profile" width="50px" height="50px" />
                                <BiChevronDown style={{ color: "#00155A", fontSize: "25px" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar