import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import check from "../../../assets/svg/check.svg";

const CheckBox = (props) => {
  return <Check onClick = {props.onClick}>
    
  </Check>;
};
export default CheckBox;

const Check = styled.button`
  background-color: transparent;
  border-color: ${COLOR.LIGHT_GRAY};
  margin: 0;
  padding: 0;
  width: 20px;
  height: 20px;
  cursor: pointer;
  border-radius: 2px;

  :hover{
    background-clip: padding;
    background-image: url(${check});
    background-size: contain;
  }
`;
