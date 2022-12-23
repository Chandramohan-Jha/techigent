import React , {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
// Dummy Images
const lenevo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSenIEcBXUF576K504uT4sS3MUJWV-Dke8tTaFWgEfFUg&s"

const AwardComp = () => {
    useEffect(()=>{
        Aos.init({duration: 1000, delay: 130});
    },[]);
    return (
        <>
            <div className="awards_box sm-pt3" data-aos="fade-up">
                <div className="container ">
                    <div className="d-flex justify-content-between srolling_effect sm-gap-20">
                        <div className="awards_box_2">
                            <div className="d-flex align-items-center justify-content-center" style={{ height: "260px" }} data-aos="flip-left">
                                <img src={lenevo} alt="error" width="280px" height="250px" />
                            </div>
                            <div className="awards_box_3">
                                <div style={{ color: "#00155A", fontSize: "20px" }}>CIO AWARD- 2018</div>
                            </div>

                            <div class="img_overlay">
                                <div style={{ fontSize: "22px" }}><b>CIO AWARD- 2018</b></div>
                                <div style={{ fontSize: "16px", paddingTop: "40px" }}>With a proven portfolio of IT Solutions & Services, Techigent has been delivering IT Infrastructure- Products, Services & Solutions and Business Software Solutions.</div>
                            </div>
                        </div>
                        <div className="awards_box_2">
                            <div className="d-flex align-items-center justify-content-center" style={{ height: "260px" }} data-aos="flip-left">
                                <img src={lenevo} alt="error" width="280px" height="250px" />
                            </div>
                            <div className="awards_box_3">
                                <div style={{ color: "#00155A", fontSize: "20px" }}>CIO AWARD- 2018</div>
                            </div>
                            <div class="img_overlay">
                                <div style={{ fontSize: "22px" }}><b>CIO AWARD- 2018</b></div>
                                <div style={{ fontSize: "16px", paddingTop: "40px" }}>With a proven portfolio of IT Solutions & Services, Techigent has been delivering IT Infrastructure- Products, Services & Solutions and Business Software Solutions.</div>
                            </div>
                        </div>
                        <div className="awards_box_2">
                            <div className="d-flex align-items-center justify-content-center" style={{ height: "260px" }} data-aos="flip-left">
                                <img src={lenevo} alt="error" width="280px" height="250px" />
                            </div>
                            <div className="awards_box_3">
                                <div style={{ color: "#00155A", fontSize: "20px" }}>CIO AWARD- 2018</div>
                            </div>
                            <div class="img_overlay">
                                <div style={{ fontSize: "22px" }}><b>CIO AWARD- 2018</b></div>
                                <div style={{ fontSize: "16px", paddingTop: "40px" }}>With a proven portfolio of IT Solutions & Services, Techigent has been delivering IT Infrastructure- Products, Services & Solutions and Business Software Solutions.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AwardComp