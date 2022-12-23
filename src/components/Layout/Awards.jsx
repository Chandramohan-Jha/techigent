import React , {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

// Components
import AwardComp from './AwardComp'
import Footer from './Footer'
import MainHeader from './MainHeader'
import FooterMob from '../Layout/FooterMob'

const Awards = () => {
    useEffect(()=>{
        Aos.init({duration: 1000, delay: 130});
    },[]);
    return (
        <>
        
            <div className="awards_reg">
            <MainHeader img="c_img_award sm-carrer-img" name="Awards & Recognitions" title="Our efforts were recognised globally" />

                <div style={{paddingBottom:"100px"}}>
                    <AwardComp />
                    <AwardComp />
                    <AwardComp />
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

export default Awards