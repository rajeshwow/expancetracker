import React from "react";
import { ReactComponent as DeleteIcon } from "../icons/delete.svg";
import { ReactComponent as UpIcon } from "../icons/caret-up-fill.svg";
import { ReactComponent as DownIcon } from "../icons/caret-down-fill.svg";
import { ReactComponent as EditIcon } from "../icons/pencil-fill.svg";

const List = (Props) => {
  let expenceList = Props.expenceLists;
console.log("expenceList",expenceList)

const deleteRecord = (id)=>{
    Props.onDelete(id)
}

const editRecord =(id)=>{
    Props.onEdit(id)
}
  return (
    <>
      <ol className="list-group ">
        {expenceList?.map((values) => {
          return (
            <>
              <li className="list-group-item">
                <div className="row">
                  <div className="col col-lg-9 col-md-5">
                    {
                        values.type === 'add' ? <DownIcon /> : <UpIcon />
                    }
                     {" "}{" "}
                    <span>{values.description}</span>
                  </div>
                  <div className="col">
                    <span>{values.type === 'add'? values.balance: values.expence}</span>
                  </div>
                  <div className="col col-lg-1 col-md-4" style={{textAlign:'right'}}>
                    <button onClick={()=>{deleteRecord(values.id)}} type="button" className="btn btn-danger">
                      <DeleteIcon />
                    </button>{" "}
                  </div>
                  <div className="col col-lg-1 col-md-4">
                    <button onClick={()=>{editRecord(values.id)}} type="button" className="btn btn-primary">
                      <EditIcon />
                    </button>
                  </div>
                </div>
              </li>
            </>
          );
        })}
      </ol>
    </>
  );
};

export default List;
