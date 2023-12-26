import { useState } from "react";
import { RenderButton } from "./Button";
import { ModalAuth } from "../../Modal/Auth";
import * as S from "./Style";

export const RenderHeader = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isModal, setModal] = useState(false);

  return (
    <S.Header>
      <ModalAuth
        isVisible={isModal}
        title="Modal Title"
        content="u"
        footer={
          <RenderButton type="button" onClick={() => setModal(true)}>
            Cancel
          </RenderButton>
        }
        onClose={() => setModal(false)}
      />
      <S.Nav>
        {isAuth ? (
          <RenderButton
            onClick={() => {
              setIsAuth(false);
            }}
            type="button"
          >
            Разместить объявление
          </RenderButton>
        ) : (
          <RenderButton onClick={() => setModal(true)} type="button">
            Вход в личный кабинет
          </RenderButton>
        )}
      </S.Nav>
    </S.Header>
  );
};
