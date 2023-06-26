import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
//import TEXTS from "../../../variables/texts";
//import FONTFAMILY from "../../../variables/font_family";
//import BREAKPOINT from "../../../variables/breakpoint";
import pencil from "../../../assets/svg/pencil.svg";

const EditButton = (props) => {
  return <PenButton onClick = {props.onClick}>
    <img src={pencil} width={"20px"} />
  </PenButton>;
};
export default EditButton;

const PenButton = styled.button`
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  width: 20px;
  height: 20px;

  :hover{
    background-color: ${COLOR.LIGHT_GRAY_TRANSLUCENT};
    border-radius: 10px;
  }
`;
