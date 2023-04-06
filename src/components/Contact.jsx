import React from 'react'
import "./contacts.css";
function Contact() {
  return (
    <>
  <div className="content">
  <div className="container">
    <div className="row align-items-stretch justify-content-center no-gutters " >
      <div className="col-md-7" >
        <div className="form h-100 contact-wrap p-5"  style={{ borderRadius: "1rem" }}>
          <h3 className="text-center">Let's Talk</h3>
          <form
            className="mb-5"
            method="post"
            id="contactForm"
            name="contactForm"
          >
            <div className="row">
              <div className="col-md-6 form-group mb-3">
                <label htmlFor="" className="col-form-label">
                  Name *
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Your name"
                />
              </div>
              <div className="col-md-6 form-group mb-3">
                <label htmlFor="" className="col-form-label">
                  Email *
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 form-group mb-3">
                <label htmlFor="budget" className="col-form-label">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Your subject"
                />
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-md-12 form-group mb-3">
                <label htmlFor="message" className="col-form-label">
                  Message *
                </label>
                <textarea
                  className="form-control"
                  name="message"
                  id="message"
                  cols={30}
                  rows={4}
                  placeholder="Write your message"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-5 form-group text-center">
                <input
                  type="submit"
                  defaultValue="Send Message"
                  className="btn btn-dark btn-lg btn-block"
                />
                <span className="submitting" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>


  </>
  )
}

export default Contact