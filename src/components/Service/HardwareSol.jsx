import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'

// Components
import MainHeader from '../Layout/MainHeader'
import Footer from '../Layout/Footer'

// Images
import server from '../../Images/server.png'
import storage from '../../Images/storage.png'
import networking from '../../Images/networking.png'
import hci from '../../Images/hci.png'
import balance from '../../Images/balance.png'
import backup from '../../Images/backup.png'
import FooterMob from '../Layout/FooterMob'

const HardwareSol = () => {

    const navigate = useNavigate();
    useEffect(() => {
        Aos.init({ duration: 1000, delay: 130 });
      }, []);

    return (
        <>
            <div>
                <MainHeader img="c_img_hardware sm-carrer-img" name="Hardware Solutions" title="Server, Storage, Networking & more" />
                <div className="container">
                    <div>
                        <div style={{ fontSize: "19px", marginTop: "52px", borderBottom: "1px solid #D1D3D4", cursor: "pointer" }} className="d-flex align-items-center justify-content-between sm-scroll sm-14 sm-gap-10">
                            <div style={{paddingBottom: "20px" }} onClick={() => navigate('/product&service/endpoints')}><b>Infrastructure Solutions</b></div>
                            <div style={{ color: "#C51213", borderBottom: "2px solid #C51213", paddingBottom: "20px" }}><b>Hardware Solutions</b></div>
                            <div style={{paddingBottom: "20px" }} onClick={() => navigate('/product&service/software-solutions')}><b>Software Solutions</b></div>
                            <div style={{paddingBottom: "20px" }}><b>Others</b></div>
                        </div>
                    </div>

                    <div className="row sm-pt4" style={{ padding: "120px 0px 50px 0px" }} data-aos="fade-right">
                        <div className="col-lg-6 col-md-6 col-12">
                            <img src={server} alt="error" width="100%" height="357px" className='sm-carrer-img'/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div style={{ color: "#00155A", fontSize: "32px" }}><b className='sm-25'>Server</b></div>
                            <p className="mt-3" style={{ color: "#5D6186", fontSize: "16px", width: "75%" }}>We have everything for your IT Infrastructure needs ranging from computer hardware to software and solutions</p>
                            <div className="btn btn_know_more_ep mt-4 d-flex align-items-center justify-content-center">Know more</div>
                        </div>
                    </div>

                    <div className="row sm-pt4" style={{ padding: "50px 0px" }} data-aos="fade-left">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div style={{ color: "#00155A", fontSize: "32px" }}><b className='sm-25'>Storage</b></div>
                            <p className="mt-3" style={{ color: "#5D6186", fontSize: "16px", width: "75%" }}>We have everything for your IT Infrastructure needs ranging from computer hardware to software and solutions</p>
                            <div className="btn btn_know_more_ep mt-4 d-flex align-items-center justify-content-center sm-mb3">Know more</div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <img src={storage} alt="error" width="100%" height="357px" className='sm-carrer-img'/>
                        </div>
                    </div>

                    <div className="row sm-pt4" style={{ padding: "50px 0px 50px 0px" }} data-aos="fade-right">
                        <div className="col-lg-6 col-md-6 col-12">
                            <img src={networking} alt="error" width="100%" height="357px" className='sm-carrer-img'/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div style={{ color: "#00155A", fontSize: "32px" }}><b className='sm-25'>Networking</b></div>
                            <p className="mt-3" style={{ color: "#5D6186", fontSize: "16px", width: "75%" }}>We have everything for your IT Infrastructure needs ranging from computer hardware to software and solutions</p>
                            <div className="btn btn_know_more_ep mt-4 d-flex align-items-center justify-content-center">Know more</div>
                        </div>
                    </div>

                    <div className="row sm-pt4" style={{ padding: "50px 0px 50px 0px" }} data-aos="fade-left">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div style={{ color: "#00155A", fontSize: "32px" }}><b className='sm-25'>Hyper Conversion Infrastructure</b></div>
                            <p className="mt-3" style={{ color: "#5D6186", fontSize: "16px", width: "75%" }}>We have everything for your IT Infrastructure needs ranging from computer hardware to software and solutions</p>
                            <div className="btn btn_know_more_ep mt-4 d-flex align-items-center justify-content-center sm-mb3">Know more</div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <img src={hci} alt="error" width="100%" height="357px" className='sm-carrer-img'/>
                        </div>
                    </div>

                    <div className="row sm-pt4" style={{ padding: "50px 0px 50px 0px" }} data-aos="fade-right">
                        <div className="col-lg-6 col-md-6 col-12">
                            <img src={balance} alt="error" width="100%" height="357px" className='sm-carrer-img'/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div style={{ color: "#00155A", fontSize: "32px" }}><b className='sm-25'>Load Balance</b></div>
                            <p className="mt-3" style={{ color: "#5D6186", fontSize: "16px", width: "75%" }}>We have everything for your IT Infrastructure needs ranging from computer hardware to software and solutions</p>
                            <div className="btn btn_know_more_ep mt-4 d-flex align-items-center justify-content-center">Know more</div>
                        </div>
                    </div>

                    <div className="row sm-pt4" style={{ padding: "50px 0px 120px 0px" }} data-aos="fade-left">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div style={{ color: "#00155A", fontSize: "32px" }}><b className='sm-25'>Hyper Conversion Infrastructure</b></div>
                            <p className="mt-3" style={{ color: "#5D6186", fontSize: "16px", width: "75%" }}>We have everything for your IT Infrastructure needs ranging from computer hardware to software and solutions</p>
                            <div className="btn btn_know_more_ep mt-4 d-flex align-items-center justify-content-center sm-mb3">Know more</div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <img src={backup} alt="error" width="100%" height="357px" className='sm-carrer-img'/>
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

export default HardwareSol