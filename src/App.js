import "./App.css";
import React, { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const dob = document.getElementById("dob").value;

    if (!email.includes("@")) {
      alert("Invalid email");
      return;
    }

    if (phone.length !== 10) {
      alert("Invalid phone number");
      return;
    }

    if (dob && new Date(dob) > new Date()) {
      alert("Invalid date of birth");
      return;
    }

    e.target.reset();
  };

  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button onClick={() => setIsOpen(true)}>Open Form</button>

      {isOpen && (
        <div className="modal" onClick={() => setIsOpen(false)}>
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
                <label>Phone Number:</label>
                <input id="phone" type="number" required />
              </div>

              <div className="input-group">
                <label>Date of Birth:</label>
                <input id="dob" type="date" />
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
