import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import Heropage from "./components/heropage";
import Navpage from "./components/navpage";
import Casepage from "./components/casepage";
import "./index.css";
import axios from "axios";
import Footer from "./components/footer";
import Form from "./components/form";
import Logoslider from "./components/logoslider";

const Homepage = () => {
  const [allData, setallData] = useState(null);
  console.log("allData", allData);

  useEffect(() => {
    axios
      .get("https://php.spinxweb.net/keller-postman/wp-json/wp/v2/pages/6")
      .then((val) => {
        setallData(val?.data?.acf);
      });
  }, []);

  return (
    <>
      {allData ? (
        <>
          <Navpage />
          <Heropage data={allData?.home_hero_section} />
          <Casepage data={allData?.case_section} />
          <Logoslider data={allData?.logo_section} />
          <Form />
          <Footer />
        </>
      ) : (
        <div className="row">
          <div className="col-lg-12 loaderContent">
            <LoadingOutlined style={{fontSize:'75px' }} />
          </div>
        </div>
      )}
    </>
  );
};

export default Homepage;
