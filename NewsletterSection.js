import React from "react";
import Form from 'react-bootstrap/Form';

const NewsletterSection = () => {
  return (
    <>
      <section className="section-base section-color">
        <div className="container news-cont">
          <div className="title align-center news-title">
            <h2>Newsletter</h2>
            <p>Subscribe now to our newsletter</p>
          </div>
          <form
            className="form-box  form-inline align-center"
            method="post"
          >
            <div className="row">
              <div className="col-lg-4">
                <input
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="text"
                  className="input-text"
                  required
                />{" "}
              </div>
              <div className="col-lg-4">
                <input
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  className="input-text"
                  required
                />
              </div>
              <div className="col-lg-4">
                <button className="btn btn-sm input-text" type="submit">
                  Subscribe
                </button>
              </div>
              <div className="col-lg-12">
                <div className="form-checkbox">
                  <input
                    type="checkbox"
                    id="check"
                    name="check"
                    value="check"
                    required
                  />
                  <Form.Label>
                  By click subscribe you accept the terms of service and the
                  privacy policy.
                  </Form.Label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default NewsletterSection;
