import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  service: "",
  date: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, service, date, message }, setState] =
    useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div id="contact">
        <div className="container contact-container">
          {/* LEFT — FORM */}
          <div className="col-md-8 contact-form-col">
            <div className="row">
              <div className="section-title contact-title">
                <h2>Request a Quote</h2>
                <p>
                  Tell us about your project and preferred date. Our team will
                  reach out with a tailored quote as soon as possible.
                </p>
              </div>

              <form name="quoteForm" onSubmit={handleSubmit}>
                <div className="row form-row">
                  {/* Name */}
                  <div className="col-md-6">
                    <div className="form-group spaced-field">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        required
                        value={name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="col-md-6">
                    <div className="form-group spaced-field">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Your Email"
                        required
                        value={email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Service Selection */}
                <div className="form-group spaced-field">
                  <select
                    name="service"
                    id="service"
                    className="form-control"
                    required
                    value={service}
                    onChange={handleChange}
                  >
                    <option value="">Select a Service</option>
                    <option value="Landscaping">Landscaping</option>
                    <option value="Handyman">Handyman</option>
                    <option value="Moving Assistance">Moving Assistance</option>
                    <option value="Garden Maintenance">
                      Garden Maintenance
                    </option>
                    <option value="Power Washing">Power Washing</option>
                    <option value="Snow Removal">Snow Removal</option>
                  </select>
                </div>

                {/* Date Picker */}
                <div className="form-group spaced-field">
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="form-control"
                    value={date}
                    onChange={handleChange}
                  />
                </div>

                {/* Message */}
                <div className="form-group spaced-field">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="5"
                    placeholder="Describe your project or service needs..."
                    required
                    value={message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-custom btn-lg contact-btn"
                >
                  Send Request
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT — CONTACT INFO */}
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>

              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>

              <p>
                <span>
                  <i className="fa-solid fa fa-phone"></i> Phone
                </span>
                {props.data ? props.data.phone : "loading"}
              </p>

              <p>
                <span>
                  <i className="fa-solid fa fa-envelope"></i> Email
                </span>
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="col-md-12 contact-social">
            <div className="social">
              <ul>
                <li>
                  <a
                    className="social-icon"
                    href={props.data ? props.data.facebook : "/"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="social-icon"
                    href={props.data ? props.data.ig : "/"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div id="footer">
        <div className="container text-center">
          <p>&copy; 2024 Eco-Home Services</p>
        </div>
      </div>
    </div>
  );
};
