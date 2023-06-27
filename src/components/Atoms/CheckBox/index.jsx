import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import pencil from "../../../assets/svg/pencil.svg";

const CheckBox = (props) => {
  return <Check onClick = {props.onClick}>
    <img src={pencil} width={"20px"} />
  </Check>;
};
export default CheckBox;

const Check = styled.button`
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  width: 20px;
  height: 20px;
  cursor: pointer;

  :hover{
    background-color: ${COLOR.LIGHT_GRAY_TRANSLUCENT};
    border-radius: 10px;
  }
`;
