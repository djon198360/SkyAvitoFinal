import { useEffect, useState } from "react";
/* import { PropTypes } from "prop-types"; */
import { RenderInput } from "../Components/Form/input";
import * as S from "./Style";

export const ModalAuth = ({
  isVisible = false,
  title,
  content,
  footer,
  onClose,
}) => {
  const keydownHandler = ({ key }) => {
    switch (key) {
      case "Escape":
        onClose();
        break;
      default:
    }
  };
  const [loginValue, setLoginValue] = useState("");
  useEffect(() => {
    document.addEventListener("keydown", keydownHandler);
    return () => document.removeEventListener("keydown", keydownHandler);
  });

  return !isVisible ? null : (
    <S.Modal onClick={onClose}>
      <S.ModalDialog onClick={(e) => e.stopPropagation()}>
        <S.ModalHeader>
          <S.ModalTitle>{title}</S.ModalTitle>
          <S.ModalClose onClick={onClose} />
        </S.ModalHeader>
        <S.ModalBody>
          <S.ModalContent>
            <RenderInput
              width="30rem"
              type="text"
              placeholder="Login"
              name="login"
              value={loginValue}
              onChange={(e) => {
                setLoginValue(e.target.value);
              }}
            />
            {content}
          </S.ModalContent>
        </S.ModalBody>
        {footer && <S.ModalFooter>{footer}</S.ModalFooter>}
      </S.ModalDialog>
    </S.Modal>
  );
};

/* ModalAuth.propTypes = {
  isVisible: PropTypes.bool.isRequired,
}; */
