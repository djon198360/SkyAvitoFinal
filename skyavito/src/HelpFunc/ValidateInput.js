const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

export const validEmail = (email) => {
  const result = EMAIL_REGEXP.test(email)
    ? { validate: true, color: true }
    : { validate: false, color: false };
  return result;
};

export const validInput = (params) => {
  let result = {};
  if (params.email) {
    result = EMAIL_REGEXP.test(params.email)
      ? { validate: true, color: "green", text: params.email }
      : { validate: false, color: "red", text: params.email };
  } else if (params.password) {
    const minLength = 8;
    result =
      params?.password.length >= minLength
        ? { validate: true, color: "green", text: params.password }
        : { validate: false, color: "red", text: params.password };
  } else if (params.passwordRepeat) {
    result =
      params?.loginValue.passwordRepeat.text === params?.passwordRepeat
        ? { validate: true, color: "green", text: params.passwordRepeat }
        : { validate: false, color: "red", text: params.passwordRepeat };
  } else if (
    !params.email &&
    !params.password &&
    params?.loginValue.passwordRepeat
  ) {
    result = {
      validate: true,
      color: "green",
      text: null || params.name || params.family || params.city,
    };
  }
  return result;
};
