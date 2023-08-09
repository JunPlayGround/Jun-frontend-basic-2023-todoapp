import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXTS from "../../../variables/texts";

const InputTask = ({ defaultValue, onEditComplete }) => {
  const inputRef = useRef(null);

  const focusout = () => {
    onEditComplete(inputRef.current.value);
  };

  const keypress = (e) => {
    if (e.code === "Enter") {
      inputRef.current.removeEventListener("blur", focusout);
      onEditComplete(inputRef.current.value);
    }
  };

  useEffect(() => {
    inputRef.current.value = defaultValue;
    inputRef.current.focus();
    inputRef.current.addEventListener("blur", focusout);
    inputRef.current.addEventListener("keydown", keypress);
  }, []);

  return <InputFrame ref={inputRef} type="text" />;
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
