import "../auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import PasswordField from "../PasswordField";
import { useAuthenticationContext } from "../../../Context";
import axios from "axios";
import { toast } from "react-toastify";
import { useDocumentTitle } from "../../../Hooks/useDocumentTitle";

export function Login() {
  const initialFormData = { email: "", password: "" };
  const navigate = useNavigate();
  const { setLogin } = useAuthenticationContext();

  const [loginForm, setLoginForm] = useState(initialFormData);
  const [errorData, setErrorData] = useState("");
  const { email, password } = loginForm;
  const [testUser, setTestUser] = useState(false);
  useDocumentTitle("Login | NotesKeeper");

  useEffect(() => {
    if (testUser) loginSubmitHandler();
  }, [testUser, loginForm]);

  function testUserHandler() {
    setLoginForm((prev) => ({
      ...prev,
      email: "admin@gmail.com",
      password: "Admin@123",
    }));
    setTestUser(true);
  }

  function loginFormHandler(e) {
    const { name, value } = e.target;
    if (errorData) setErrorData("");

    setLoginForm((oldFormData) => ({ ...oldFormData, [name]: value }));
  }

  function loginSubmitHandler(e) {
    e?.preventDefault();

    (async () => {
      try {
        const {
          data: { encodedToken },
        } = await axios.post("/api/auth/login", { email, password });
        if (encodedToken) {
          localStorage.setItem("token", encodedToken);
          setLogin(true);
          toast.success("Logged in succesfully");
          navigate("/notes");
        }
      } catch (err) {
        err.response.status === 500
          ? setErrorData("Can't connect to server ,Try again later")
          : setErrorData("Email or Password is  invalid");
      }
    })();
  }
  return (
    <section className="text-center flex justify-center py-16">
      <form className="form-container" onSubmit={loginSubmitHandler}>
        <h3 className="text-[2.5rem] font-bold text-gray-600 dark:text-white">
          Login
        </h3>

        <div className="flex flex-col space-y-4 text-gray-800 dark:text-white">
          <div className="flex space-x-3 items-center">
            <span className=" text-2xl">
              <i className="fas fa-envelope"></i>
            </span>
            <input
              className="flex-grow input-field"
              type="text"
              name="email"
              placeholder="Enter your email"
              value={loginForm.email}
              onChange={loginFormHandler}
            />
          </div>
          <div className="flex space-x-3 items-center">
            <span className=" text-2xl">
              <i className="fas fa-lock"></i>
            </span>
            <PasswordField
              name="password"
              placeholder={"Enter your password"}
              formHandler={loginFormHandler}
              value={loginForm.password}
            />
          </div>
        </div>
        {errorData && (
          <div className="pt-1 text-red-600">
            <i className="fas fa-exclamation-circle"></i>
            {errorData}{" "}
          </div>
        )}

        <div className="flex-col">
          <button type="submit" className="btn w-full">
            LOGIN
          </button>
          <button
            type="button"
            onClick={testUserHandler}
            className="btn-secondary w-full"
          >
            Login with Test Credentials
          </button>
          <div>
            <span className="">Not a user yet ? </span>
            <Link
              to="/signup"
              className="text-yellow-800 border-b-2 border-yellow-700 dark:text-yellow-500"
            >
              Create your account
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
}
