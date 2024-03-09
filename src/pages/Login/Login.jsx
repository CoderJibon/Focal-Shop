import { Link } from "react-router-dom";
import BreadCum from "../../components/BreadCum/BreadCum.jsx";
import MetaData from "../../components/MetaData/MetaData.jsx";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../features/auth/authApiSlice.js";
import { useEffect } from "react";
import { setMessageEmpty } from "../../features/auth/authSlice.js";
import toastify from "../../utils/toastify.jsx";
const Login = () => {
  const title = "Login - Digitic";
  const dispatch = useDispatch();
  const { isError, message } = useSelector((state) => state.auth);
  //validation schema
  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Email Should be valid")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  // from handlers
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (value) => {
      dispatch(userLogin(value));
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
      <BreadCum title="Login Now" />

      {/* Login Start*/}

      <div className="login_wrapper home-wrapper-2 py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="login_card">
                <h3>Login</h3>
                <form
                  onSubmit={formik.handleSubmit}
                  className="d-flex flex-column gap-15"
                >
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
                  <div>
                    <Link to="/forgotPassword" className="forgotPassword">
                      Forgot your password?
                    </Link>
                  </div>
                  <div className="d-flex justify-content-center align-items-center gap-15">
                    <button className="button border-0" type="submit">
                      Login
                    </button>
                    <Link to="/Sign-Up" className="button">
                      Sign Up
                    </Link>
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

export default Login;
