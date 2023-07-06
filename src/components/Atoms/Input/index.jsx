import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import pencil from "../../../assets/svg/pencil.svg";

const InputTask = (props) => {
  return <InputFrame onClick = {props.onClick}>
    <img src={pencil} width={"20px"} />
  </InputFrame>;
};
export default InputTask;

const InputFrame = styled.input`
  width: 100%;
  background-color: ${COLOR.BLACK};
`;