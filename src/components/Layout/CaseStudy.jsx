import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// Images
import Component_226_5 from "../../Images/Component_226_5.svg";

// Components
import MainHeader from "../Layout/MainHeader";
import Footer from "../Layout/Footer";
import FooterMob from "../Layout/FooterMob";

// Dummy Images
const case_study =
  "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FzZSUyMHN0dWR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";

const CaseStudy = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 130 });
  }, []);
  return (
    <>
      <MainHeader
        img="c_img_case sm-carrer-img"
        name="Case Studies"
        title="We delivered what we committed"
      />
      <div className="caseStudy_1" data-aos="fade-up">
        <div
          className="container"
          style={{ paddingBottom: "100px", position: "relative" }}
        >
          <img
            src={Component_226_5}
            alt="logo"
            className="car_effect_03 sm-none"
          />
          <div
            className="d-flex align-items-center justify-content-between"
            data-aos="fade-right"
          >
            <div>
              <div style={{ color: "#111111" }} className="thirty">
                <b className="sm-25">Case Studies</b>
              </div>
              <div style={{ color: "#555554", fontSize: "18px" }}>
                We Delivered what we comitted
              </div>
            </div>
          </div>

          <div
            style={{ padding: "50px 0px", gap: "28px" }}
            className="d-flex flex-column"
            data-aos="fade-left"
          >
            <div className="d-flex align-items-center justify-content-between">
              <div style={{ color: "#000000", fontSize: "24px" }}>
                Case Study by Verticals
              </div>
              <div className="cs_02 sm-none">All</div>
              <div className="cs_03 sm-none">NBFC</div>
              <div className="cs_03 sm-none">Health Care</div>
              <div className="cs_03 sm-none">Manufacturing</div>
            </div>

            {/* ================================ */}
            {/* <div className="row d-flex align-items-center justify-content-between">
                            <div className="col-md-3 col-12">
                            <div style={{ color: "#000000", fontSize: "24px" }} className="sm-mb2">Case Study by Verticals</div>
                            </div>
                            <div className='col-md-9 col-12 d-flex align-items-center justify-content-between'>
                            <div className="cs_02">All</div>
                            <div className="cs_03">NBFC</div>
                            <div className="cs_03" style={{ whiteSpace:'nowrap'}}>Health Care</div>
                            <div className="cs_03">Manufacturing</div>
                            </div>
                        </div> */}
            {/* =============================== */}


            <div className="d-flex align-items-center justify-content-between sm-none">
              <div className="cs_03">Retail</div>
              <div className="cs_03">Pharmaceuticals</div>
              <div className="cs_03">Automotive</div>
              <div className="cs_03">Education</div>
              <div className="cs_03">Others</div>
            </div>
          </div>

          <div className="d-flex justify-content-between mt-2">
            <div className="cs_01 " data-aos="flip-right">
              <img
                src={case_study}
                alt="ERROR"
                className="case_img"
                width="100%"
              />
              <div
                className="d-flex flex-column align-items-start"
                style={{ padding: "15px 10px", height: "137px" }}
              >
                <div
                  style={{ color: "#111111", fontSize: "18px" }}
                  className="mb-auto"
                >
                  Capital Confidential: ???Big Short??? author contemplates taking
                  on Brexit
                </div>
                <div
                  style={{ color: "#555554", fontSize: "15px", width: "320px" }}
                  className="mt-1"
                >
                  Oct. 29, 2019 at 6:06 a.m. ET
                </div>
              </div>
            </div>

            <div className="cs_01" data-aos="flip-right">
              <img
                src={case_study}
                alt="ERROR"
                className="case_img"
                width="100%"
              />
              <div
                className="d-flex flex-column align-items-start"
                style={{ padding: "15px 10px", height: "137px" }}
              >
                <div
                  style={{ color: "#111111", fontSize: "18px" }}
                  className="mb-auto"
                >
                  U.K. assets are too hot to handle right now, top investors say
                </div>
                <div
                  style={{ color: "#555554", fontSize: "15px", width: "320px" }}
                  className="mt-1"
                >
                  Oct. 29, 2019 at 6:06 a.m. ET
                </div>
              </div>
            </div>
            <div className="cs_01" data-aos="flip-right">
              <img
                src={case_study}
                alt="ERROR"
                className="case_img"
                width="100%"
              />
              <div
                className="d-flex flex-column align-items-start"
                style={{ padding: "15px 10px", height: "137px" }}
              >
                <div
                  style={{ color: "#111111", fontSize: "18px" }}
                  className="mb-auto"
                >
                  Europe???s largest money manager warns of an investment industry
                  liquidity crisis
                </div>
                <div
                  style={{ color: "#555554", fontSize: "15px", width: "320px" }}
                  className="mt-1"
                >
                  Oct. 25, 2019 at 4:17 a.m. ET
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-4">
            <div className="cs_01 " data-aos="flip-right">
              <img
                src={case_study}
                alt="ERROR"
                className="case_img"
                width="100%"
              />
              <div
                className="d-flex flex-column align-items-start"
                style={{ padding: "15px 10px", height: "137px" }}
              >
                <div
                  style={{ color: "#111111", fontSize: "18px" }}
                  className="mb-auto"
                >
                  Capital Confidential: ???Big Short??? author contemplates taking
                  on Brexit
                </div>
                <div
                  style={{ color: "#555554", fontSize: "15px", width: "320px" }}
                  className="mt-1"
                >
                  Oct. 29, 2019 at 6:06 a.m. ET
                </div>
              </div>
            </div>

            <div className="cs_01" data-aos="flip-right">
              <img
                src={case_study}
                alt="ERROR"
                className="case_img"
                width="100%"
              />
              <div
                className="d-flex flex-column align-items-start"
                style={{ padding: "15px 10px", height: "137px" }}
              >
                <div
                  style={{ color: "#111111", fontSize: "18px" }}
                  className="mb-auto"
                >
                  U.K. assets are too hot to handle right now, top investors say
                </div>
                <div
                  style={{ color: "#555554", fontSize: "15px", width: "320px" }}
                  className="mt-1"
                >
                  Oct. 29, 2019 at 6:06 a.m. ET
                </div>
              </div>
            </div>
            <div className="cs_01" data-aos="flip-right">
              <img
                src={case_study}
                alt="ERROR"
                className="case_img"
                width="100%"
              />
              <div
                className="d-flex flex-column align-items-start"
                style={{ padding: "15px 10px", height: "137px" }}
              >
                <div
                  style={{ color: "#111111", fontSize: "18px" }}
                  className="mb-auto"
                >
                  Europe???s largest money manager warns of an investment industry
                  liquidity crisis
                </div>
                <div
                  style={{ color: "#555554", fontSize: "15px", width: "320px" }}
                  className="mt-1"
                >
                  Oct. 25, 2019 at 4:17 a.m. ET
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
  );
};

export default CaseStudy;
