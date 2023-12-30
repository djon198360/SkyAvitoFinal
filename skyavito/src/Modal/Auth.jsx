import { useEffect, useState } from "react";
import { validInput } from "../HelpFunc/ValidateInput";
import * as S from "./Style";

export const ModalAuth = ({ isVisible = false, onClose }) => {
  const [login, setLogin] = useState(true);
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

  const onBlurs = (e) => {
    console.log("error");
    //  e.addEventListener("input/* focusin */", () => alert("focused"));
    validateInputs(e);
    e.onClick = () => {
      if (!e.value.includes("@")) {
        // не email
        alert("error");
        e.innerHTML = "Пожалуйста, введите правильный email.";
      }
    };
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

  useEffect(() => {
    if (
      loginValue.email.validate &&
      loginValue.password.validate &&
      loginValue?.passwordRepeat.validate
    ) {
      setUnblock(false);
    } else {
      setUnblock(true);
    }
  }, [loginValue.passwordRepeat, login]);

  console.log(loginValue);

  return !isVisible ? null : (
    <>
      {" "}
      {login ? (
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
                    onBlurs(e);
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
                <>
                  {" "}
                  {unblock ? (
                    <S.Button primary disabled type="button">
                      Войти
                    </S.Button>
                  ) : (
                    <S.Button primary type="button">
                      Войти
                    </S.Button>
                  )}
                </>

                <S.Button onClick={() => setLogin(false)}>
                  Зарегистрироваться
                </S.Button>
              </S.Form>
            </S.Block>
          </S.Modal>
        </S.ModalBlock>
      ) : (
        <S.ModalBlock onClick={onClose}>
          <S.Modal onClick={(e) => e.stopPropagation()}>
            <S.Block>
              <S.Form>
                <S.Logo>
                  <S.A onClick={() => setLogin(true)}>
                    <S.LogoImg src="../img/logo_modal.png" alt="logo" />
                  </S.A>
                </S.Logo>
                <S.Input
                  color={loginValue.email?.color}
                  type="text"
                  placeholder="email"
                  name="email"
                  value={loginValue.email?.text}
                  onChange={(e) => {
                    updateInputValue(e);
                  }}
                />
                <S.Input
                  color={loginValue.password?.color}
                  type="password"
                  placeholder="Пароль"
                  name="password"
                  value={loginValue.password?.text}
                  onChange={(e) => {
                    updateInputValue(e);
                  }}
                />
                <S.Input
                  color={loginValue.passwordRepeat?.color}
                  type="password"
                  placeholder="Повторите пароль"
                  name="passwordRepeat"
                  value={loginValue.passwordRepeat?.text}
                  onChange={(e) => {
                    updateInputValue(e);
                  }}
                />{" "}
                <S.Input
                  type="text"
                  placeholder="Имя (Необязятально)"
                  name="name"
                  value={loginValue.name?.text}
                  onChange={(e) => {
                    updateInputValue(e);
                  }}
                />
                <S.Input
                  type="text"
                  placeholder="Фамилия (Необязятально)"
                  name="family"
                  value={loginValue.family?.text}
                  onChange={(e) => {
                    updateInputValue(e);
                  }}
                />
                <S.Input
                  type="text"
                  placeholder="Город (Необязятально)"
                  name="city"
                  value={loginValue.city?.text}
                  onChange={(e) => {
                    updateInputValue(e);
                  }}
                />
                {unblock ? (
                  <S.Button primary disabled type="button">
                    Зарегистрироваться
                  </S.Button>
                ) : (
                  <S.Button primary type="button">
                    Зарегистрироваться
                  </S.Button>
                )}
              </S.Form>
            </S.Block>
          </S.Modal>
        </S.ModalBlock>
      )}
    </>
  );
};
