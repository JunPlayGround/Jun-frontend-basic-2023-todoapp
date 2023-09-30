import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import FONTFAMILY from "../../../variables/font_family";
import TEXTS from "../../../variables/texts";
import COLOR from "../../../variables/color";
import BREAKPOINT from "../../../variables/breakpoint";
import AddTaskButton from "../../Atoms/AddTaskButton/index";
import Tasks from "../../Molecules/Tasks/index";

const Alert = ({ visible, errorText }) => {
  return <AlertStyle isVisible={visible}> {errorText} </AlertStyle>;
};
export default Alert;

const AlertStyle = styled.div`
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) => (!props.isVisible ? "translateY(-40px)" : "translateY(0)")};
  transition: all 1s ease-in;
  background-color: ${COLOR.RED};
  color: ${COLOR.WHITE};
  font-size: ${TEXTS.S};
  max-width: 400px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  position: relative;
  margin: auto;
  top: 80px;
  justify-self: center;
  z-index: 100;

  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    top: 40px;
  }
`;
