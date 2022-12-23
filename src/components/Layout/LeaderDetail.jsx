import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'

// Components
import Footer from './Footer'
import MainHeader from './MainHeader'
import FooterMob from '../Layout/FooterMob'

// Images
import Component_226_5 from '../../Images/Component_226_5.svg'

// Icons
import { FaChevronRight } from 'react-icons/fa'

// Dummy Images
const user = "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"

// Dummy array 
const leaders = [
    { id: 1 }, { id: 2 }, { id: 3 }
]

const LeaderDetail = () => {

    const navigate = useNavigate();
    useEffect(()=>{
        Aos.init({duration: 1000, delay: 130});
    },[]);
    return (
        <>
            <div>
            <MainHeader img="c_img_team sm-carrer-img" name="Leadership Team" title="People who made us what we are" />

                <div className="container">
                    <div style={{ padding: "120px 0px" }} className="sm-pt3">
                        <div className="d-flex justify-content-between sm-gap-20 sm-scroll">
                            {leaders.map((data, key) =>
                                <div className={data.id === 1 ? "leader_box_1" : "leader_box"} key={data.id} onClick={() => navigate(`/leaderDetail/${data.id}`)}>
                                    <img src={user} alt="leaders" className="leader_img sm-carrer-img" />
                                    <div className="leader_box_2">
                                        <div style={{  fontSize: "25px" }} className="sm-20">Anil Tiwari</div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div style={{ fontSize: "22px" }} >Managing Director</div>
                                            {data.id !== 1 && 
                                            <FaChevronRight style={{ color: "#1F568C" }} />}
                                        </div>
                                    </div>
                                    <div className="arrow-triangle">
                                        {data.id === 1 &&
                                            <div className="triangle-down"></div>
                                        }
                                    </div>
                                </div>
                            )}
                        </div>

                        <div style={{ paddingTop: "77px" }} className="d-flex align-items-center justify-content-between sm-pt2" data-aos="fade-up">
                            <div style={{ color: "#27187F", fontSize: "30px" }}><b className='sm-25'>Anil Tiwari</b></div>
                            <img src={Component_226_5} alt="logo" className='sm-none'/>
                        </div>
                        <div className="row mt-4" >
                            <div className="col-lg-12 col-md-12 col-12" data-aos="fade-up">
                                <div style={{ color: "#00155A", fontSize: "18px" }} className='sm-16'>With a proven portfolio of IT Solutions & Services, Techigent has been delivering IT Infrastructure- Products, Services & Solutions and Business Software Solutions to a wide range of industry verticals including - Banking and Financial Services, Retail Distribution, Pharmaceuticals, Utilities and Real Estate. It’s ready to deploy product portfolio comprises of turnkey IT Solutions that help new age businesses leverage varied sets of business data and information.</div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-12" style={{marginTop:"50px"}} data-aos="fade-up">
                                <div style={{ color: "#00155A", fontSize: "18px" }} className="sm-16">With a proven portfolio of IT Solutions & Services, Techigent has been delivering IT Infrastructure- Products, Services & Solutions and Business Software Solutions to a wide range of industry verticals including - Banking and Financial Services, Retail Distribution, Pharmaceuticals, Utilities and Real Estate. It’s ready to deploy product portfolio comprises of turnkey IT Solutions that help new age businesses leverage varied sets of business data and information.</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="footer_up">
                <div className="sm-none">
                    <Footer />
                </div>
                <div className="lg-none">
                    <FooterMob />
                </div>
            </div>
            </div>
        </>
    )
}

export default LeaderDetail