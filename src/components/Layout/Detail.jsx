import React, { useState } from 'react'

// Components
import Footer from './Footer'
import MainHeader from './MainHeader'
import FooterMob from '../Layout/FooterMob'

// Dummy images
const gallery = "https://images.unsplash.com/photo-1606819717115-9159c900370b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2FsbGVyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"

const Detail = () => {

    const [active, setActive] = useState(1);
    return (
        <>
            <div className="detail">
            <MainHeader img="c_img_detail" name="OSG Techotsav" title="12 Images and 1 Videos" />
                <div className="container">
                    <div style={{ padding: "70px 0px" }}>
                        <div style={{ fontWeight: "bold", fontSize: "22px", gap: "40px" }} className="d-flex align-items-center" >
                            <div style={{ color: "#1F568C" }}>Sort by :</div>
                            <div className={active === 1 ? "active-sorts" : "inactive-sorts"} onClick={() => setActive(1)}>All</div>
                            <div className={active === 2 ? "active-sorts" : "inactive-sorts"} onClick={() => setActive(2)}>Images</div>
                            <div className={active === 3 ? "active-sorts" : "inactive-sorts"} onClick={() => setActive(3)}>Videos</div>
                        </div>
                    </div>
                    <div className="container" style={{ marginBottom: "200px" }}>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-12" style={{ padding: "3px" }}>
                                <img src={gallery} alt="gallery" width="100%" height="320px" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-12" style={{ padding: "3px" }}>
                                <img src={gallery} alt="gallery" width="100%" height="320px" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-12" style={{ padding: "3px" }}>
                                <img src={gallery} alt="gallery" width="100%" height="320px" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-12" style={{ padding: "3px" }}>
                                <img src={gallery} alt="gallery" width="100%" height="320px" />
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

export default Detail