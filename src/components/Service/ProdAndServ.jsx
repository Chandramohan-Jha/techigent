import React from "react";
import { useNavigate } from "react-router-dom";

// Components
import Footer from "../Layout/Footer";

// Icons
import { BiChevronRight } from "react-icons/bi";

// Images
import mobile from "../../Images/mobile.png";
import tclient from "../../Images/tclient.png";
import laptop from "../../Images/laptop.png";
import desktop from "../../Images/desktop.png";
import tablets from "../../Images/tablet.png";
import FooterMob from "../Layout/FooterMob";

// Dummy Images
const lenevo =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSenIEcBXUF576K504uT4sS3MUJWV-Dke8tTaFWgEfFUg&s";

const ProdAndServ = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container" style={{ marginTop: "120px" }}>
        <div>
          <div
            style={{
              fontSize: "19px",
              marginTop: "52px",
              borderBottom: "1px solid #D1D3D4",
              cursor: "pointer",
            }}
            className="d-flex align-items-center justify-content-between sm-scroll sm-14 sm-gap-10"
          >
            <div
              style={{ paddingBottom: "20px" }}
              onClick={() => navigate("/product&service/endpoints")}
            >
              <b>Infrastructure Solutions</b>
            </div>
            <div
              style={{ paddingBottom: "20px" }}
              onClick={() => navigate("/product&service/hardware-solutions")}
            >
              <b>Hardware Solutions</b>
            </div>
            <div
              style={{ paddingBottom: "20px" }}
              onClick={() => navigate("/product&service/software-solutions")}
            >
              <b>Software Solutions</b>
            </div>
            <div style={{ paddingBottom: "20px" }}>
              <b>Others</b>
            </div>
          </div>

          <div className="row" style={{ margin: "50px 0px" }}>
            <div
              className="col-lg-6 col-md-6 col-12"
              style={{ paddingLeft: "0px" }}
            >
              <img src={laptop} width="100%" height="357px" alt="error" className='sm-carrer-img'/>
            </div>
            <div className="col-lg-6 col-md-6 col-12 sm-width100">
              <div style={{ color: "#1F568C", fontSize: "32px" }} >
                <b className="sm-25">Laptops</b>
              </div>
              <div
                style={{
                  color: "#5D6186",
                  fontSize: "16px",
                  width: "80%",
                  lineHeight: "25px",
                }}
                className="mt-3 "
              >
                We have everything for your IT Infrastructure needs ranging from
                computer hardware to software and solutions. We have everything
                for your IT Infrastructure needs ranging from computer hardware
                to software and solutions We have everything for your IT
                Infrastructure needs ranging from computer hardware to software
                and solutions. We have everything for your IT Infrastructure
                needs ranging from computer hardware to software and solutions.
                We have everything for your IT Infrastructure needs ranging from
                computer hardware to software and solutions. We have everything
                for your IT needs
              </div>
            </div>

            <p
              style={{ marginTop: "50px", fontSize: "16px", color: "#5D6186" }}
            >
              We have everything for your IT Infrastructure needs ranging from
              computer hardware to software and solutions We have everything for
              your IT Infrastructure needs ranging from computer hardware to
              software and solutions. We have everything for your IT
              Infrastructure needs ranging from computer hardware to software
              and solutions. We have everything for your IT Infrastructure needs
              ranging from computer hardware to software and solutions. We have
              everything for your IT Infrastructure needs ranging from computer
              hardware to software and solutions.
              <br />
              <br /> We have everything for your IT Infrastructure needs ranging
              from computer hardware to software and solutions. We have
              everything for your IT Infrastructure needs ranging from computer
              hardware to software and solutions. We have everything for your IT
              Infrastructure needs ranging from computer hardware to software
              and solutions. We have everything for your IT Infrastructure needs
              ranging from computer hardware to software and solutions We have
              everything for your IT Infrastructure needs ranging from computer
              hardware to software and solutions
              <br />
              <br /> We have everything for your IT Infrastructure needs ranging
              from computer hardware to software and solutions We have
              everything for your IT Infrastructure needs ranging from computer
              hardware to software and solutions. We have everything for your IT
              Infrastructure needs ranging from computer hardware to software
              and solutions. We have everything for your IT Infrastructure needs
              ranging from computer hardware to software and solutions. We have
              everything for your IT Infrastructure needs ranging from computer
              hardware to software and solutions.
              <br />
              <br /> We have everything for your IT Infrastructure needs ranging
              from computer hardware to software and solutions. We have
              everything for your IT Infrastructure needs ranging from computer
              hardware to software and solutions. We have everything for your IT
              Infrastructure needs ranging from computer hardware to software
              and solutions. We have everything for your IT Infrastructure needs
              ranging from computer hardware to software and solutions We have
              everything for your IT Infrastructure needs ranging from computer
              hardware to software and solutions
            </p>
          </div>

          <div className="awards_001 ">
            <div className="container sm-pt1">
              <div style={{ color: "#00155A" }} className="thirty">
                <b className="sm-25">Partners</b>
              </div>
              <div
                style={{ paddingTop: "50px" }}
                className="d-flex justify-content-between sm-pt1 sm-scroll"
              >
                <div className="comp_logo d-flex align-items-center justify-content-center">
                  <img src={lenevo} alt="error" width="130px" height="130px" />
                </div>
                <div className="comp_logo d-flex align-items-center justify-content-center">
                  <img src={lenevo} alt="error" width="130px" height="130px" />
                </div>
                <div className="comp_logo d-flex align-items-center justify-content-center">
                  <img src={lenevo} alt="error" width="130px" height="130px" />
                </div>
                <div className="comp_logo d-flex align-items-center justify-content-center">
                  <img src={lenevo} alt="error" width="130px" height="130px" />
                </div>
                <div className="comp_logo d-flex align-items-center justify-content-center">
                  <img src={lenevo} alt="error" width="130px" height="130px" />
                </div>
                <div className="comp_logo d-flex align-items-center justify-content-center">
                  <img src={lenevo} alt="error" width="130px" height="130px" />
                </div>
              </div>
            </div>
          </div>

          <div style={{ padding: "70px 0px 120px 0px" }}>
            <div className="d-flex srolling_effect" style={{ gap: "20px" }}>
              <div className="ps_box">
                <div style={{ width: "300px" }}>
                  <img
                    src={desktop}
                    alt="error"
                    className="ps_img"
                    width="100%"
                    height="170px"
                  />
                  <div
                    style={{ padding: "18px 28px" }}
                    className="d-flex align-items-center justify-content-between"
                  >
                    <div style={{ fontSize: "20px" }}>Desktops</div>
                    <BiChevronRight style={{ fontSize: "20px" }} />
                  </div>
                </div>
              </div>
              <div className="ps_box">
                <div style={{ width: "300px" }}>
                  <img
                    src={tablets}
                    alt="error"
                    className="ps_img"
                    width="100%"
                    height="170px"
                  />
                  <div
                    style={{ padding: "18px 28px" }}
                    className="d-flex align-items-center justify-content-between"
                  >
                    <div style={{ fontSize: "20px" }}>Tablets</div>
                    <BiChevronRight style={{ fontSize: "20px" }} />
                  </div>
                </div>
              </div>
              <div className="ps_box">
                <div style={{ width: "300px" }}>
                  <img
                    src={mobile}
                    alt="error"
                    className="ps_img"
                    width="100%"
                    height="170px"
                  />
                  <div
                    style={{ padding: "18px 28px" }}
                    className="d-flex align-items-center justify-content-between"
                  >
                    <div style={{ fontSize: "20px" }}>Mobile</div>
                    <BiChevronRight style={{ fontSize: "20px" }} />
                  </div>
                </div>
              </div>
              <div className="ps_box">
                <div style={{ width: "300px" }}>
                  <img
                    src={tclient}
                    alt="error"
                    className="ps_img"
                    width="100%"
                    height="170px"
                  />
                  <div
                    style={{ padding: "18px 28px" }}
                    className="d-flex align-items-center justify-content-between"
                  >
                    <div style={{ fontSize: "20px" }}>Thin Clients</div>
                    <BiChevronRight style={{ fontSize: "20px" }} />
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
    </>
  );
};

export default ProdAndServ;
