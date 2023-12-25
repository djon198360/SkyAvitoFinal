import { PropTypes } from "prop-types";
import * as S from "./Style";

export const RenderButton = ({ type, children, onClick }) => (
  <S.ButtonHeader onClick={onClick} type={type}>
    {children}
  </S.ButtonHeader>
);

RenderButton.defaultProps = {
  type: "button",
};

RenderButton.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
};
