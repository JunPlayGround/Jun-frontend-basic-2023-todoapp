import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXTS from "../../../variables/texts";

const InputTask = (props) => {


  return <InputFrame onClick = {props.onClick}>
    
  </InputFrame>;
};
export default InputTask;

const InputFrame = styled.input`
  width: 100%;
  height: 20px;
  background-color: ${COLOR.BLACK};
  ${TEXTS.S};
  border: none;
  padding: 0px 4px;
  color: ${COLOR.WHITE};
  outline: none;
`;