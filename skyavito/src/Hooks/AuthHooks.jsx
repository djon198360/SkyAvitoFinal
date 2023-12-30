/* eslint-disable no-unused-vars */
import { useState } from "react";

export const LoginValues = (Value) => {
  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
    passwordRepeat: "",
  });
  setLoginValue(Value);
  return loginValue;
};
