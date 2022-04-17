export function signupValidationHandler(setError, setErrorData, signupForm) {
  const { firstName, lastName, email, password, confirmPassword } = signupForm;
  let flag = true;

  if (firstName === "" || !/^[a-zA-Z]+(\s*\w*)*$/.test(firstName)) {
    setError("firstNameError", "Please enter a valid first name");
    flag = false;
  }

  if (lastName === "" || !/^[a-zA-Z]+(\s*\w*)*$/.test(lastName)) {
    setError("lastNameError", "Please enter a valid last name");
    flag = false;
  }

  if (email === "" || !/^.+@.+\.com$/.test(email)) {
    setError("emailError", "Please enter a valid email");
    flag = false;
  }

  if (
    password === "" ||
    !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g.test(password)
  ) {
    setError(
      "passwordError",
      "Password should contain minimum 8 characters (at least one capital, small letter and number)"
    );
    flag = false;
  }
  if (confirmPassword === "" || password !== confirmPassword) {
    setError("confirmPasswordError", "Password does not match");
    flag = false;
  }
  return flag;
}
