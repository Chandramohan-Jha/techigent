import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

// Components
import MainHeader from "../Layout/MainHeader";
import Footer from "../Layout/Footer";
import FooterMob from "../Layout/FooterMob";

// Images
import noun from "../../Images/noun-trust-2714621.svg";
import Component_237_1 from "../../Images/Component_237_1.svg";
import Component_238_1 from "../../Images/Component_238_1.svg";
import Component_239_1 from "../../Images/Component_239_1.svg";
import download from "../../Images/download.svg";
import Component_229_1 from "../../Images/Component_229_1.svg";
import Component_283_1 from "../../Images/Component_283_1.svg";
import Component_226_5 from "../../Images/Component_226_5.svg";
import Component_225_1 from "../../Images/Component_225_1.svg";
import cs_01 from "../../Images/cs_01.png";
import ba_01 from "../../Images/ba_01.png";
import is_01 from "../../Images/is_01.png";

// Icons
// import { BiChevronRight } from 'react-icons/bi'

// Dummy Image
// const dummy_img = "https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGxhcHRvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
const lenevo =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSenIEcBXUF576K504uT4sS3MUJWV-Dke8tTaFWgEfFUg&s";
const user =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";

const About = () => {
  // const navigate = useNavigate();
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 130 });
  }, []);
  return (
    <>
      <div>
        <MainHeader
          img="c_img_about sm-carrer-img"
          name="The Company"
          title="Growing since 2000"
        />
        <div className="container sm-mt-1" style={{ position: "relative" }}>
          <img src={Component_226_5} alt="logo" className="car_effect_04 sm-none" />
          <div style={{ position: "relative" }} data-aos="fade-up">
            <div style={{ padding: "55px 0px 30px 0px" }}>
              <div
                style={{
                  fontSize: "30px",
                  color: "#00155A",
                  fontWeight: "bold",
                }}
                className="sm-25"
              >
                About Us
              </div>
              <div style={{ fontSize: "18px", color: "#555554" }} className="sm-15">
                Growing since 2000
              </div>
            </div>
            <div style={{ color: "#111111" }}>
              With a proven portfolio of IT Solutions & Services, Techigent has
              been delivering IT Infrastructure- Products, Services & Solutions
              and Business Software Solutions to a wide range of industry
              verticals including - Banking and Financial Services, Retail
              Distribution, Pharmaceuticals, Utilities and Real Estate. It’s
              ready to deploy product portfolio comprises of turnkey IT
              Solutions that help new age businesses leverage varied sets of
              business data and information.
            </div>
            <div>
              <button className="btn btn-know-more">Know More</button>
            </div>

            <div style={{ marginTop: "40px" }} className="row">



              <div
                className="col-lg-6 col-md-6 col-12 mt-4"
                data-aos="fade-right"
              >
                <div className="about_box_01 sm-h250" >
                  <div
                    className="d-flex align-items-center"
                    style={{ gap: "46px", width: "100%" }}
                  >


                    <img src={Component_237_1} alt="icons" />
                    <div>
                      <div style={{ fontSize: "20px" }}>
                        <b>One Stop Solution</b>
                      </div>
                      <div style={{ fontSize: "16px" }}>
                        We have everything for your IT Infrastructure needs
                        ranging from computer hardware to software and solutions
                      </div>
                    </div>

                    {/* ========================================= */}
                    {/* <div className="row d-flex justify-content-center align-items-center">
                      <div className="col-md-4 col-lg-2 col-12 ">
                      <img src={Component_237_1} alt="icons" className="sm-center"/>
                      </div>
                      <div className="col-md-8 col-lg-10 col-12">
                      <div style={{ fontSize: "20px" }}>
                        <b className="sm-center">One Stop Solution</b>
                      </div>
                      <div style={{ fontSize: "16px" }} >
                        We have everything for your IT Infrastructure needs
                        ranging from computer hardware to software and solutions
                      </div>
                      </div>

                    </div> */}

{/* =========================================== */}

                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 col-md-6 col-12 mt-4"
                data-aos="fade-left"
              >
                <div className="about_box_01 sm-h250" >
                  <div
                    className="d-flex align-items-center"
                    style={{ gap: "46px", width: "100%" }}
                  >
                    <img src={Component_238_1} alt="icons" />
                    <div>
                      <div style={{ fontSize: "20px" }}>
                        <b>Peace Of Mind</b>
                      </div>
                      <div style={{ fontSize: "16px" }}>
                        Connect with us and leave your worries to us, We make
                        sure that your satisfaction is always our priority
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 col-md-6 col-12 mt-4"
                data-aos="fade-right"
              >
                <div className="about_box_01 sm-h300">
                  <div
                    className="d-flex align-items-center"
                    style={{ gap: "46px", width: "100%" }}
                  >
                    <img src={Component_239_1} alt="icons" />
                    <div>
                      <div style={{ fontSize: "20px" }}>
                        <b>One Stop Solution</b>
                      </div>
                      <div style={{ fontSize: "16px" }}>
                        We have everything for your IT Infrastructure needs
                        ranging from computer hardware to software and solutions
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 col-md-6 col-12 mt-4"
                data-aos="fade-left"
              >
                <div className="about_box_01 sm-h250">
                  <div
                    className="d-flex align-items-center"
                    style={{ gap: "46px", width: "100%" }}
                  >
                    <img src={noun} alt="icons" />
                    <div>
                      <div style={{ fontSize: "20px" }}>
                        <b>One Stop Solution</b>
                      </div>
                      <div style={{ fontSize: "16px" }}>
                        Connect with us and leave your worries to us, We make
                        sure that your satisfaction is always our priority
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                padding: "79px 0px 140px 0px",
                gap: "7px",
                cursor: "pointer",
              }}
              className="d-flex align-items-center"
            >
              <img src={download} width="27px" height="27px" alt="download" />
              <div style={{ color: "#0883E6", fontSize: "21px" }}>
                Download Company Profile
              </div>
            </div>
            <div className="about_effect">
              <im src={Component_225_1} alt="effect" />
            </div>
          </div>
        </div>

        <div className="it_01 sm-pt1 sm-mt-4" data-aos="fade-up">
          <div className="container">
            <div style={{ color: "#00155A", fontSize: "30px" }}>
              <b className="sm-25">What we do?</b>
            </div>
            <div
              style={{ color: "#27187F", fontSize: "18px" }}
              className="mt-1"
            >
              Building IT Infrastructure
            </div>
            <div style={{ paddingTop: "30px" }} data-aos="fade-left">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-12">
                  <div className="pas_box">
                    <img
                      src={is_01}
                      alt="error"
                      width="100%"
                      height="227px"
                      style={{ borderRadius: "8px 8px 0px 0px" }}
                    />
                    <div
                      className="d-flex  justify-content-center align-items-center"
                      style={{ height: "100px", cursor: "pointer" }}
                    >
                      <div style={{ color: "#00155A", fontSize: "24px" }} className="sm-20">
                        Infrastructure Solutions
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-12">
                  <div className="pas_box">
                    <img
                      src={cs_01}
                      alt="error"
                      width="100%"
                      height="227px"
                      style={{ borderRadius: "8px 8px 0px 0px" }}
                    />
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ height: "100px", cursor: "pointer" }}
                    >
                      <div style={{ color: "#00155A", fontSize: "24px" }} className="sm-20">
                        Cloud Solutions
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-12">
                  <div className="pas_box">
                    <img
                      src={ba_01}
                      alt="error"
                      width="100%"
                      height="227px"
                      style={{ borderRadius: "8px 8px 0px 0px" }}
                    />
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ height: "100px", cursor: "pointer" }}
                    >
                      <div style={{ color: "#00155A", fontSize: "24px" }} className="sm-20">
                        Business Analytics
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ paddingTop: "30px" }} data-aos="fade-right">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-12">
                  <div className="pas_box">
                    <img
                      src={is_01}
                      alt="error"
                      width="100%"
                      height="227px"
                      style={{ borderRadius: "8px 8px 0px 0px" }}
                    />
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ height: "100px", cursor: "pointer" }}
                    >
                      <div style={{ color: "#00155A", fontSize: "24px" }} className="sm-20">
                        Business Apps
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-12">
                  <div className="pas_box">
                    <img
                      src={cs_01}
                      alt="error"
                      width="100%"
                      height="227px"
                      style={{ borderRadius: "8px 8px 0px 0px" }}
                    />
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ height: "100px", cursor: "pointer" }}
                    >
                      <div
                        style={{
                          color: "#00155A",
                          fontSize: "24px",
                          width: "228px",
                          textAlign: "center",
                        }}
                        className="sm-20"
                      >
                        Enterprise Mobility Solutions
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-12">
                  <div className="pas_box">
                    <img
                      src={ba_01}
                      alt="error"
                      width="100%"
                      height="227px"
                      style={{ borderRadius: "8px 8px 0px 0px" }}
                    />
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ height: "100px", cursor: "pointer" }}
                    >
                      <div style={{ color: "#00155A", fontSize: "24px" }} className="sm-20">
                        Managed Services
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="awards_about" data-aos="fade-up">
          <div className="container" style={{ position: "relative" }}>
            <img src={Component_226_5} alt="logo" className="car_effect_03 sm-none" />
            <div className="">
              <div className="d-flex align-items-center justify-content-between sm-gap-10">
                <div>
                  <div style={{ color: "#111111" }} className="thirty">
                    <b className="sm-25">Awards & Recognitions</b>
                  </div>
                  <div style={{ color: "#555554", fontSize: "18px" }}>
                    Our efforts were recognised globally
                  </div>
                </div>
                <div>
                  <Link
                    to="/"
                    style={{
                      fontSize: "15px",
                      color: "#0883E6",
                      cursor: "pointer",
                    }}
                  >
                    <u>EXPLORE</u>
                  </Link>
                </div>
              </div>
              <div
                style={{ paddingTop: "50px" }}
                className="d-flex justify-content-between sm-scroll sm-gap-10 "  //////
              >
                <div
                  className="comp_logo_2 d-flex align-items-center justify-content-center sm-carrer-01"
                  data-aos="flip-left"
                >
                  <img src={lenevo} alt="error" width="240px" height="240px" className="sm-carrer-01" />
                </div>
                <div
                  className="comp_logo_2 d-flex align-items-center justify-content-center sm-carrer-01"
                  data-aos="flip-left"
                >
                  <img src={lenevo} alt="error" width="240px" height="240px" className="sm-carrer-01" />
                </div>
                <div
                  className="comp_logo_2 d-flex align-items-center justify-content-center sm-carrer-01"
                  data-aos="flip-left"
                >
                  <img src={lenevo} alt="error" width="240px" height="240px" className="sm-carrer-01" />
                </div>
              </div>
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ gap: "11px", marginTop: "80px" }}
              >
                <div className="dot-active"></div>
                <div className="dot-inactive"></div>
                <div className="dot-inactive"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="it_01" data-aos="fade-up">
          <div className="container" style={{ position: "relative" }}>
            <img src={Component_226_5} alt="logo" className="car_effect_03 sm-none" />
            <div style={{ color: "#00155A", fontSize: "30px" }}>
              <b className="sm-25">Vision & Mission</b>
            </div>
            <div
              style={{ color: "#27187F", fontSize: "18px" }}
              className="mt-1"
            >
              Our efforts were recognised globally
            </div>
            <div style={{ paddingTop: "30px" }} className="row">
              <div className="col-lg-6 col-md-6 col-12 mt-2">
                <div className="vision_box d-flex align-items-center flex-column">
                  <div style={{ color: "#C51213", fontSize: "22px" }}>
                    <b>Our Vision</b>
                  </div>
                  <div
                    style={{
                      color: "#111111",
                      fontSize: "18px",
                      textAlign: "center",
                    }}
                    className="mt-3"
                  >
                    “A Digital Companion to fulfil all the requirements of
                    automobile sector and to empower the Freedom of Choice
                    through technology.”
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12 mt-2">
                <div className="vision_box d-flex align-items-center flex-column">
                  <div style={{ color: "#C51213", fontSize: "22px" }}>
                    <b>Our Mission</b>
                  </div>
                  <div
                    style={{
                      color: "#111111",
                      fontSize: "18px",
                      textAlign: "center",
                    }}
                    className="mt-3"
                  >
                    “A Digital Companion to fulfil all the requirements of
                    automobile sector and to empower the Freedom of Choice
                    through technology.”
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="testimonial"
          style={{ backgroundColor: "#fff" }}
          data-aos="fade-up"
        >
          <div className="container" style={{ position: "relative" }}>
            <img src={Component_226_5} alt="logo" className="car_effect_03 sm-none" />

            <div style={{ color: "#00155A" }} className="thirty">
              <b className="sm-25">Why Choose Us!</b>
            </div>
            <div style={{ color: "#27187F", fontSize: "18px" }} >
              See what people are saying
            </div>
            <div style={{ paddingTop: "50px" }}>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-12">
                  <div
                    className="d-flex flex-column justify-content-center align-items-end"
                    style={{ gap: "12px", position: "relative" }}
                  >
                    <div className="test_box">
                      <div
                        className="d-flex align-items-center"
                        style={{ gap: "15px" }}
                      >
                        <img
                          src={user}
                          alt="user"
                          width="55px"
                          height="55px"
                          className="test_img"
                          
                        />
                        <div>
                          <div style={{ color: "#111111", fontSize: "18px" }}>
                            Natasha Singh
                          </div>
                          <div style={{ color: "#555554", fontSize: "16px" }}>
                            Thakur International
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="test_box">
                      <div
                        className="d-flex align-items-center"
                        style={{ gap: "15px" }}
                      >
                        <img
                          src={user}
                          alt="user"
                          width="55px"
                          height="55px"
                          className="test_img"
                        />
                        <div>
                          <div style={{ color: "#111111", fontSize: "18px" }}>
                            Alex Morgan
                          </div>
                          <div style={{ color: "#555554", fontSize: "16px" }}>
                            DHFL
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="test_box">
                      <div
                        className="d-flex align-items-center"
                        style={{ gap: "15px" }}
                      >
                        <img
                          src={user}
                          alt="user"
                          width="55px"
                          height="55px"
                          className="test_img"
                        />
                        <div>
                          <div style={{ color: "#111111", fontSize: "18px" }}>
                            Arthur Hansen
                          </div>
                          <div style={{ color: "#555554", fontSize: "16px" }}>
                            Bill Desk
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="test_box">
                      <div
                        className="d-flex align-items-center"
                        style={{ gap: "15px" }}
                      >
                        <img
                          src={user}
                          alt="user"
                          width="55px"
                          height="55px"
                          className="test_img"
                        />
                        <div>
                          <div style={{ color: "#111111", fontSize: "18px" }}>
                            Alex Morgan
                          </div>
                          <div style={{ color: "#555554", fontSize: "16px" }}>
                            DHFL
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hifen">
                      <img
                        src={Component_283_1}
                        width="255px"
                        height="210px"
                        alt="error"
                      />
                    </div>
                  </div>
                  <div
                    className="d-flex justify-content-center align-items-center mt-5"
                    style={{ gap: "11px" }}
                  >
                    <div className="dot-active"></div>
                    <div className="dot-inactive"></div>
                    <div className="dot-inactive"></div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-12" data-aos="flip-left">
                  <div className="test_box_2">
                    <div className="d-flex justify-content-center">
                      <img
                        src={user}
                        alt="error"
                        width="150px"
                        height="150px"
                        className="test_img"
                      />
                    </div>
                    <div
                      style={{ marginTop: "37px" }}
                      className="d-flex flex-column"
                    >
                      <div
                        style={{ color: "#5D6186", fontSize: "16px" }}
                        className="mb-auto"
                      >
                        "Great Service and Support by Partner as well as Team,
                        Quick Service and Robust Customer support are thr keys
                        of success to Techigent. Kewep doing good "
                      </div>
                      <div className="mt-5">
                        <div style={{ color: "#00155A", fontSize: "18px" }}>
                          Natasha Singh
                        </div>
                        <div style={{ color: "#1F568C", fontSize: "16px" }}>
                          Thakur International
                        </div>
                      </div>
                    </div>
                    <div className="dot_des">
                      <img
                        src={Component_229_1}
                        alt="error"
                        width="60px"
                        height="60px"
                      />
                    </div>
                    <div className="dot_des_1">
                      <img
                        src={Component_229_1}
                        alt="error"
                        width="60px"
                        height="60px"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-12" data-aos="flip-left">
                  <div className="test_box_2 sm-mt1 sm-pt2">
                    <div className="d-flex justify-content-center">
                      <img
                        src={user}
                        alt="error"
                        width="150px"
                        height="150px"
                        className="test_img"
                      />
                    </div>
                    <div
                      style={{ marginTop: "37px" }}
                      className="d-flex flex-column"
                    >
                      <div
                        style={{ color: "#5D6186", fontSize: "16px" }}
                        className="mb-auto"
                      >
                        " Great Service and Support by Partner as well as Team,
                        Quick Service and Robust Customer support are thr keys
                        of success to Techigent. Kewep doing good "
                      </div>
                      <div className="mt-5">
                        <div style={{ color: "#00155A", fontSize: "18px" }}>
                          Natasha Singh
                        </div>
                        <div style={{ color: "#1F568C", fontSize: "16px" }}>
                          Thakur International
                        </div>
                      </div>
                    </div>
                    <div className="dot_des">
                      <img
                        src={Component_229_1}
                        alt="error"
                        width="60px"
                        height="60px"
                      />
                    </div>
                    <div className="dot_des_1">
                      <img
                        src={Component_229_1}
                        alt="error"
                        width="60px"
                        height="60px"
                      />
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

export default About;
