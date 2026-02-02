import "./App.css";
import React, { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const submitHandler = (e) => {
    e.preventDefault();

    const { email, phoneNo, dob } = e.target;

    if (!email.value.includes("@")) {
      alert("Invalid email");
    } else if (phoneNo.value.length !== 10) {
      alert("Invalid phone number");
    } else if (new Date(dob.value) > new Date()) {
      alert("Invalid date of birth");
    } else {
      e.target.reset();
    }
  };

  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button onClick={openModal}>Open Form</button>

      {isOpen && (
        <div className="modal" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <form onSubmit={submitHandler}>
              <h2>Fill Details</h2>

              <div className="input-group">
                <label>Username:</label>
                <input id="username" type="text" />
              </div>

              <div className="input-group">
                <label>Email:</label>
                <input id="email" type="email" required />
              </div>

              <div className="input-group">
                <label>Phone:</label>
                <input id="phone" type="number" required />
              </div>

              <div className="input-group">
                <label>DOB:</label>
                <input id="dob" type="date" />
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
