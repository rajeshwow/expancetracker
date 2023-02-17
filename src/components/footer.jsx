import React from "react";
import { ReactComponent as LinkedIn } from "./icons/linkedin.svg";
import { ReactComponent as Facebook } from "./icons/facebook.svg";
import { ReactComponent as Twitter } from "./icons/twitter.svg";

const Footer = () => {
  return (
    <>
      <footer className="footerClass ">
        <h1 className="text-center">
          {" "}
          <span className="callus">Call us at</span>{" "}
          <span className="whiteColor">872-264-6677</span>{" "}
        </h1>
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="fTitle">
                <span>sitemap</span>
              </div>
              <br />
              <div className="footerLinks">
                <ul>
                  <li>about</li>
                  <li>our team</li>
                  <li>cases</li>
                  <li>Practice areas</li>
                  <li>news and insights</li>
                  <li>careers</li>
                </ul>
              </div>

              <br />
              <br />
              <div className="fTitle">
                <span>Follow us</span>
              </div>
              <br />
              <div className="socialIcons">
                <span className="iconss ps-0">
                  <LinkedIn />
                </span>
                <span className="iconss">
                  <Facebook />
                </span>
                <span className="iconss">
                  <Twitter />
                </span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="fTitle">
                <span>featured cases</span>
              </div>
              <br />
              <div className="footerLinks">
                <ul>
                  <li>Camp Lejeune Litigation</li>
                  <li>3M Combat Arms Litigation</li>
                  <li>Acetaminophen Litigation</li>
                  <li>NEC/Infant-Formula Litigation</li>
                  <li>Paragard IUD Litigation</li>
                  <li>Zantac (Ranitidine) Litigation</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="fTitle">
                <span>offices</span>
              </div>
              <br />
              <div className="footerLinks">
                <div className="addressTitle">Chicago, IL</div>
                <div className="addresses">
                  150 N, River side Plaza, Suit 4100 <br />
                  Chicago, IL
                </div>
                <br />
                <div className="addressTitle">Chicago, IL</div>
                <div className="addresses">
                  150 N, River side Plaza, Suit 4100 <br />
                  Chicago, IL
                </div>
                <br />
                <div className="addressTitle">Chicago, IL</div>
                <div className="addresses">
                  150 N, River side Plaza, Suit 4100 <br />
                  Chicago, IL
                </div>
                <br />
                <div className="addressTitle">Chicago, IL</div>
                <div className="addresses">
                  150 N, River side Plaza, Suit 4100 <br />
                  Chicago, IL
                </div>
                <br />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="footerBottom">
                &copy; Keller Postman LLC. All Rights Reserverd. Designed by
                SPINX Digital terms Privacy Legal Discalimer <br />
                <small>
                  this site is protected by recaptcha and google Privacy Policy
                  and terms of service apply.
                </small>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
