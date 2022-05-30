import React from "react";

function DetailsCard() {
  return (
    <div className="modal-column" style={{ marginTop: "25px" }}>
      <h1>Enter Details</h1>
      <div class="mb-3">
        <label for="exampleFormControlInput" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput"
        />
        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
        />
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Address
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default DetailsCard;
