import React from "react";

const Logoslider = (props) => {
  const data = props?.data?.logos;
  console.log("logos", data);
  return (
    <>
      <div className="container h-100 py-5">
        <div className="row align-items-center h-100">
          <div className="container rounded ">
            <div className="slider">
              <div className="slide-track">
                {data?.map((val) => {
                  return (
                    <>
                      <div className="slide slideItems">
                        <img src={val?.select_logo?.url} alt="" />
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logoslider;
