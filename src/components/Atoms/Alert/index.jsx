import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import FONTFAMILY from "../../../variables/font_family";
import TEXTS from "../../../variables/texts";
import COLOR from "../../../variables/color";
import BREAKPOINT from "../../../variables/breakpoint";
import AddTaskButton from "../../Atoms/AddTaskButton/index";
import Tasks from "../../Molecules/Tasks/index";

const Alert = ({ text }) => {
  return <AlertStyle isActive={text === ""}> タスク名が入力されていません。 </AlertStyle>;
};
export default Alert;

const AlertStyle = styled.div`
  display: ${(props) => (props.isActive ? "block" : "none")};
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

  animation-name: fadeIn;
  animation-duration: 10s;
  animation-fill-mode: forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-80px);
    }

    10% {
      opacity: 1;
      transform: translateY(0);
    }

    90% {
      opacity: 1;
      transform: translateY(0);
    }

    100% {
      opacity: 0;
      transform: translateY(-80px);
    }
  }

  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    top: 40px;
  }
`;

//visibility: ${(props) => props.isActive ? visible : collapse}
