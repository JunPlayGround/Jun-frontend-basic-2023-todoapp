import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import FONTFAMILY from "../../variables/font_family";
import TEXTS from "../../variables/texts";
import CheckBox from "../Atoms/CheckBox/index";
import InputTask from "../Atoms/Input/index";
import EditButton from "../Atoms/EditButton/index";
import COLOR from "../../variables/color";

const Tasks = ({onTaskChange, onTaskComplete, taskName, defaultIsEditing}) => {
  const [isEditing, setIsEditing] = useState(defaultIsEditing);

  const onEditComplete = (value) => {
    setIsEditing(false);
    onTaskChange(value);
  };

  const onEditButtonClick = () => {
    setIsEditing(true);
  }

  return (
    <StyledWrapper>
      <CheckBox onClick={onTaskComplete} />
      {isEditing ? <InputTask defaultValue={taskName} onEditComplete={onEditComplete} />
      : (                                 
          <>
          <StyledTaskName>
            {taskName}
          </StyledTaskName>
            <EditButton onClick={onEditButtonClick} />
          </>
        )
      }
    </StyledWrapper>
  )
};
export default Tasks;

const StyledWrapper = styled.div`
  font-family: ${FONTFAMILY.NOTO_SANS};
  display: flex;
  width: 25%;
  padding: 2px 6px;
  gap: 10px;
`;

const StyledTaskName = styled.div`
  ${TEXTS.S}
  color: ${COLOR.LIGHT_GRAY};
  width: 100%;
  margin: 0;
`;
