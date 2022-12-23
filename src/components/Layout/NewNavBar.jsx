import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

// Images
import techigent_logo from '../../Images/techigent_logo.png'
import Component_235_1 from '../../Images/Component_235_1.png'

// Icons
import { BiChevronDown } from 'react-icons/bi'
import { FaBars, FaTimes } from 'react-icons/fa'

const NewNavBar = () => {

    const navigate = useNavigate();
    const [toggler, setToggler] = useState(false);

    const ToggleHandler = () => {
        if (toggler) {
            setToggler(false);
        } else {
            setToggler(true);
        }
    }

    return (
        <>
            <nav className="navbar_css">
                <div className="container">
                    <div id="navbar">
                        <div className="res_menu">
                            <div id="mobile" onClick={ToggleHandler}>
                                {toggler ? <FaTimes className='toggle-icons' /> : <FaBars className='toggle-icons' />}
                            </div>
                            <div className="res_logo">
                                <img onClick={() => navigate('/')} src={techigent_logo} className="main-logo" width="174px" height="53px" alt="Logo" style={{ cursor: "pointer" }} />
                            </div>
                        </div>
                        <div>
                            <ul id="nav_list" className={toggler ? "nav_list active-navbar" : "nav_list"}>
                                <li className="nav_list">
                                    <div className="dropdown">
                                        <button className="btn btn-nav" type="button" id="dropdownMenuButton" data-toggle="dropdown" style={{ color: "#111111", fontSize: "18px" }} aria-haspopup="true" aria-expanded="false">
                                            <div className="d-flex align-items-center">
                                                <div classNameName="nav_lists">Solutions</div>
                                                <BiChevronDown style={{ color: "#00155A", fontSize: "22px" }} />
                                            </div>
                                        </button>
                                        <div className="dropdown-menu nav_drop_box" aria-labelledby="dropdownMenuButton">
                                            <Link onClick={()=> setToggler(false)} className="dropdown-item" to="/product&service/endpoints">Infrastructure Solutions</Link>
                                            <Link onClick={()=> setToggler(false)} className="dropdown-item" to="/product&service/hardware-solutions">Hardware Solutions</Link>
                                            <Link onClick={()=> setToggler(false)} className="dropdown-item" to="/product&service/software-solutions">Software Solutions</Link>
                                            <Link onClick={()=> setToggler(false)} className="dropdown-item" to="/">Others</Link>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav_list">
                                    <div className="dropdown">
                                        <button className="btn btn-nav" type="button" id="dropdownMenuButton" data-toggle="dropdown" style={{ color: "#111111", fontSize: "18px" }} aria-haspopup="true" aria-expanded="false">
                                            <div className="d-flex align-items-center">
                                                <div classNameName="nav_lists">Company</div>
                                                <BiChevronDown style={{ color: "#00155A", fontSize: "22px" }} />
                                            </div>
                                        </button>
                                        <div className="dropdown-menu nav_drop_box" aria-labelledby="dropdownMenuButton">
                                            <Link onClick={()=> setToggler(false)} className="dropdown-item" to="/about" >About Us</Link>
                                            <Link onClick={()=> setToggler(false)} className="dropdown-item" to="/leadership_team" >Leadership Team</Link>
                                            <Link onClick={()=> setToggler(false)} className="dropdown-item" to="/awards&recogination" >Awards & Recognitions</Link>
                                            <Link onClick={()=> setToggler(false)} className="dropdown-item" to="/case-study" >Case Studies</Link>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav_list">
                                    <div className="dropdown">
                                        <button className="btn btn-nav" type="button" id="dropdownMenuButton" data-toggle="dropdown" style={{ color: "#111111", fontSize: "18px" }} aria-haspopup="true" aria-expanded="false">
                                            <div className="d-flex align-items-center">
                                                <div classNameName="nav_lists">Newsroom</div>
                                                <BiChevronDown style={{ color: "#00155A", fontSize: "22px" }} />
                                            </div>
                                        </button>
                                        <div className="dropdown-menu nav_drop_box" aria-labelledby="dropdownMenuButton">
                                            <Link onClick={()=> setToggler(false)} className="dropdown-item" to="/gallery" >Gallery</Link>
                                            <Link onClick={()=> setToggler(false)} className="dropdown-item" to="/news" >News & Events</Link>
                                            <Link onClick={()=> setToggler(false)} className="dropdown-item" to="/blogs&post" >Blogs & Posts</Link>
                                        </div>
                                    </div>
                                </li>
                                <li className="d-flex align-items-center" onClick={() => { setToggler(false); navigate('/contact')}}>
                                    <div className="nav_lists">Contact Us</div>
                                </li>
                                <li className="d-flex align-items-center" onClick={() => { setToggler(false); navigate('/careers')}}>
                                    <div className="nav_lists">Careers</div>
                                </li>
                                <li className="nav_list">
                                    <div className="dropdown">
                                        <button className="btn btn-nav" type="button" id="dropdownMenuButton" data-toggle="dropdown" style={{ color: "#111111", fontSize: "18px" }} aria-haspopup="true" aria-expanded="false">
                                            <div className="d-flex align-items-center">
                                                <img src={Component_235_1} alt="profile" width="50px" height="50px" />
                                                <BiChevronDown style={{ color: "#00155A", fontSize: "25px" }} />
                                            </div>
                                        </button>
                                        <div className="dropdown-menu nav_drop_box" aria-labelledby="dropdownMenuButton">
                                            <Link onClick={()=> setToggler(false)} className="dropdown-item" to="/gallery" >Profile</Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NewNavBar 