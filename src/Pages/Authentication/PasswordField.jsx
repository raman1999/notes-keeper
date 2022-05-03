import { useState } from "react";
export default function PasswordField({
  name,
  value,
  placeholder,
  formHandler,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <span className="relative flex-grow">
        <input
          className="input-field pr-2"
          type={!showPassword ? "password" : "text"}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={formHandler}
        />
        <i
          className={`fas absolute right-2 top-2 text-xl text-gray-500 dark:text-white ${
            showPassword ? "fa-eye-slash" : "fa-eye"
          }`}
          onClick={() => setShowPassword(!showPassword)}
        />
      </span>
    </>
  );
}
