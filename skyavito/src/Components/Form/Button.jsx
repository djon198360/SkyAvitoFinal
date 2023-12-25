import PropTypes from "prop-types";
import * as S from "./Style";

export const RenderButton = ({ type, children, onClick }) => (
  <S.Button $width="200" onClick={onClick} type={type}>
    {children}
  </S.Button>
);

RenderButton.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
RenderButton.defaultProps = {
  children: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
