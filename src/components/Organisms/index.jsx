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
    const addList = [...taskList];
    setTaskList(addList.concat({ name: "", initializing: true }));
  };

  const onTaskComplete = (index) => {
    const deleteList = [...taskList];
    setTaskList(deleteList.splice(index, 1));
  };

  const onTaskNameChange = ({ value, index }) => {
    const changeList = [...taskList];
    if (value === "") {
      changeList.splice(index, 1);
    } else {
      changeList[index].name = value;
    }
    setTaskList(changeList);
  };

  return (
    <StyledWrapper>
      <AddTaskButton onClick={onAddTaskButtonClick} />
      <StyledTaskList>
        {
            taskList.map(function (task,index){
              return  <Tasks onTaskChange={onTaskNameChange} onTaskComplete={onTaskComplete} taskName={task.name} defaultIsEditing={task.initializing} />;
            })
        }
      </StyledTaskList>
    </StyledWrapper>
  );
};
export default TodoCard;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 20px;
  border-radius: 4px;
  gap: 10px;
`;

const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
