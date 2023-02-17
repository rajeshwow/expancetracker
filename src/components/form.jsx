import React from "react";
import { ReactComponent as Final } from "./icons/final.svg";

const Form = () => {
  return (
    <>
      <div className="formPart">
        <div className="container ">
            <h1 className="formtitle">Start your case today</h1>
            <br />
          <div className="row">
            <div className="col-lg-6">
              <Final />
            </div>
            <div className="col-lg-6 whiteColorBG">
              <div className="formSide">
                <div className="formDesc">
                  <p>
                    We are ready to start fighting for you. Tell us more about
                    your situation and a member of our team will contact you
                    shortly.
                  </p>
                </div>
                <form>
                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput">Full Name</label>
                  </div>
                  <div class="row g-2 mb-3">
                    <div class="col-md">
                      <div class="form-floating">
                        <input
                          type="email"
                          class="form-control"
                          id="floatingInputGrid"
                          placeholder="name@example.com"
                          //   value="mdo@example.com"
                        />
                        <label for="floatingInputGrid">Email address</label>
                      </div>
                    </div>
                    <div class="col-md">
                      <div class="form-floating">
                        <input
                          type="email"
                          class="form-control"
                          id="floatingInputGrid"
                          placeholder="name@example.com"
                          //   value="mdo@example.com"
                        />
                        <label for="floatingInputGrid">Phone Number</label>
                      </div>
                    </div>
                  </div>
                  <div class="row g-2 mb-3">
                    <div class="col-md">
                      <div class="form-floating">
                        <input
                          type="email"
                          class="form-control"
                          id="floatingInputGrid"
                          placeholder="name@example.com"
                          //   value="mdo@example.com"
                        />
                        <label for="floatingInputGrid">Zip code</label>
                      </div>
                    </div>
                    <div class="col-md">
                      <div class="form-floating">
                        <select
                          class="form-select"
                          id="floatingSelectGrid"
                          aria-label="Floating label select example"
                        >
                          <option selected>Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <label for="floatingSelectGrid">Select Case</label>
                      </div>
                    </div>
                  </div>
                  <div class="form-floating mb-3">
                    <textarea
                      class="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea"
                      style={{height: "120px"}}
                    ></textarea>
                    <label for="floatingTextarea">Describe your issue.</label>
                  </div>
                  <button type="submit" class="btn btn-primary btnBG">Submit free case evaluation</button>

                </form>

                <br /><br />
                <small>By Submitting, you agree to our <a href="#">Terms and Conditions</a> </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
