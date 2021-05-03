import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import baseDb from "../firebase";

 
const Contacts = () => {
  var [currentId, setCurrentId] = useState("");
  var [contactObjects, setContactObjects] = useState({});

 
  //Once components load complete
  useEffect(() => {
    baseDb.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() != null) {
        setContactObjects({
          ...snapshot.val(),
        });
      }
    });
  }, []);

 
  //edit option
  const addOrEdit = (obj) => {
    if (currentId == "")
      baseDb.child("contacts").push(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    else
      baseDb.child(`contacts/${currentId}`).set(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
  };

 
  //for delete option
  const onDelete = (id) => {
    if (window.confirm("Are you sure to delete this record?")) {
      baseDb.child(`contacts/${id}`).remove((err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    }
  };

 
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center">Contact Manager</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <ContactForm
            {...{ currentId, contactObjects, addOrEdit }}
          ></ContactForm>
        </div>
        <div className="col-md-7">
          <table className="table table-borderless table-stripped">
            <thead className="thead-light">
              <tr>
                <th>Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>address</th>
                <th>Actions/Events</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(contactObjects).map((key) => (
                <tr key={key}>
                  <td>{contactObjects[key].fullName}</td>
                  <td>{contactObjects[key].mobile}</td>
                  <td>{contactObjects[key].email}</td>
                  <td>{contactObjects[key].address}</td>
                  <td className="bg-light">
                    <a
                      className="btn text-primary"
                      onClick={() => {
                        setCurrentId(key);
                      }}
                    >
                      <i className="fas fa-pencil-alt"></i>
                    </a>
                    <a
                      className="btn text-danger"
                      onClick={() => {
                        onDelete(key);
                      }}
                    >
                      <i className="far fa-trash-alt"></i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

 
export default Contacts;