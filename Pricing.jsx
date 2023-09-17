import React from "react";

export const Pricing = () => {
  return (
    <>
      <h3>Pricing</h3>
      <p>
        Quickly build an effective pricing table for your potential customers
        with this <br /> Bootstrap example. It's built with default Bootstrap
        components and utilities with
        <br /> little customization.
      </p>

      <div>
        <div
          style={{ margin: "20px", marginLeft: "150px", marginRight: "150px" }}
          className="row"
        >
          <div className="col-sm-4">
            <div className="card">
              <div className="card-header">
                <h5 className="text-dark">Free</h5>
              </div>
              <div className="card-body">
                <h1 className="card-title">
                  $0 <sub className="text-muted"> / mo</sub>
                </h1>
                <p className="card-text">10 users included</p>
                <p className="card-text">2 GB of storage</p>{" "}
                <p className="card-text">Email support</p>
                <p className="card-text">Help center access</p>
                <button
                  style={{ width: "100%" }}
                  type="button"
                  className="btn btn-outline-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  data-bs-whatever="@mdo"
                >
                  {" "}
                  SignUp for Free
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-header">
                <h5 className="text-dark">Pro</h5>
              </div>
              <div className="card-body">
                <h1 className="card-title">
                  $15 <sub className="text-muted"> / mo</sub>
                </h1>
                <p className="card-text">20 users included</p>
                <p className="card-text">10 GB of storage</p>{" "}
                <p className="card-text">Email support</p>
                <p className="card-text">Help center access</p>
                <button
                  style={{ width: "100%" }}
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  data-bs-whatever="@mdo"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-header">
                <h5 className="text-dark">Enterprise</h5>
              </div>
              <div className="card-body">
                <h1 className="card-title">
                  $29 <sub className="text-muted"> / mo</sub>
                </h1>
                <p className="card-text">30 users included</p>
                <p className="card-text">15 GB of storage</p>{" "}
                <p className="card-text">Email support</p>
                <p className="card-text">Help center access</p>
                <button
                  style={{ width: "100%" }}
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  data-bs-whatever="@mdo"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  New message
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label
                      for="recipient-name"
                      style={{ textAlign: "left" }}
                      className="col-form-label text-left"
                    >
                      Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      for="recipient-name"
                      style={{ textAlign: "left" }}
                      className="col-form-label text-left"
                    >
                      Email:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="message-text" className="col-form-label">
                      Order Comments:
                    </label>
                    <textarea
                      className="form-control"
                      id="message-text"
                    ></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Send message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
