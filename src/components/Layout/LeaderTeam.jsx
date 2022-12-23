import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom' 
import Aos from 'aos'
import 'aos/dist/aos.css'

// Components
import Footer from './Footer'
import MainHeader from './MainHeader'
import FooterMob from '../Layout/FooterMob'

// Icons
import { FaChevronRight } from 'react-icons/fa'

// Dummy Images
const user = "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"

// Dummy array 
const leaders = [
    {id:1}, {id:2}, {id:3}
]

const LeaderTeam = () => {

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
                                <div className="leader_box" key={data.id} onClick={()=> navigate(`/leaderDetail/${data.id}`)} data-aos="flip-left">
                                    <img src={user} alt="leaders" className="leader_img sm-carrer-img" />
                                    <div className="leader_box_2">
                                        <div style={{ color: "#00155A", fontSize: "25px" }} className="sm-20">Anil Tiwari</div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div style={{ color: "#1F568C", fontSize: "22px" }} className="sm-18">Managing Director</div>
                                            <FaChevronRight style={{ color: "#1F568C" }} />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="d-flex justify-content-between sm-gap-20 sm-scroll" style={{marginTop:"65px"}}>
                            {leaders.map((data, key) =>
                                <div className="leader_box" key="1" onClick={()=> navigate('/leaderDetail')} data-aos="flip-left">
                                    <img src={user} alt="leaders" className="leader_img sm-carrer-img" />
                                    <div className="leader_box_2">
                                        <div style={{ color: "#00155A", fontSize: "25px" }} className="sm-20">Anil Tiwari</div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div style={{ color: "#1F568C", fontSize: "22px" }} className="sm-18">Managing Director</div>
                                            <FaChevronRight style={{ color: "#1F568C" }} />
                                        </div>
                                    </div>
                                </div>
                            )}
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

export default LeaderTeam