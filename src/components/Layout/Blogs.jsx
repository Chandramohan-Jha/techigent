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

const Blogs = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 130 });
  }, []);
  return (
    <>
      <MainHeader
        img="c_img_case sm-carrer-img"
        name="Blogs & Posts"
        title="Knowledge is Wisdom"
      />
      <div className="blog_post sm-pd-top">
        <div className="container" style={{ position: "relative" }}>
          <img src={Component_226_5} alt="logo" className="car_effect_03 sm-none" />
          <div
            className="d-flex align-items-center justify-content-between"
            style={{ paddingTop: "10px" }}
          >
            <div
              style={{ color: "#00155A" }}
              className="thirty"
              data-aos="fade-up"
            >
              <b>All Blogs & Posts</b>
            </div>
          </div>
          <div
            className="d-flex justify-content-between srolling_effect sm-gap-10"
            style={{ marginTop: "50px" }}
            data-aos="fade-up"
          >
            <div className="cs_01">
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

            <div className="cs_01">
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
            <div className="cs_01">
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
            className="d-flex justify-content-between srolling_effect sm-gap-10"
            style={{ marginTop: "50px" }}
            data-aos="fade-up"
          >
            <div className="cs_01">
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

            <div className="cs_01">
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
            <div className="cs_01">
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

export default Blogs;
