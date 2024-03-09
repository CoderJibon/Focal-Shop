import BreadCum from "../../components/BreadCum/BreadCum.jsx";
import MetaData from "../../components/MetaData/MetaData.jsx";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { userRegistration } from "../../features/auth/authApiSlice.js";
import { useEffect } from "react";
import { setMessageEmpty } from "../../features/auth/authSlice.js";
import toastify from "../../utils/toastify.jsx";
import { Link } from "react-router-dom";

const SignUp = () => {
  const title = "Sign-Up - Digitic";
  const dispatch = useDispatch();
  const { isError, message } = useSelector((state) => state.auth);

  //validation schema
  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Email Should be valid")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    firstName: Yup.string().required("FirstName is required"),
    lastName: Yup.string().required("LastName is required"),
  });

  // from handlers
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (value) => {
      console.log(value);
      dispatch(userRegistration(value));
    },
  });

  useEffect(() => {
    if (isError) {
      toastify("error", isError);
      dispatch(setMessageEmpty());
    }
    if (message) {
      toastify("success", message);
      formik.resetForm();
      dispatch(setMessageEmpty());
    }
  }, [isError, message]);
  return (
    <>
      <MetaData title={title} />
      <BreadCum title="Create Account" />

      {/* SignUp Start*/}

      <div className="signUp_wrapper home-wrapper-2 py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="signUp_card">
                <h3>Create Account</h3>
                <form
                  onSubmit={formik.handleSubmit}
                  className="d-flex flex-column gap-15"
                >
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="FirstName"
                      name="firstName"
                      onChange={formik.handleChange("firstName")}
                      value={formik.values.firstName}
                    />
                    {formik.errors.firstName && formik.touched.firstName ? (
                      <div className="error">{formik.errors.firstName}</div>
                    ) : null}
                  </div>

                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="LastName"
                      name="lastName"
                      onChange={formik.handleChange("lastName")}
                      value={formik.values.lastName}
                    />
                    {formik.errors.lastName && formik.touched.lastName ? (
                      <div className="error">{formik.errors.lastName}</div>
                    ) : null}
                  </div>

                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      onChange={formik.handleChange("email")}
                      value={formik.values.email}
                    />
                    {formik.errors.email && formik.touched.email ? (
                      <div className="error">{formik.errors.email}</div>
                    ) : null}
                  </div>

                  <div>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="password"
                      name="password"
                      onChange={formik.handleChange("password")}
                      value={formik.values.password}
                    />
                    {formik.errors.password && formik.touched.password ? (
                      <div className="error">{formik.errors.password}</div>
                    ) : null}
                  </div>
                  <Link to="/login">If Already Register Then Login</Link>

                  <div className="d-flex justify-content-center align-items-center gap-15">
                    <button className="button border-0" type="submit">
                      Create
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
