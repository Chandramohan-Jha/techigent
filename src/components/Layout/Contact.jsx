import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// Components
import Footer from "./Footer";
import MainHeader from "./MainHeader";
import FooterMob from "../Layout/FooterMob";

// Images
import suitcase from "../../Images/suitcase.svg";
import Component_226_5 from "../../Images/Component_226_5.svg";

// Icons
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 130 });
  }, []);
  return (
    <>
      <div className="contact_us ">
        <MainHeader
          img="c_img_contact sm-carrer-img"
          name="Contact Us"
          title="We Are waiting for you"
        />
        <div className="co-orprate">
          <div className="container" style={{ position: "relative" }}>
            <img
              src={Component_226_5}
              alt="logo"
              className="car_effect_03 sm-none"
            />
            <div
              className="thirty"
              style={{ color: "#00155A", paddingTop: "10px" }}
              data-aos="fade-up"
            >
              <b className="sm-25">Corporate Office</b>
            </div>
            <div
              style={{ paddingTop: "45px", color: "#00155A", fontSize: "18px" }}
            >
              <div data-aos="fade-up">
                281, V mall, Western Express Highway, Near Thakur Complex,
                Kandivali, Gayatri Nagar, Asha Nagar, Kandivali East, Mumbai,
                Maharashtra, India
              </div>
              <div data-aos="fade-up" style={{ marginTop: "50px" }}>
                +91 88532 99293 <br />
                email us: customercare@carcrafts.in <br />
                <br />
                <br />
                06:00 am – 10:00 pm (open today)
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="d-flex align-items-center"
              style={{ gap: "38px", marginTop: "90px" }}
            >
              <div className="contact_icons d-flex align-items-center justify-content-center">
                <FaFacebookF />
              </div>
              <div className="contact_icons d-flex align-items-center justify-content-center">
                <FaWhatsapp />
              </div>
              <div className="contact_icons d-flex align-items-center justify-content-center">
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="contact_us_02">
            <div
              data-aos="fade-up"
              style={{ fontSize: "30px", color: "#00155A", fontWeight: "bold" }}
              className="sm-25"
            >
              Other Offices
            </div>
            <div className="c_01 sm-mt1 ">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12 mt-4">
                  <div className="c_02 row" data-aos="fade-right">
                    <div className="col-lg-2 col-12 ">
                      <div
                        style={{ height: "100%" }}
                        className="height-100 d-flex  align-items-center justify-content-center"
                      >
                        <img
                          src={suitcase}
                          alt="suitcase"
                          width="29.7px"
                          height="25px"
                          className="img_c_01"
                        />
                      </div>
                    </div>
                    <div className="col-lg-10 col-12">
                      <div
                        style={{
                          color: "#111111",
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      >
                        Chennai
                      </div>
                      <div style={{ color: "#111111", fontSize: "16px" }}>
                        We have everything for your IT Infrastructure needs
                        ranging from computer hardware to software and solutions
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 mt-4">
                  <div className="c_02 row" data-aos="fade-right">
                    <div className="col-lg-2 col-12 ">
                      <div
                        style={{ height: "100%" }}
                        className="height-100 d-flex  align-items-center justify-content-center"
                      >
                        <img
                          src={suitcase}
                          alt="suitcase"
                          width="29.7px"
                          height="25px"
                          className="img_c_01"
                        />
                      </div>
                    </div>
                    <div className="col-lg-10 col-12">
                      <div
                        style={{
                          color: "#111111",
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      >
                        Banglore
                      </div>
                      <div style={{ color: "#111111", fontSize: "16px" }}>
                        We have everything for your IT Infrastructure needs
                        ranging from computer hardware to software and solutions
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row" style={{ marginTop: "60px" }}>
                <div className="col-lg-6 col-md-6 col-12 mt-4">
                  <div className="c_02 row" data-aos="fade-right">
                    <div className="col-lg-2 col-12 ">
                      <div
                        style={{ height: "100%" }}
                        className="height-100 d-flex  align-items-center justify-content-center"
                      >
                        <img
                          src={suitcase}
                          alt="suitcase"
                          width="29.7px"
                          height="25px"
                          className="img_c_01"
                        />
                      </div>
                    </div>
                    <div className="col-lg-10 col-12">
                      <div
                        style={{
                          color: "#111111",
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      >
                        Delhi
                      </div>
                      <div style={{ color: "#111111", fontSize: "16px" }}>
                        We have everything for your IT Infrastructure needs
                        ranging from computer hardware to software and solutions
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 mt-4">
                  <div className="c_02 row" data-aos="fade-right">
                    <div className="col-lg-2 col-12 ">
                      <div
                        style={{ height: "100%" }}
                        className="height-100 d-flex  align-items-center justify-content-center"
                      >
                        <img
                          src={suitcase}
                          alt="suitcase"
                          width="29.7px"
                          height="25px"
                          className="img_c_01"
                        />
                      </div>
                    </div>
                    <div className="col-lg-10 col-12">
                      <div
                        style={{
                          color: "#111111",
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      >
                        Pune
                      </div>
                      <div style={{ color: "#111111", fontSize: "16px" }}>
                        We have everything for your IT Infrastructure needs
                        ranging from computer hardware to software and solutions
                      </div>
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
      </div>
    </>
  );
};

export default Contact;
