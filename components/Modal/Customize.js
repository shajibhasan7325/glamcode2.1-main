import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>customize Your package</Modal.Title>
        </Modal.Header>
        <div
          style={{
            backgroundColor: "#fff",
            padding: "8px 20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h6>Pedicure</h6>
          <div className="customize-flex">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                checked
              />
              <span> Classic Pedicure</span>
            </div>

            <span>$20</span>
          </div>
          <div className="customize-flex">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                checked
              />
              <span>Bubblegum spa Pedicure</span>
            </div>

            <span>$20</span>
          </div>
          <div className="customize-flex">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                checked
              />
              <span>Bubblegum spa Pedicure</span>
            </div>

            <span>$20</span>
          </div>
          <div className="customize-flex">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                checked
              />
              <span>Bubblegum spa Pedicure</span>
            </div>

            <span>$20</span>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#fff",
            padding: "8px 20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h6>Medicure</h6>
          <div className="customize-flex">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <span> Classic Pedicure</span>
            </div>

            <span>$20</span>
          </div>
          <div className="customize-flex">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <span>Bubblegum spa Pedicure</span>
            </div>

            <span>$20</span>
          </div>
          <div className="customize-flex">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <span>Bubblegum spa Pedicure</span>
            </div>

            <span>$20</span>
          </div>
          <div className="customize-flex">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <span>Bubblegum spa Pedicure</span>
            </div>

            <span>$20</span>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#fff",
            padding: "8px 20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h6>Facial</h6>
          <div className="customize-flex">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                checked
              />
              <span> Classic Pedicure</span>
            </div>

            <span>$20</span>
          </div>
          <div className="customize-flex">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                checked
              />
              <span>Bubblegum spa Pedicure</span>
            </div>

            <span>$20</span>
          </div>
          <div className="customize-flex">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                checked
              />
              <span>Bubblegum spa Pedicure</span>
            </div>

            <span>$20</span>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#fff",
            padding: "8px 20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h6>Medicure</h6>
          <div className="customize-flex">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <span> Classic Pedicure</span>
            </div>

            <span>$20</span>
          </div>
          <div className="customize-flex">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <span>Bubblegum spa Pedicure</span>
            </div>

            <span>$20</span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#fff",
            }}
          >
            <button className="add-to-card">add to cart</button>
            <h6>Amount: 1599 </h6>
          </div>
        </div>
      </Modal>
    </div>
  );
}
export default Example;
