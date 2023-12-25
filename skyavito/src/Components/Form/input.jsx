import { PropTypes } from "prop-types";
import * as S from "./Style";

export const RenderInput = ({
  value,
  type,
  onChange,
  name,
  placeholder,
  width,
}) => (
  <S.Input
    width={width}
    onChange={onChange}
    placeholder={placeholder}
    value={value}
    type={type}
    name={name}
  />
);

RenderInput.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  width: PropTypes?.string,
};
RenderInput.defaultProps = {
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  width: PropTypes?.string,
};
