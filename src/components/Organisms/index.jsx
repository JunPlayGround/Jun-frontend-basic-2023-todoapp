import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import FONTFAMILY from "../../variables/font_family";
import TEXTS from "../../variables/texts";
import COLOR from "../../variables/color";
import AddTaskButton from "../Atoms/AddTaskButton/index";
import Tasks from "../Molecules/index";


const TodoCard = () => {
  const [taskList, setTaskList] = useState([]);

  const onAddTaskButtonClick = () => {
    setTaskList(taskList.push({ name: "", initializing: true }));
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
      <StyledTaskList>
        {
          taskList.map(function (task,index) {
              [task, [index]]
            })  
        }
      </StyledTaskList>
    </StyledWrapper>
  );
};
export default Tasks;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTaskList = styled.div`

`;
