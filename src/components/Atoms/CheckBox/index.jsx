import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import check from "../../../assets/svg/check.svg";

const CheckBox = ({ onClick }) => {
  return <Check onClick={onClick} />;
};
export default CheckBox;

const Check = styled.button`
  background-color: transparent;
  border: ${COLOR.LIGHT_GRAY} solid 2px;
  margin: 0;
  padding: 0;
  max-width: 20px;
  min-width: 20px;
  height: 20px;
  cursor: pointer;
  border-radius: 2px;

  :hover {
    background-clip: padding;
    background-image: url(${check});
    background-size: contain;
  }
`;
