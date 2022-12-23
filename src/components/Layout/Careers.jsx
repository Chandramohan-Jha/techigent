import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// Images
import Component_226_5 from "../../Images/Component_226_5.svg";
import Component_225_1 from "../../Images/Component_225_1.svg";

// Components
import Footer from "./Footer";
import MainHeader from "./MainHeader";
import FooterMob from "../Layout/FooterMob";

// Icons
import { BiChevronDown } from "react-icons/bi";
import { FaTelegramPlane } from "react-icons/fa";
import { BiLinkAlt, BiCurrentLocation } from "react-icons/bi";

const Careers = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 130 });
  }, []);
  const datas = [{}, {}, {}, {}, {}, {}];

  return (
    <>
      <MainHeader
        img="c_img_career sm-carrer-img"
        name="Careers"
        title="Be the part of an excellent organisation"
      />

      <div className="c_content_01">
        <div className="container">
          <div
            className="d-flex align-items-center sm-carrer-01 sm-16"
            style={{ color: "#FFFFFF", height: "224px", fontSize: "25px" }}
          >
            If you're interested, start by applying here and attaching your
            resume, we always have an empty chair for good talent, we don't ask
            for degrees but we do need skills and dedication.
          </div>
        </div>
      </div>
      <div style={{ paddingTop: "90px" }} className="sm-pd-top">
        <div className="container" style={{ position: "relative" }}>
          <img
            src={Component_226_5}
            alt="logo"
            className="car_effect_03 sm-none"
          />
          <div
            style={{
              color: "#00155A",
              position: "relative",
              paddingTop: "10px",
            }}
            className="thirty"
            data-aos="fade-up"
          >
            <div>
              <b className="sm-25">Departments</b>
            </div>
          </div>

          <div
            className="row sm-pt2"
            style={{ paddingTop: "50px" }}
            data-aos="fade-up"
          >
            <div className="col-lg-4 col-md-4 col-12">
              <div className="career_box_active d-flex justify-content-center align-items-center flex-column">
                <div style={{ fontSize: "18px", color: "#000000" }}>
                  Engineering & Technology
                </div>
                <div style={{ fontSize: "18px", color: "#1587C3" }}>
                  12 Openings
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="career_box_active d-flex justify-content-center align-items-center flex-column">
                <div style={{ fontSize: "18px", color: "#000000" }}>
                  Marketing & Sales
                </div>
                <div style={{ fontSize: "18px", color: "#1587C3" }}>
                  12 Openings
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="career_box_active d-flex justify-content-center align-items-center flex-column">
                <div style={{ fontSize: "18px", color: "#000000" }}>
                  Accounting & Finance
                </div>
                <div style={{ fontSize: "18px", color: "#1587C3" }}>
                  12 Openings
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div
            className="row"
            style={{ padding: "50px 0px" }}
            data-aos="fade-up"
          >
            <div className="col-lg-4 col-md-4 col-12">
              <div className="career_box_active d-flex justify-content-center align-items-center flex-column">
                <div style={{ fontSize: "18px", color: "#000000" }}>
                  Operations & Distribution
                </div>
                <div style={{ fontSize: "18px", color: "#1587C3" }}>
                  12 Openings
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="career_box_active d-flex justify-content-center align-items-center flex-column">
                <div style={{ fontSize: "18px", color: "#000000" }}>
                  HR & Admin
                </div>
                <div style={{ fontSize: "18px", color: "#1587C3" }}>
                  12 Openings
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="career_box_active d-flex justify-content-center align-items-center flex-column">
                <div style={{ fontSize: "18px", color: "#000000" }}>
                  Service & Support
                </div>
                <div style={{ fontSize: "18px", color: "#1587C3" }}>
                  12 Openings
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="row sm-pt3"
            style={{ padding: "70px 0px 10px 0px" }}
          >
            <div className="col-lg-6 col-12 col-md-6">
            <div className="thirty" style={{ color: "#111111" }}>
              <b className="sm-25">All Openings (123)</b>
            </div>
            </div>
            <div className="col-lg-6 col-12 col-md-6 sm-mt1">
            <div className="d-flex align-items-center justify-content-end gap-1 display-start" style={{ gap: "22px" }}>
              <div style={{ fontSize: "22px" }}>
                <b className="sm-16">Sort by :</b>
              </div>
              <div style={{ fontSize: "22px", color: "#555554" }} className="sm-16">
                Engineering & Technology
              </div>
              <BiChevronDown style={{ color: "#1F568C", fontSize: "35px" }} />
            </div>
            </div>
          </div>

          <div className="row" style={{ marginBottom: "157px" }}>
            {datas.map((data) => (
              <div className="col-lg-4 col-md-4 col-12 mt-5" data-aos="fade-up">
                <div className="career_box_02 d-flex justify-items-end flex-column">
                  <div style={{ fontSize: "24px" }}>
                    IT Marketing Specialist- Infra Service Industry
                  </div>
                  <div
                    className="d-flex align-items-center mt-4 mb-auto"
                    style={{ gap: "5px", color: "#555554" }}
                  >
                    <BiCurrentLocation style={{ fontSize: "18px" }} />
                    <div style={{ fontSize: "18px" }}>Pune</div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button className="btn btn_apply">Apply Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{ backgroundColor: "#F2F5F8", position: "relative" }}
          data-aos="fade-up"
        >
          <div className="l_e_c_1 sm-none">
            <img src={Component_225_1} alt="Error" />
          </div>
          <div className="l_e_c_2 sm-none">
            <img src={Component_225_1} alt="Error" />
          </div>
          <div className="container">
            <div style={{ padding: "80px 0px", position: "relative" }}>
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "100%" }}
              >
                <form style={{ width: "770px" }}>
                  <div
                    className="d-flex flex-column align-items-center"
                    style={{ height: "" }}
                  >
                    <div style={{ color: "#00155A", fontSize: "30px" }}>
                      <b className="sm-25">Fill the form</b>
                    </div>

                    <div className="join-1">
                      Couldn't find what you were looking for?
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-12 col-lg-6 mt-4">
                      <div className="form-group">
                        <input
                          className="form-control join_form"
                          data-aos="fade-right"
                          type="text"
                          placeholder="Your full name"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 mt-4">
                      <div className="form-group">
                        <input
                          className="form-control join_form"
                          data-aos="fade-left"
                          type="text"
                          placeholder="Select your area of Interest"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 mt-4">
                      <div className="form-group">
                        <input
                          className="form-control join_form"
                          data-aos="fade-right"
                          type="text"
                          placeholder="Your email address"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 mt-4">
                      <div className="form-group">
                        <input
                          className="form-control join_form"
                          data-aos="fade-left"
                          type="text"
                          placeholder="Your mobile number"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-lg-12 mt-4">
                      <div className="form-group">
                        <textarea
                          rows="4"
                          className="form-control join_form"
                          data-aos="fade-up"
                          type="text"
                          placeholder="Type your message here."
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="d-flex align-items-center"
                    style={{ gap: "7px" }}
                  >
                    <BiLinkAlt style={{ fontSize: "22px" }} />
                    <div style={{ fontSize: "16px", color: "#00155A" }}>
                      Attach Resume, Video, Cover Letter etc
                    </div>
                  </div>
                  <div
                    className="d-flex justify-content-center"
                    style={{ padding: "22px 0px 50px 0px" }}
                  >
                    <button className="btn btn-contact" data-aos="flip-right">
                      <div className="d-flex justify-content-center aling-items-center">
                        <div>Send</div>
                        <div className="ml-2">
                          <FaTelegramPlane style={{ fontSize: "17px" }} />
                        </div>
                      </div>
                    </button>
                  </div>
                </form>
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

export default Careers;
