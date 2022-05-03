import { useNavigate, Link } from "react-router-dom";
import "../auth.css";
import axios from "axios";
import { useState } from "react";
import ErrorText from "./ErrorText";
import PasswordField from "../PasswordField";
import { signupValidationHandler } from "./signupValidation";
import { useAuthenticationContext } from "../../../Context";
import { useDocumentTitle } from "../../../Hooks/useDocumentTitle";
import { toast } from "react-toastify";

export function Signup() {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const initialErrorData = {
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
    serverError: "",
  };
  const [signupForm, setSignupForm] = useState(initialFormData);
  const [errorData, setErrorData] = useState(initialErrorData);
  const {
    firstNameError,
    lastNameError,
    emailError,
    passwordError,
    confirmPasswordError,
    serverError,
  } = errorData;
  const navigate = useNavigate();
  const { setLogin } = useAuthenticationContext();
  useDocumentTitle("Signup | NotesKeeper");

  function formHandler(e) {
    const { name, value } = e.target;
    if (name === "confirmPassword" && signupForm.password !== value)
      setErrorData((err) => ({
        ...err,
        confirmPasswordError: "Password do not match ",
      }));
    if (name === "password" && signupForm.confirmPassword == value)
      setErrorData((err) => ({ ...err, confirmPasswordError: "" }));
    else {
      setSignupForm((formValues) => ({ ...formValues, [name]: value }));
      setError(`${name}Error`, "");
    }
  }

  function setError(name, value) {
    setErrorData((err) => ({ ...err, [name]: value }));
  }

  function signupHandler(e) {
    e.preventDefault();
    const validData = signupValidationHandler(
      setError,
      setErrorData,
      signupForm
    );
    const { firstName, lastName, email, password } = signupForm;

    if (validData) {
      (async () => {
        try {
          const {
            data: { encodedToken },
          } = await axios.post("/api/auth/signup", {
            firstName,
            lastName,
            email,
            password,
          });
          if (encodedToken) {
            localStorage.setItem("token", encodedToken);
            setLogin(true);
            setSignupForm(initialFormData);
            toast.success("Logged in succesfully");
            navigate("/notes");
          }
        } catch (err) {
          err.response.status === 422
            ? setError("serverError", "Email already exists")
            : setError(
                "serverError",
                "Can't connect to server ! Try again later"
              );
        }
      })();
    }
  }

  return (
    <section className="section-register flex justify-center py-16 px-2">
      <form className="form-container min-w-[35vw]" onSubmit={signupHandler}>
        <h3 className="text-[2.5rem] font-bold text-gray-600 text-center mb-3 dark:text-white">
          Register
        </h3>
        <div className="flex flex-col space-y-4">
          <div className="input-container">
            <label className="label">First Name*</label>
            <span className="input-with-error-container">
              <input
                className="input-field"
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                onChange={formHandler}
              />
              <ErrorText errorName={firstNameError} />
            </span>
          </div>

          <div className="input-container">
            <label className="label">Last Name*</label>
            <span className="input-with-error-container">
              <input
                className="input-field"
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                onChange={formHandler}
              />
              <ErrorText errorName={lastNameError} />
            </span>
          </div>

          <div className="input-container">
            <label className="label">Email*</label>
            <span className="input-with-error-container">
              <input
                className="input-field"
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={formHandler}
              />
              <ErrorText errorName={emailError} />
            </span>
          </div>

          <div className="input-container">
            <label className="label">Password*</label>
            <span className="input-with-error-container">
              <PasswordField
                placeholder="Enter your password"
                name="password"
                formHandler={formHandler}
              />
              <ErrorText errorName={passwordError} />
            </span>
          </div>

          <div className="input-container">
            <label className="label">Confirm Password*</label>
            <span className="input-with-error-container">
              <PasswordField
                placeholder="Re-type your password"
                name="confirmPassword"
                formHandler={formHandler}
              />
              <ErrorText errorName={confirmPasswordError} />
            </span>
          </div>
        </div>

        <div className="ml-[10rem] md:ml-1 ">
          <button type="submit" className="btn w-full">
            REGISTER
          </button>
          <p className="text-gray-800 dark:text-gray-300">
            Already have an account?
            <Link
              to="/login"
              className="text-yellow-800 border-b-2 border-yellow-700 ml-2 dark:text-yellow-500"
            >
              Login here
            </Link>
          </p>
        </div>
        {serverError && (
          <div className="error pt-1 text-red-600">{serverError}</div>
        )}
      </form>
    </section>
  );
}
