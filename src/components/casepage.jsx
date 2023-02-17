import React from "react";

const Casepage = (props) => {
  console.log("case", props.data);
  const data = props?.data;
  return (
    <div className="container-fluid caseDiv">
      <h2 className="caseTitle">Case Helights</h2>

      <div className="caseWrapper">
        {data?.home_cases?.map((val) => {
          return (
            <>
              <div className="caseItems">
                <div className="card">
                  <img
                    src="https://media.istockphoto.com/id/1383504420/photo/portrait-of-baby-in-sleepwear-lying-under-gray-blanket-on-bed-at-home-sleeping-on-back-infant.jpg?b=1&s=170667a&w=0&k=20&c=_dJh5S-LiTjJiRZunmglj0XHlm1IiG23DXAmSn6ITHE="
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <p>
                      <b>{val.post_title}</b>
                    </p>
                    <p className="card-text">
                      Seeking justice for water contamination Victims <br />
                      <small>
                        As description and images not present in api, repeted
                        the same description.
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <a style={{textDecoration: 'none' }} href="#"><span className="viewCases"> {data?.link_text} </span></a>
      
    </div>
  );
};

export default Casepage;
