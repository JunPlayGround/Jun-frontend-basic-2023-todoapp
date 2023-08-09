import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import FONTFAMILY from "../../variables/font_family";
import TEXTS from "../../variables/texts";
import AddTaskButton from "../Atoms/AddTaskButton/index";
import COLOR from "../../variables/color";

const TodoCard = () => {
  const [taskList, setTaskList] = useState([]);

  const onAddTaskButtonClick = () => {
    setTaskList(taskList.push({ name: "", initializing: "true" }));
  };

  const onTaskComplete = (index) => {
    taskList.splice(index, 1);
  };

  const onTaskNameChange = ({ value, index }) => {
    //修正の余地あり
    if (value === []) {
      taskList.splice(index, 1);
    } else {
      taskList[index].name = value;
    }
    setTaskList(taskList);
  };

  return (
    <StyledWrapper>
      <AddTaskButton onClick={onAddTaskButtonClick} />
      <StyledTaskList></StyledTaskList>
    </StyledWrapper>
  );
};
export default Tasks;

const StyledWrapper = styled.div`

`;

const StyledTaskList = styled.div`

`;
