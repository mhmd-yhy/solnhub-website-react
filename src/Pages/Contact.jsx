import React from "react";
import Heading from "../Components/Heading";
import {Formik} from "formik";
import images from "../assets/images";
import ContactInfo from "../Components/ContactInfo";
import MyMap from "../Components/MyMap";
export default function Contact() {
  return (
    <section className="contact back-black-2">
      <div className="form ">
        <div className="container">
          <div className="d-grid grid-2 gap-30 align-items-center">
            <div className="mb-20" action="">
              <Heading title={"Let's Talk?"} />
              <p className="c-grey mb-20 fs-18">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, assumenda quia repellendus architecto
                culpa nisi?
              </p>
              <Formik
                initialValues={{name: "", email: "", desc: ""}}
                validate={(values) => {
                  const errors = {};

                  if (!values.name) {
                    errors.name = "Name is required";
                  } else if (!/^[A-Za-z\s]*$/.test(values.name)) {
                    errors.name = "Invalid name format";
                  }

                  if (!values.email) {
                    errors.email = "Email is required";
                  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                    errors.email = "Invalid email address";
                  }

                  if (!values.address) {
                    errors.address = "Address is required";
                  }

                  return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      className="p-15 d-block mt-20 back-transparent w-100 border-radius-1"
                      style={{border: "1px solid var(--clr-grey)"}}
                    />
                    <span className="form-control-text c-white">{errors.name && touched.name && errors.name}</span>

                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className="p-15 d-block mt-20 back-transparent w-100 border-radius-1"
                      style={{border: "1px solid var(--clr-grey)"}}
                    />
                    <span className="form-control-text c-white">{errors.email && touched.email && errors.email}</span>

                    <input
                      type="text"
                      name="address"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.address}
                      className="p-15 d-block mt-20 back-transparent w-100 border-radius-1"
                      style={{border: "1px solid var(--clr-grey)"}}
                    />
                    <span className="form-control-text c-white">
                      {errors.address && touched.address && errors.address}
                    </span>

                    <div className="flex flex-start">
                      <button
                        className="back-robin transition c-white p-10 fs-22 mt-20 border-radius-2 cursor-pointer border-0"
                        onClick={(e) => e.preventDefault()}
                        type="submit"
                        disabled={isSubmitting}
                      >
                        contact us
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
            <div className="image">
              <img src={images.form_main_img} alt="" className="w-100" />
            </div>
          </div>
        </div>
      </div>
      <MyMap />
      <ContactInfo />
    </section>
  );
}
