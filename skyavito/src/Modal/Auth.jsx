import { useEffect, useState } from "react";
import * as S from "./Style";

export const ModalAuth = ({ isVisible = false, onClose }) => {
  const [login, setLogin] = useState(true);
  const [loginValue, setLoginValue] = useState("");
  const keydownHandler = ({ key }) => {
    switch (key) {
      case "Escape":
        onClose();
        break;
      default:
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keydownHandler);
    return () => document.removeEventListener("keydown", keydownHandler);
  });

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
                  type="text"
                  placeholder="email"
                  name="email"
                  value={loginValue}
                  onChange={(e) => {
                    setLoginValue(e.target.value);
                  }}
                />
                <S.Input
                  type="password"
                  placeholder="пароль"
                  name="password"
                  value={loginValue}
                  onChange={(e) => {
                    setLoginValue(e.target.value);
                  }}
                />
                <S.Button primary type="button">
                  Войти
                </S.Button>
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
                  type="text"
                  placeholder="email"
                  name="email"
                  value={loginValue}
                  onChange={(e) => {
                    setLoginValue(e.target.value);
                  }}
                />
                <S.Input
                  type="password"
                  placeholder="пароль"
                  name="password"
                  value={loginValue}
                  onChange={(e) => {
                    setLoginValue(e.target.value);
                  }}
                />
                <S.Button primary type="button">
                  Зарегистрироваться
                </S.Button>
              </S.Form>
            </S.Block>
          </S.Modal>
        </S.ModalBlock>
      )}
    </>
  );
};
