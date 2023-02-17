import React from "react";

const Heropage = (props) => {
  console.log("hero", props.data);
  const data = props?.data;

  const styles = {
    backgroundImage: `url(${data?.hero_image?.url}), linear-gradient(90deg, rgba(20, 27, 35, 0.4) 0%, rgba(20, 27, 36, 0.9) 100%) `,
    height: "90vh",
    backgroundSize: "100% 100%",
    backgroundBlendMode: "overlay",
  };

  let title = data?.title?.replace("</br>", "");
  let mainTitle = title?.split(" ");
  mainTitle?.lenght > 0 &&
    console.log("vvvvvvvvvvvvvv", mainTitle, mainTitle[3]);

  // second = second?.join(" ")

  return (
    <div className="bannerpart">
      <div className="row">
        <div className="col-lg-9">
          <div className="">
            <div className="bannerImage" style={styles}>
              <div className="bannerDiv">
                <div className="bannerTitel">
                  <p>
                    {" "}
                    Power <br />
                    On Your Side
                  </p>
                </div>
                <div className="bannerDesc">
                  <p>{data?.short_description} </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="statsDiv px-5">
            {data?.hero_stats?.map((val) => {
              return (
                <>
                  <div className="statTitle">{val.title}</div>
                  <div className="statDescription">{val.subtitle}</div>
                  <hr />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heropage;
