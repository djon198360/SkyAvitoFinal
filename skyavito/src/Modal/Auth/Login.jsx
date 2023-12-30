import { useEffect, useState } from "react";
import { validInput } from "../../HelpFunc/ValidateInput";
import * as S from "../Style";

export const ModalLogin = ({ isVisible = false, onClose }) => {
  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
    passwordRepeat: "",
  });
  const [unblock, setUnblock] = useState(true);
  const keydownHandler = ({ key }) => {
    switch (key) {
      case "Escape":
        onClose();
        break;
      default:
    }
  };

  const validateInputs = (e) => {
    setLoginValue({
      ...loginValue,
      [e.target.name]: validInput({
        [e.target.name]: e.target.value,
        loginValue,
      }),
    });
  };

  const updateInputValue = (e) => {
    setLoginValue({
      ...loginValue,
      [e.target.name]: e.target.value,
    });

    return validateInputs(e);
  };

  useEffect(() => {
    document.addEventListener("keydown", keydownHandler);
    return () => document.removeEventListener("keydown", keydownHandler);
  });

  useEffect(() => {
    if (loginValue.email.validate && loginValue.password.validate) {
      setUnblock(false);
    } else {
      setUnblock(true);
    }
  }, [loginValue]);

  console.log(loginValue);

  return !isVisible ? null : (
    <S.ModalBlock onClick={onClose}>
      <S.Modal onClick={(e) => e.stopPropagation()}>
        <S.Block>
          <S.Form>
            <S.Logo>
              <S.LogoImg src="../img/logo_modal.png" alt="logo" />
            </S.Logo>
            <S.Input
              color={loginValue.email.color}
              type="text"
              placeholder="email"
              name="email"
              value={loginValue.email.text}
              onChange={(e) => {
                updateInputValue(e);
              }}
            />
            <S.Input
              color={loginValue.password.color}
              type="password"
              placeholder="пароль"
              name="password"
              value={loginValue.password.text}
              onChange={(e) => {
                updateInputValue(e);
                /*  validateInputs(e); */
              }}
            />

            {unblock ? (
              <S.Button primary disabled type="button">
                Войти
              </S.Button>
            ) : (
              <S.Button primary type="button">
                Войти
              </S.Button>
            )}

            <S.Button /* onClick={() => setLogin(false)} */>
              Зарегистрироваться
            </S.Button>
          </S.Form>
        </S.Block>
      </S.Modal>
    </S.ModalBlock>
  );
};
