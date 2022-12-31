import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/headers";
import List from "./components/list";
import { Modal, Button, Form, Alert } from "react-bootstrap";

const App = () => {
  const [totalAmount, settotalAmount] = useState({
    balance: 0,
    expence: 0,
  });
  const [showAlert, setshowAlert] = useState(false);
  const [expenceList, setexpenceList] = useState([]);
  const [errorMessage, seterrorMessage] = useState('')

  const onFromSubmit = (values) => {
    if (values.type === "addAmount") {
      const newValues = {
        balance: values.amount,
        description: values.description,
        id: Math.random().toString(16).slice(2),
        type: "add",
      };
      settotalAmount({
        ...totalAmount,
        balance: Number(totalAmount.balance) + Number(values.amount),
      });
      setexpenceList((current) => [...current, newValues]);
    } else {
      const newValues = {
        expence: values.amount,
        description: values.description,
        id: Math.random().toString(16).slice(2),
        type: "expence",
      };
      settotalAmount({
        ...totalAmount,
        balance: Number(totalAmount.balance) - Number(values.amount),
        expence: values.amount,
      });
      setexpenceList((current) => [...current, newValues]);
    }
  };

  const deleteRecords = (id) => {
    let oldValues = [...expenceList];
    setexpenceList(
      oldValues.filter((val) => {
        return val.id !== id;
      })
    );
    const DeletedValue = oldValues.filter(val=>{
      return val.id === id
    })[0]
    DeletedValue.type === 'add' ? settotalAmount({
      ...totalAmount,
      balance: Number(totalAmount.balance) - Number(DeletedValue.balance  ),
    }) : settotalAmount({
      ...totalAmount,
      expence:Number(totalAmount.expence) - Number(DeletedValue.expence),
      balance: Number(totalAmount.balance) + Number(DeletedValue.expence  ),
    });
    setshowAlert(true);
    seterrorMessage('Expense list updated')
  };

  useEffect(() => {
    if (totalAmount.expence > totalAmount.balance) {
      setshowAlert(true)
      seterrorMessage("Your expense is too high")
    }
  }, [totalAmount])
  

  useEffect(() => {
    setTimeout(() => {
      setshowAlert(false);
    }, 3000);
  }, [showAlert]);



  return (
    <>
    <h1 className="mt-3 text-center" style={{color:'white'}}>My Budget Planner</h1>
    <div className="container pt-3" style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',background:'#fff'}}>
      <Alert show={showAlert} key={"danger"} variant={"danger"}>
        {errorMessage}
      </Alert>
      <div className="row mt-3">
        <Header
          totalAmounts={totalAmount}
          onFormSubmits={(e) => onFromSubmit(e)}
        />
      </div>
      <div className="row mt-3">
        <List
          onDelete={(e) => {
            deleteRecords(e);
          }}
          expenceLists={expenceList}
        />
      </div>
    </div>
    </>
    
  );
};

export default App;
