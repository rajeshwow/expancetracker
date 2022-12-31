import React from "react";
import { useState, useEffect } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";

const Header = (Props) => {
  let { balance, expence } = Props.totalAmounts;
  const [showAddModal, setshowAddModal] = useState(false);
  const [buttonName, setbuttonName] = useState("");
  const [formType, setformType] = useState("");
  const [formAmount, setformAmount] = useState("");
  const [formDescription, setformDescription] = useState("");
  const [showAlert, setshowAlert] = useState(false);

  const handleCloseAddAmount = () => setshowAddModal(false);

  const handleshowAddModal = (type) => {
    setformType(type);
    setshowAddModal(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setshowAlert(false);
    }, 3000);
  }, [showAlert]);

  const onSubmitData = () => {
    if (!formAmount || !formDescription) {
      setshowAlert(true);
    } else {
      const formValues = {
        amount: formAmount,
        description: formDescription,
        type: formType,
      };
      setshowAddModal(false);
      Props.onFormSubmits(formValues);
      setformAmount();
      setformDescription();
    }
  };

  const onAmountChange = (event) => {
    setformAmount(event.target.value);
  };
  const onDescriptionChange = (event) => {
    setformDescription(event.target.value);
  };

  useEffect(() => {
    formType === "addAmount"
      ? setbuttonName("Add Amount")
      : setbuttonName("Add Expence");
  }, [formType]);

  return (
    <>
      <div className="row">
        <div className="col">
          <div className="alert alert-secondary">
            <span>Balance: £ {balance}</span>
          </div>
        </div>
        <div className="col">
          <div className="alert alert-primary">
            <span>Expance: £ {expence}</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col text-center  col-lg-12">
          <button
            type="button"
            className="btn btn-primary "
            onClick={() => handleshowAddModal("addAmount")}
          >
            Add Amount
          </button>
        </div>
        <div className="col text-center  col-lg-12 mt-2">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => handleshowAddModal("addExpence")}
          >
            Add Expence
          </button>
        </div>
      </div>

      <Modal show={showAddModal} onHide={handleCloseAddAmount}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Alert show={showAlert} key={"danger"} variant={"danger"}>
            Please fill all the fields.
          </Alert>
          <Form validate="true">
            <Form.Group>
              <Form.Label>
                Amount <span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                value={formAmount}
                type="number"
                required
                onChange={onAmountChange}
                name="amount"
              />{" "}
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Description <span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                value={formDescription}
                type="text"
                required
                name="Description"
                onChange={onDescriptionChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Button
        className="mb-2 pb-2 rounded-0"
        width={'90%'}
          onClick={() => {
            onSubmitData();
          }}
          variant="primary"
        >
          {buttonName}
        </Button>
      </Modal>
    </>
  );
};

export default Header;
