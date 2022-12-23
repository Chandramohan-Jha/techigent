import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Marquee from "react-fast-marquee";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Components
import Footer from "./Footer";
import FooterMob from "./FooterMob";

// Images
import Component_161_1 from "../../Images/Component_161_1.svg";
import Component_227_3 from "../../Images/Component_227_3.svg";
import Component_234_1 from "../../Images/Component_234_1.svg";
import Component_229_1 from "../../Images/Component_229_1.svg";
import Component_283_3 from "../../Images/Component_283_3.svg";
import Component_226_5 from "../../Images/Component_226_5.svg";
import Component_225_1 from "../../Images/Component_225_1.svg";
import cs_01 from "../../Images/cs_01.png";
import ba_01 from "../../Images/ba_01.png";
import is_01 from "../../Images/is_01.png";

// Icons
import { FiSend } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";

// Dummy Images
// const dummy_img = "https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGxhcHRvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
const lenevo =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSenIEcBXUF576K504uT4sS3MUJWV-Dke8tTaFWgEfFUg&s";
const event =
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaCUyMGV2ZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
const user =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";
const case_study =
  "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FzZSUyMHN0dWR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";

const Home = () => {
  const navigate = useNavigate();
  const [alliance, setAlliance] = useState(1);

  useEffect(() => {
    Aos.init({ duration: 1000, delay: 130 });
  }, []);

  return (
    <>
      <div id="demo" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" className="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
          <li data-target="#demo" data-slide-to="3"></li>
        </ul>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="c_img">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: "100%",
                  color: "#fff",
                  height: "100%",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <div className="container">
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      width: "100%",
                      color: "#fff",
                      height: "100%",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ width: "544px" }}>
                      <div style={{ fontSize: "36px" }} className="sm-18">
                        <b>Asia's Fastest Growing Technology Giant</b>
                      </div>
                      <div style={{ fontSize: "18px" }} className="mt-4 sm-14">
                        With robust customer support and quick service delivery,
                        Techigent has topped the chart once again
                      </div>
                      <button
                        className="btn btn-km-1 mt-5"
                        onClick={() => navigate("/about")}
                      >
                        Know more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src={Component_227_3}
                  alt="error"
                  height="285px"
                  className="car_effect sm-none"
                />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="c_img">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: "100%",
                  color: "#fff",
                  height: "100%",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <div className="container">
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      width: "100%",
                      color: "#fff",
                      height: "100%",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ width: "544px" }}>
                      <div style={{ fontSize: "36px" }} className="sm-18">
                        <b>Asia's Fastest Growing Technology Giant</b>
                      </div>
                      <div style={{ fontSize: "18px" }} className="mt-4 sm-14">
                        With robust customer support and quick service delivery,
                        Techigent has topped the chart once again
                      </div>
                      <button
                        className="btn btn-km-1 mt-5 "
                        onClick={() => navigate("/about")}
                      >
                        Know more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src={Component_227_3}
                  alt="error"
                  height="285px"
                  className="car_effect sm-none"
                />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="c_img">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: "100%",
                  color: "#fff",
                  height: "100%",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <div className="container">
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      width: "100%",
                      color: "#fff",
                      height: "100%",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ width: "544px" }}>
                      <div style={{ fontSize: "36px" }} className="sm-18">
                        <b>Asia's Fastest Growing Technology Giant</b>
                      </div>
                      <div style={{ fontSize: "18px" }} className="mt-4 sm-14">
                        With robust customer support and quick service delivery,
                        Techigent has topped the chart once again
                      </div>
                      <button
                        className="btn btn-km-1 mt-5"
                        onClick={() => navigate("/about")}
                      >
                        Know more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src={Component_227_3}
                  alt="error"
                  height="285px"
                  className="car_effect sm-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="home_c1_bg sm-pt2"
        style={{ position: "relative" }}
      >
        <div className="container" style={{ position: "relative" }}>
          <img
            src={Component_226_5}
            alt="logo"
            className="car_effect_03 sm-none "
          />
          <div style={{ color: "#00155A", fontSize: "30px" }} className="">
            <b className="sm-25">About Us</b>
          </div>
          <div
            style={{
              color: "#555554",
              fontSize: "18px",
              padding: "0px 0px 50px 0px",
            }}
            className="sm-pb2"
          >
            Growing since 2000
          </div>
          <div
            style={{ color: "#111111", fontSize: "16px", width: "1100px" }}
            className="sm-width"
            data-aos="fade-up"
          >
            With a proven portfolio of IT Solutions & Services, Techigent has
            been delivering IT Infrastructure- Products, Services & Solutions
            and Business Software Solutions to a wide range of industry
            verticals including - Banking and Financial Services, Retail
            Distribution, Pharmaceuticals, Utilities and Real Estate. It’s ready
            to deploy product portfolio comprises of turnkey IT Solutions that
            help new age businesses leverage varied sets of business data and
            information.
          </div>

          <div
            className="d-flex justify-content-between sm-scroll sm-gap-40"
            data-aos="fade-up"
          >
            <div style={{ marginTop: "35px" }}>
              <div
                style={{ color: "#1587C3", fontSize: "30px" }}
                className="sm-20"
              >
                <b>25+</b>
              </div>
              <div
                style={{ color: "#555554", fontSize: "18px" }}
                className="mt-2 sm-14"
              >
                Years of Experience
              </div>
            </div>
            <div style={{ marginTop: "35px" }}>
              <div
                style={{ color: "#1587C3", fontSize: "30px" }}
                className="sm-20"
              >
                <b>2000+</b>
              </div>
              <div
                style={{ color: "#555554", fontSize: "18px" }}
                className="mt-2 sm-14"
              >
                Happy Customers
              </div>
            </div>
            <div style={{ marginTop: "35px" }}>
              <div
                style={{ color: "#1587C3", fontSize: "30px" }}
                className="sm-20"
              >
                <b>1000+</b>
              </div>
              <div
                style={{ color: "#555554", fontSize: "18px" }}
                className="mt-2 sm-14"
              >
                Crores INR Turnover
              </div>
            </div>
            <div style={{ marginTop: "35px" }}>
              <div
                style={{ color: "#1587C3", fontSize: "30px" }}
                className="sm-20"
              >
                <b>750+</b>
              </div>
              <div
                style={{ color: "#555554", fontSize: "18px" }}
                className="mt-2 sm-14"
              >
                Support Locations
              </div>
            </div>
            <div style={{ marginTop: "35px" }}>
              <div
                style={{ color: "#1587C3", fontSize: "30px" }}
                className="sm-20"
              >
                <b>25+</b>
              </div>
              <div
                style={{ color: "#555554", fontSize: "18px" }}
                className="mt-2 sm-14"
              >
                Offices
              </div>
            </div>
            <div style={{ marginTop: "35px" }}>
              <div
                style={{ color: "#1587C3", fontSize: "30px" }}
                className="sm-20"
              >
                <b>2000+</b>
              </div>
              <div
                style={{ color: "#555554", fontSize: "18px" }}
                className="mt-2 sm-14"
              >
                Employees
              </div>
            </div>
          </div>
          <div>
            <button
              className="btn btn-know-more"
              onClick={() => navigate("/about")}
              data-aos="fade-right"
            >
              Know More
            </button>
          </div>
        </div>
        <div className="art_01 sm-none">
          <img
            src={Component_225_1}
            alt="error"
            width="194.89px"
            height="201.03px"
          />
        </div>
        {/* <div>
                    <img src={Component_227_3} alt="error" height="285px" className="car_effect_1" />
                </div> */}
      </div>

      <div className="sm-pt1" data-aos="fade-up">
        <div className="productandservice sm-pt1">
          <div className="container " style={{ position: "relative" }}>
            <img
              src={Component_226_5}
              alt="logo"
              className="car_effect_03 sm-none"
            />
            <div style={{ color: "#111111", fontSize: "30px" }}>
              <b className="sm-25">Our Solutions</b>
            </div>
            <div style={{ color: "#555554", fontSize: "18px" }}>
              More then 150 Brands & Counting
            </div>
            <div style={{ paddingTop: "30px" }}>
              <div className="row" data-aos="fade-left">
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
                      <div
                        style={{ color: "#00155A", fontSize: "24px" }}
                        className="sm-20"
                      >
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
                      <div
                        style={{ color: "#00155A", fontSize: "24px" }}
                        className="sm-20"
                      >
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
                      <div
                        style={{ color: "#00155A", fontSize: "24px" }}
                        className="sm-20"
                      >
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
                      <div
                        style={{ color: "#00155A", fontSize: "24px" }}
                        className="sm-20"
                      >
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
                      <div
                        style={{ color: "#00155A", fontSize: "24px" }}
                        className="sm-20"
                      >
                        Managed Services
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pas_box_2 " data-aos="fade-up">
          <div className="pas_box_1 sm-pt2">
            <div className="container" style={{ position: "relative" }}>
              <img
                src={Component_226_5}
                alt="logo"
                className="car_effect_03 sm-none"
              />
              <div className="pas_box_text">
                <div style={{ fontSize: "30px" }}>
                  <b className="sm-25">Our Alliances</b>
                </div>
                <div style={{ fontSize: "18px" }}>
                  More then 150 Brands & Counting
                </div>
              </div>

              <div
                style={{
                  fontSize: "18px",
                  marginTop: "52px",
                  borderBottom: "1px solid #D1D3D4",
                  cursor: "pointer",
                }}
                className="d-flex align-items-end justify-content-between sm-scroll sm-gap-20"
              >
                <div
                  className={
                    alliance === 1
                      ? "alliance_effect_active sm-14"
                      : "alliance_effect_inactive sm-14"
                  }
                  onClick={() => setAlliance(1)}
                  style={{ width: "74px" }}
                >
                  All Partners
                </div>
                <div
                  className={
                    alliance === 2
                      ? "alliance_effect_active sm-14"
                      : "alliance_effect_inactive sm-14"
                  }
                  onClick={() => setAlliance(2)}
                >
                  Infrastructure Solutions
                </div>
                <div
                  className={
                    alliance === 3
                      ? "alliance_effect_active sm-14"
                      : "alliance_effect_inactive sm-14"
                  }
                  onClick={() => setAlliance(3)}
                >
                  Cloud Solutions
                </div>
                <div
                  className={
                    alliance === 4
                      ? "alliance_effect_active sm-14"
                      : "alliance_effect_inactive sm-14"
                  }
                  onClick={() => setAlliance(4)}
                >
                  Business Analytics
                </div>
                <div
                  className={
                    alliance === 5
                      ? "alliance_effect_active sm-14"
                      : "alliance_effect_inactive sm-14"
                  }
                  onClick={() => setAlliance(5)}
                >
                  Business Apps
                </div>
                <div
                  className={
                    alliance === 6
                      ? "alliance_effect_active sm-14"
                      : "alliance_effect_inactive sm-14"
                  }
                  onClick={() => setAlliance(6)}
                  style={{ width: "172px" }}
                >
                  Enterprise Mobility Solutions
                </div>
                <div
                  className={
                    alliance === 7
                      ? "alliance_effect_active sm-14"
                      : "alliance_effect_inactive sm-14"
                  }
                  onClick={() => setAlliance(7)}
                >
                  Managed Services
                </div>
              </div>
              <div className="sm-none">
                <div
                  style={{ paddingTop: "50px" }}
                  className="d-flex justify-content-between "
                >
                  <div className="comp_logo d-flex align-items-center justify-content-center ">
                    <img
                      src={lenevo}
                      alt="error"
                      width="130px"
                      height="130px"
                    />
                  </div>
                  <div className="comp_logo d-flex align-items-center justify-content-center ">
                    <img
                      src={lenevo}
                      alt="error"
                      width="130px"
                      height="130px"
                    />
                  </div>
                  <div className="comp_logo d-flex align-items-center justify-content-center ">
                    <img
                      src={lenevo}
                      alt="error"
                      width="130px"
                      height="130px"
                    />
                  </div>
                  <div className="comp_logo d-flex align-items-center justify-content-center ">
                    <img
                      src={lenevo}
                      alt="error"
                      width="130px"
                      height="130px"
                    />
                  </div>
                  <div className="comp_logo d-flex align-items-center justify-content-center ">
                    <img
                      src={lenevo}
                      alt="error"
                      width="130px"
                      height="130px"
                    />
                  </div>
                  <div className="comp_logo d-flex align-items-center justify-content-center ">
                    <img
                      src={lenevo}
                      alt="error"
                      width="130px"
                      height="130px"
                    />
                  </div>
                </div>
                <div
                  style={{ paddingTop: "30px" }}
                  className="d-flex justify-content-between"
                >
                  <div className="comp_logo d-flex align-items-center justify-content-center">
                    <img
                      src={lenevo}
                      alt="error"
                      width="130px"
                      height="130px"
                    />
                  </div>
                  <div className="comp_logo d-flex align-items-center justify-content-center">
                    <img
                      src={lenevo}
                      alt="error"
                      width="130px"
                      height="130px"
                    />
                  </div>
                  <div className="comp_logo d-flex align-items-center justify-content-center">
                    <img
                      src={lenevo}
                      alt="error"
                      width="130px"
                      height="130px"
                    />
                  </div>
                  <div className="comp_logo d-flex align-items-center justify-content-center">
                    <img
                      src={lenevo}
                      alt="error"
                      width="130px"
                      height="130px"
                    />
                  </div>
                  <div className="comp_logo d-flex align-items-center justify-content-center">
                    <img
                      src={lenevo}
                      alt="error"
                      width="130px"
                      height="130px"
                    />
                  </div>
                  <div className="comp_logo d-flex align-items-center justify-content-center">
                    <img
                      src={lenevo}
                      alt="error"
                      width="130px"
                      height="130px"
                    />
                  </div>
                </div>
              </div>
              <div className="lg-none">
                <Marquee
                  behavior="scroll"
                  direction="left"
                  speed="100"
                  gradientColor="none"
                >
                  <div
                    style={{ paddingTop: "50px" }}
                    className="d-flex justify-content-between sm-gap-20"
                  >
                    <div className="comp_logo d-flex align-items-center justify-content-center">
                      <img
                        src={lenevo}
                        alt="error"
                        width="130px"
                        height="130px"
                      />
                    </div>
                    <div className="comp_logo d-flex align-items-center justify-content-center">
                      <img
                        src={lenevo}
                        alt="error"
                        width="130px"
                        height="130px"
                      />
                    </div>
                    <div className="comp_logo d-flex align-items-center justify-content-center">
                      <img
                        src={lenevo}
                        alt="error"
                        width="130px"
                        height="130px"
                      />
                    </div>
                    <div className="comp_logo d-flex align-items-center justify-content-center">
                      <img
                        src={lenevo}
                        alt="error"
                        width="130px"
                        height="130px"
                      />
                    </div>
                    <div className="comp_logo d-flex align-items-center justify-content-center">
                      <img
                        src={lenevo}
                        alt="error"
                        width="130px"
                        height="130px"
                      />
                    </div>
                    <div className="comp_logo d-flex align-items-center justify-content-center">
                      <img
                        src={lenevo}
                        alt="error"
                        width="130px"
                        height="130px"
                      />
                    </div>
                    <div className="comp_logo d-flex align-items-center justify-content-center">
                      <img
                        src={lenevo}
                        alt="error"
                        width="130px"
                        height="130px"
                      />
                    </div>
                    <div className="comp_logo d-flex align-items-center justify-content-center">
                      <img
                        src={lenevo}
                        alt="error"
                        width="130px"
                        height="130px"
                      />
                    </div>
                    <div className="comp_logo d-flex align-items-center justify-content-center">
                      <img
                        src={lenevo}
                        alt="error"
                        width="130px"
                        height="130px"
                      />
                    </div>
                    <div className="comp_logo d-flex align-items-center justify-content-center">
                      <img
                        src={lenevo}
                        alt="error"
                        width="130px"
                        height="130px"
                      />
                    </div>
                    <div className="comp_logo d-flex align-items-center justify-content-center">
                      <img
                        src={lenevo}
                        alt="error"
                        width="130px"
                        height="130px"
                      />
                    </div>
                    <div className="comp_logo d-flex align-items-center justify-content-center">
                      <img
                        src={lenevo}
                        alt="error"
                        width="130px"
                        height="130px"
                      />
                    </div>
                  </div>
                </Marquee>
              </div>
              <div
                className="d-flex justify-content-center align-items-center mt-5 sm-none"
                style={{ gap: "11px" }}
              >
                <div className="dot-active"></div>
                <div className="dot-inactive"></div>
                <div className="dot-inactive"></div>
              </div>
            </div>
          </div>
          <div className="pas_box_1 sm-pt1" data-aos="fade-up">
            <div className="container" style={{ position: "relative" }}>
              <img
                src={Component_226_5}
                alt="logo"
                className="car_effect_03 sm-none"
              />

              <div className="pas_box_text sm-pt1">
                <div style={{ fontSize: "30px" }}>
                  <b className="sm-25">Our Privileged Customers</b>
                </div>
                <div style={{ fontSize: "18px" }}>
                  More then 150 Brands & Counting
                </div>
              </div>

              <div className="sm-none">
                <div
                  style={{ paddingTop: "50px" }}
                  className="d-flex justify-content-between"
                >
                  <div className="comp_logo d-flex align-items-center justify-content-center">
                    <img
                      src={lenevo}
                      alt="error"
                      width="130px"
                      height="130px"
                    />
                  </div>
                  <div className="comp_logo d-flex align-items-center justify-content-center">
                    <img
                      src={lenevo}
                      alt="error"
                      width="130px"
                      height="130px"
                    />
                  </div>
                  <div className="comp_logo d-flex align-items-center justify-content-center">
                    <img
                      src={lenevo}
                      alt="error"
                      width="130px"
                      height="130px"
                    />
                  </div>
                  <div className="comp_logo d-flex align-items-center justify-content-center">
                    <img
                      src={lenevo}
                      alt="error"
                      width="130px"
                      height="130px"
                    />
                  </div>
                  <div className="comp_logo d-flex align-items-center justify-content-center">
                    <img
                      src={lenevo}
                      alt="error"
                      width="130px"
                      height="130px"
                    />
                  </div>
                  <div className="comp_logo d-flex align-items-center justify-content-center">
                    <img
                      src={lenevo}
                      alt="error"
                      width="130px"
                      height="130px"
                    />
                  </div>
                </div>
                <div
                  style={{ paddingTop: "30px" }}
                  className="d-flex justify-content-between"
                >
                  <div className="comp_logo d-flex align-items-center justify-content-center">
                    <img
                      src={lenevo}
                      alt="error"
                      width="130px"
                      height="130px"
                    />
                  </div>
                  <div className="comp_logo d-flex align-items-center justify-content-center">
                    <img
                      src={lenevo}
                      alt="error"
                      width="130px"
                      height="130px"
                    />
                  </div>
                  <div className="comp_logo d-flex align-items-center justify-content-center">
                    <img
                      src={lenevo}
                      alt="error"
                      width="130px"
                      height="130px"
                    />
                  </div>
                  <div className="comp_logo d-flex align-items-center justify-content-center">
                    <img
                      src={lenevo}
                      alt="error"
                      width="130px"
                      height="130px"
                    />
                  </div>
                  <div className="comp_logo d-flex align-items-center justify-content-center">
                    <img
                      src={lenevo}
                      alt="error"
                      width="130px"
                      height="130px"
                    />
                  </div>
                  <div className="comp_logo d-flex align-items-center justify-content-center">
                    <img
                      src={lenevo}
                      alt="error"
                      width="130px"
                      height="130px"
                    />
                  </div>
                </div>
              </div>
              <div className="lg-none">
                <Marquee
                  behavior="scroll"
                  direction="left"
                  speed="100"
                  gradientColor="none"
                >
                  <div
                    style={{ paddingTop: "50px" }}
                    className="d-flex justify-content-between sm-gap-20"
                  >
                    <div className="comp_logo d-flex align-items-center justify-content-center">
                      <img
                        src={lenevo}
                        alt="error"
                        width="130px"
                        height="130px"
                      />
                    </div>
                    <div className="comp_logo d-flex align-items-center justify-content-center">
                      <img
                        src={lenevo}
                        alt="error"
                        width="130px"
                        height="130px"
                      />
                    </div>
                    <div className="comp_logo d-flex align-items-center justify-content-center">
                      <img
                        src={lenevo}
                        alt="error"
                        width="130px"
                        height="130px"
                      />
                    </div>
                    <div className="comp_logo d-flex align-items-center justify-content-center">
                      <img
                        src={lenevo}
                        alt="error"
                        width="130px"
                        height="130px"
                      />
                    </div>
                    <div className="comp_logo d-flex align-items-center justify-content-center">
                      <img
                        src={lenevo}
                        alt="error"
                        width="130px"
                        height="130px"
                      />
                    </div>
                    <div className="comp_logo d-flex align-items-center justify-content-center">
                      <img
                        src={lenevo}
                        alt="error"
                        width="130px"
                        height="130px"
                      />
                    </div>
                    <div className="comp_logo d-flex align-items-center justify-content-center">
                      <img
                        src={lenevo}
                        alt="error"
                        width="130px"
                        height="130px"
                      />
                    </div>
                    <div className="comp_logo d-flex align-items-center justify-content-center">
                      <img
                        src={lenevo}
                        alt="error"
                        width="130px"
                        height="130px"
                      />
                    </div>
                    <div className="comp_logo d-flex align-items-center justify-content-center">
                      <img
                        src={lenevo}
                        alt="error"
                        width="130px"
                        height="130px"
                      />
                    </div>
                    <div className="comp_logo d-flex align-items-center justify-content-center">
                      <img
                        src={lenevo}
                        alt="error"
                        width="130px"
                        height="130px"
                      />
                    </div>
                    <div className="comp_logo d-flex align-items-center justify-content-center">
                      <img
                        src={lenevo}
                        alt="error"
                        width="130px"
                        height="130px"
                      />
                    </div>
                    <div className="comp_logo d-flex align-items-center justify-content-center">
                      <img
                        src={lenevo}
                        alt="error"
                        width="130px"
                        height="130px"
                      />
                    </div>
                  </div>
                </Marquee>
              </div>
              <div
                className="d-flex justify-content-center align-items-center mt-5 sm-none"
                style={{ gap: "11px" }}
              >
                <div className="dot-active"></div>
                <div className="dot-inactive"></div>
                <div className="dot-inactive"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="event_box"
        data-aos="fade-zoom-in"
        data-aos-offset="250"
        data-aos-easing="ease-in-sine"
      >
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12" style={{ padding: "0px" }}>
            <img src={event} alt="event_banner" width="100%" height="361px" />
          </div>
          <div className="col-lg-6 col-md-6 col-12" style={{ padding: "0px" }}>
            <div style={{ padding: "45px 101px" }}>
              <div
                style={{
                  fontSize: "15px",
                  color: "#0883E6",
                  textAlign: "right",
                  marginRight: "70px",
                }}
              >
                <u>SEE ALL EVENTS</u>
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#00155A",
                  marginTop: "28px",
                }}
              >
                <b>ANNUAL EVENT</b>
              </div>
              <div
                style={{
                  marginTop: "21px",
                  fontSize: "14px",
                  color: "#999999",
                }}
              >
                SEP 20, 2022
              </div>
              <div style={{ color: "#111111", fontSize: "24px" }}>
                OSG Techotsav, Registration <br />
                begins now!
              </div>
              <div className="mt-4">
                <button className="btn btn-register">Register for free</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="caseStudy sm-pt3" data-aos="fade-up">
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
            style={{ padding: "50px 0px", gap: "28px" }}
            className="d-flex flex-column sm-none"
            data-aos="fade-left"
          >
            <div className="d-flex align-items-center justify-content-between">
              <div style={{ color: "#000000", fontSize: "24px" }}>
                Case Study by Verticals
              </div>
              <div className="cs_02">All</div>
              <div className="cs_03">NBFC</div>
              <div className="cs_03">Health Care</div>
              <div className="cs_03">Manufacturing</div>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <div className="cs_03">Retail</div>
              <div className="cs_03">Pharmaceuticals</div>
              <div className="cs_03">Automotive</div>
              <div className="cs_03">Education</div>
              <div className="cs_03">Others</div>
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center sm-scroll srolling_effect sm-gap-40 mt-2 sm-mt2 ">
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
                  Capital Confidential: ‘Big Short’ author contemplates taking
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
                  Europe’s largest money manager warns of an investment industry
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
          <div
            className="d-flex justify-content-center align-items-center mt-5 sm-none"
            style={{ gap: "11px" }}
          >
            <div className="dot-active"></div>
            <div className="dot-inactive"></div>
            <div className="dot-inactive"></div>
          </div>
        </div>
        <div className="awards sm-pt1" data-aos="fade-up">
          <div className="container" style={{ position: "relative" }}>
            <img
              src={Component_226_5}
              alt="logo"
              className="car_effect_03 sm-none"
            />
            <div className="d-flex align-items-center justify-content-between ">
              <div>
                <div style={{ color: "#111111" }} className="thirty">
                  <b className="sm-25">Awards & Recognitions</b>
                </div>
                <div
                  style={{ color: "#555554", fontSize: "18px" }}
                  className="sm-none"
                >
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
              className="d-flex justify-content-between sm-gap-10  sm-scroll "
            >
              <div
                className="comp_logo_1 d-flex align-items-center justify-content-center"
                data-aos="flip-left"
              >
                <img src={lenevo} alt="error" width="240px" height="240px" />
              </div>
              <div
                className="comp_logo_1 d-flex align-items-center justify-content-center"
                data-aos="flip-left"
              >
                <img src={lenevo} alt="error" width="240px" height="240px" />
              </div>
              <div
                className="comp_logo_1 d-flex align-items-center justify-content-center"
                data-aos="flip-left"
              >
                <img src={lenevo} alt="error" width="240px" height="240px" />
              </div>
            </div>
            <div
              className="d-flex justify-content-center align-items-center sm-none"
              style={{ gap: "11px", marginTop: "80px" }}
            >
              <div className="dot-active"></div>
              <div className="dot-inactive"></div>
              <div className="dot-inactive"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog_post sm-pt2" data-aos="fade-up">
        <div className="container" style={{ position: "relative" }}>
          <img
            src={Component_226_5}
            alt="logo"
            className="car_effect_03 sm-none"
          />
          <div
            className="d-flex align-items-center justify-content-between"
            style={{ paddingTop: "10px" }}
          >
            <div style={{ color: "#00155A" }} className="thirty">
              <b className="sm-25">Blogs & Posts</b>
            </div>
            <div style={{ color: "#0883E6" }} className="fifteen">
              <u>EXPLORE</u>
            </div>
          </div>

          <div
            className="d-flex justify-content-between srolling_effect sm-scroll sm-gap-10"
            style={{ marginTop: "50px" }}
          >
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
                  Capital Confidential: ‘Big Short’ author contemplates taking
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
                  Europe’s largest money manager warns of an investment industry
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
          <div
            className="d-flex justify-content-center align-items-center sm-none"
            style={{ gap: "11px", marginTop: "80px" }}
          >
            <div className="dot-active"></div>
            <div className="dot-inactive"></div>
            <div className="dot-inactive"></div>
          </div>
        </div>
      </div>

      <div className=" testimonial sm-pt2" data-aos="fade-right">
        <div className="container" style={{ position: "relative" }}>
          <img
            src={Component_226_5}
            alt="logo"
            className="car_effect_03 sm-none"
          />
          <div style={{ color: "#00155A" }} className="thirty">
            <b className="sm-25">Why Choose Us!</b>
          </div>
          <div style={{ color: "#27187F", fontSize: "18px" }}>
            See what people are saying
          </div>
          <div style={{ paddingTop: "50px" }}>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12">
                <div
                  className="d-flex flex-column justify-content-center align-items-end align-flex-start"
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
                        <div style={{ color: "#1F568C", fontSize: "18px" }}>
                          Natasha Singh
                        </div>
                        <div style={{ color: "#00155A", fontSize: "16px" }}>
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
                        <div style={{ color: "#1F568C", fontSize: "18px" }}>
                          Alex Morgan
                        </div>
                        <div style={{ color: "#00155A", fontSize: "16px" }}>
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
                        <div style={{ color: "#1F568C", fontSize: "18px" }}>
                          Arthur Hansen
                        </div>
                        <div style={{ color: "#00155A", fontSize: "16px" }}>
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
                        <div style={{ color: "#1F568C", fontSize: "18px" }}>
                          Alex Morgan
                        </div>
                        <div style={{ color: "#00155A", fontSize: "16px" }}>
                          DHFL
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hifen sm-none">
                    <img
                      src={Component_283_3}
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
              <div
                className="col-lg-4 col-md-4 col-12 sm-mt2"
                data-aos="flip-right"
              >
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
                      " Great Service and Support by Partner as well as Team,
                      Quick Service and Robust Customer support are thr keys of
                      success to Techigent. Kewep doing good "
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
              <div
                className="col-lg-4 col-md-4 col-12 sm-mt2"
                data-aos="flip-right"
              >
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
                      " Great Service and Support by Partner as well as Team,
                      Quick Service and Robust Customer support are thr keys of
                      success to Techigent. Kewep doing good "
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

      <div className="blog_post sm-pt2">
        <div className="container" style={{ position: "relative" }}>
          <img
            src={Component_226_5}
            alt="logo"
            className="car_effect_03 sm-none"
          />
          <div
            className="d-flex align-items-center justify-content-between sm-pt1"
            style={{ paddingTop: "10px" }}
            data-aos="fade-left"
          >
            <div style={{ color: "#00155A" }} className="thirty">
              <b className="sm-25">News & Events</b>
            </div>
            <div style={{ color: "#0883E6" }} className="fifteen">
              <u>EXPLORE</u>
            </div>
          </div>
          <div
            className="d-flex justify-content-between srolling_effect sm-gap-20"
            style={{ marginTop: "50px" }}
          >
            <div className="cs_01" data-aos="flip-left">
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
                  Capital Confidential: ‘Big Short’ author contemplates taking
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

            <div className="cs_01" data-aos="flip-left">
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
            <div className="cs_01" data-aos="flip-left">
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
                  Europe’s largest money manager warns of an investment industry
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
          <div
            className="d-flex justify-content-center align-items-center sm-none"
            style={{ gap: "11px", marginTop: "80px" }}
          >
            <div className="dot-active"></div>
            <div className="dot-inactive"></div>
            <div className="dot-inactive"></div>
          </div>
        </div>
      </div>

      <div
        className="container sm-pt1"
        style={{ padding: "65px 10px 40px 10px" }}
        data-aos="fade-right"
      >
        <div className="row">
          <div className="col-lg-8 col-md-8 col-12">
            <div style={{ fontSize: "21px", color: "#111111" }}>
              <b>Stay Updated!</b>
            </div>
            <div
              style={{ fontSize: "15px", width: "614px", color: "#111111" }}
              className="mt-3"
            >
              Subscribe to our Newsletter and stay updated on Industry Trends,
              New Products & Services and much more
            </div>

            <div
              className="d-flex align-items-center"
              style={{ marginTop: "20px" }}
            >
              <input
                type="text"
                className="mail_input"
                placeholder="Enter Your E-mail Here"
              />
              <div className="mail_btn btn d-flex align-items-center justify-content-center">
                <IoIosMail />
              </div>
            </div>

            <div
              className="d-flex align-items-center mt-3"
              style={{ gap: "20px" }}
            >
              <div className="icons_box d-flex align-items-center justify-content-center">
                <FaFacebookF />
              </div>
              <div className="icons_box d-flex align-items-center justify-content-center">
                <FaWhatsapp />
              </div>
              <div className="icons_box d-flex align-items-center justify-content-center">
                <FaInstagram />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img src={Component_234_1} className="daak_ghar" alt="error" />
          </div>
        </div>
      </div>

      <div className="contact sm-pt3" data-aos="fade-up">
        <div className="tech_contact sm-none">
          <img src={Component_225_1} alt="tech" width="139px" height="139px" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12">
              <div
                style={{ color: "#000000", fontSize: "40px" }}
                className="sm-30"
              >
                <b className="sm-25">We would like to here from you !</b>
              </div>
              <div
                style={{ fontSize: "18px", color: "#555554" }}
                className="mt-4 sm-14"
              >
                Just leave your email with us! and we'll get back to you!
              </div>
              <div className="mt-5">
                <img
                  src={Component_161_1}
                  className="sm-none"
                  alt="error"
                  width="472px"
                  height="127px"
                />
              </div>
            </div>
            <div className="col-lg-1 col-md-2"></div>
            <div className="col-lg-7 col-md-6 col-12">
              <form>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input
                        className="form-control own_input"
                        placeholder="Your full name"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input
                        className="form-control own_input"
                        placeholder="How can we help ?"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 mt-3">
                    <div className="form-group">
                      <input
                        className="form-control own_input"
                        placeholder="Your email address"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 mt-3">
                    <div className="form-group">
                      <input
                        className="form-control own_input"
                        placeholder="Your mobile number"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-12 mt-3">
                    <div className="form-group">
                      <textarea
                        rows="3"
                        className="form-control own_input"
                        placeholder="Type your message here for us"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-4">
                  <div
                    className="d-flex align-items-center justify-content-center send_btn btn"
                    style={{ gap: "8px" }}
                  >
                    <div>Send</div>
                    <FiSend style={{ fontSize: "18px" }} />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="tech_circle sm-none">
          <img src={Component_225_1} alt="tech" width="139px" height="139px" />
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

export default Home;
