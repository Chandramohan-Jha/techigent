import React, {useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

// Images 
import Component_226_5 from '../../Images/Component_226_5.svg'

// Components
import Footer from './Footer'
import MainHeader from './MainHeader'
import FooterMob from '../Layout/FooterMob'

// Icons
import { FaChevronRight } from 'react-icons/fa'

// Dummy images
const gallery = "https://images.unsplash.com/photo-1606819717115-9159c900370b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2FsbGVyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"

const Gallery = () => {
    useEffect(()=>{
        Aos.init({duration: 1000, delay: 130});
    },[]);
    return (
        <>
            <div className="gallery">
                <MainHeader img="c_img_gallery sm-carrer-img" name="Gallery" title="All Images and Videos" />
                <div style={{ paddingTop: "70px" }} data-aos="fade-up" className='sm-pt4'>
                    <div className="container" style={{ position: 'relative' }}>
                        <img src={Component_226_5} alt="logo" className="car_effect_03 sm-none" />
                        <div className="thirty sm-25" style={{ color: "#00155A", fontWeight: "bold", paddingTop: "10px" }}>Albums</div>
                        <div className="row sm-pt4" style={{ paddingTop: "70px" }}>
                            <div className="col-lg-4 col-md-4 col-12" data-aos="fade-up">
                                <div className="gallery_box ">
                                    <img src={gallery} width="100%" height="250px" alt="gallery" className="gall_img" />
                                    <div className="gall_cont d-flex align-items-center justify-content-between">
                                        <div className="twenty" style={{ color: "#00155A" }}>OSG Techotsav</div>
                                        <FaChevronRight />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12 sm-mt1" data-aos="fade-up">
                                <div className="gallery_box">
                                    <img src={gallery} width="100%" height="250px" alt="gallery" className="gall_img" />
                                    <div className="gall_cont d-flex align-items-center justify-content-between">
                                        <div className="twenty" style={{ color: "#00155A" }}>OSG Techotsav</div>
                                        <FaChevronRight />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12 sm-mt1" data-aos="fade-up">
                                <div className="gallery_box">
                                    <img src={gallery} width="100%" height="250px" alt="gallery" className="gall_img" />
                                    <div className="gall_cont d-flex align-items-center justify-content-between">
                                        <div className="twenty" style={{ color: "#00155A" }}>OSG Techotsav</div>
                                        <FaChevronRight />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row sm-pt1" style={{ paddingTop: "100px" }}>
                            <div className="col-lg-4 col-md-4 col-12 sm-mt1" data-aos="fade-up">
                                <div className="gallery_box">
                                    <img src={gallery} width="100%" height="250px" alt="gallery" className="gall_img" />
                                    <div className="gall_cont d-flex align-items-center justify-content-between">
                                        <div className="twenty" style={{ color: "#00155A" }}>OSG Techotsav</div>
                                        <FaChevronRight />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12 sm-mt1" data-aos="fade-up">
                                <div className="gallery_box">
                                    <img src={gallery} width="100%" height="250px" alt="gallery" className="gall_img" />
                                    <div className="gall_cont d-flex align-items-center justify-content-between">
                                        <div className="twenty" style={{ color: "#00155A" }}>OSG Techotsav</div>
                                        <FaChevronRight />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12 sm-mt1" data-aos="fade-up">
                                <div className="gallery_box">
                                    <img src={gallery} width="100%" height="250px" alt="gallery" className="gall_img" />
                                    <div className="gall_cont d-flex align-items-center justify-content-between">
                                        <div className="twenty" style={{ color: "#00155A" }}>OSG Techotsav</div>
                                        <FaChevronRight />
                                    </div>
                                </div>
                            </div>
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
        </>
    )
}

export default Gallery