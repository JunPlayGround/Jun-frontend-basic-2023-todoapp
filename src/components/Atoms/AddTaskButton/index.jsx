import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import plus from "../../../assets/svg/plus.svg";

const EditButton = (props) => {
  return <EditPlus onClick = {props.onClick}>
    <img src={plus} width={"20px"} /> 
    <div>タスクを追加</div>
  </EditPlus>;
};
export default EditButton;

const EditPlus = styled.button`
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 2px 6px;
  height: 24px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  color: ${COLOR.GREEN};
  gap: 10px;

  :hover{
    background-color: ${COLOR.GREEN_TRANSLUCENT};
    border-radius: 12px;
  }
`;
