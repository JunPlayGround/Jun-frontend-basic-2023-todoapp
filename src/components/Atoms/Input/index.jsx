import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXTS from "../../../variables/texts";

const InputTask = (props={defaultValue, onEditComplete}) => {
  const inputRef = useRef(null);
  //const [task, setTask] = useState('');
  //const handleOnClick = () => inputRef.current.focus();
  //const handleOnChange = (e) => setTask(e.target.value);

  useEffect((props={defaultValue, onEditComplete}) => {
    inputRef.target.value = props.defaultValue;
    inputRef.target.focus();

    const focusout = () => {
      props.onEditComplete(inputRef.target.value);
    };

    const keypress = () => {
      focusout = null;
      props.onEditComplete(inputRef.target.value);
    }
  }, [])

  return <InputFrame ref={inputRef} type="text" onBlur={focusout} onKeyDown={keypress}>
    
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