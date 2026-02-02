import "./App.css";
import React, { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    if (e.target.phoneNo.value.length !== 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
    } else if (new Date(e.target.dob.value).getTime() > Date.now()) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
    } else {
      e.target.reset();
    }
  };

  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button onClick={() => setIsOpen(true)}>Open Form</button>

      {isOpen && (
        <div
          className="modal-overlay"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <form onSubmit={submitHandler}>
              <h2>Fill Details</h2>

              <div className="input-group">
                <label>Username:</label>
                <input type="text" id="username" name="username" />
              </div>

              <div className="input-group">
                <label>Email Address:</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="input-group">
                <label>Phone Number:</label>
                <input type="number" id="phone" name="phoneNo" required />
              </div>

              <div className="input-group">
                <label>Date of Birth:</label>
                <input type="date" id="dob" name="dob" />
              </div>

              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
