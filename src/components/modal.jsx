import React from "react";
import { useState, useEffect } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";

const Modals = (Props) => {
  let { balance, description ,type} = Props.record ? Props?.record[0] : Props;
  const [showAddModals, setshowAddModals] = useState(false);
  const [buttonName, setbuttonName] = useState("");
  const [formType, setformType] = useState(type);
  const [formAmount, setformAmount] = useState("");
  const [formDescription, setformDescription] = useState("");
  const [showAlert, setshowAlert] = useState(false);

  const handleCloseAddAmount = () => setshowAddModals(false);

  const handleshowAddModals = (type) => {
    setformType(type);
    setshowAddModals(true);
  };



  useEffect(() => {
    setshowAddModals(true)
    if (balance) {
        setformAmount(balance)
    }
    if (description) {
        setformDescription(description)
    }
  }, [Props])
  

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
      setshowAddModals(false);
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
  

      <Modal show={showAddModals} onHide={handleCloseAddAmount}>
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

export default Modals;
