import React from "react";

const MainHeader = (props) => {
  return (
    <>
      <div>
        <div className={props.img}>
          <div style={{ width: "100%", textAlign: "left", color: "#fff" }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div
                    style={{ height: "443px" }}
                    className="sm-carrer-img fix_index align-items-center d-flex flex-column justify-content-center"
                  >
                    <div
                      style={{ fontSize: "48px", letterSpacing: "2.4px" }}
                      data-text={props.name}
                      className="name_effect sm-30"
                    >
                      {props.name}
                    </div>
                    <div style={{ fontSize: "30px" }} className="mt-3 sm-none ">
                      {props.title}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
