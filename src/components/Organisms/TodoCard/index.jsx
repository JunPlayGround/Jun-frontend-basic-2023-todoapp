import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import FONTFAMILY from "../../../variables/font_family";
import TEXTS from "../../../variables/texts";
import COLOR from "../../../variables/color";
import AddTaskButton from "../../Atoms/AddTaskButton/index";
import Tasks from "../../Molecules/Tasks/index";

const TodoCard = () => {
  const [taskList, setTaskList] = useState([{ name: "", initializing: true }]);

  const onAddTaskButtonClick = () => {
    setTaskList([...taskList, { name: "", initializing: true }]);
  };

  const onTaskComplete = ({ index }) => {
    const deleteList = [...taskList];
    const listIndex = index;
    setTaskList(
      deleteList.filter((value, index, list) => {
        return index !== listIndex;
      })
    );
  };

  const onTaskNameChange = ({ value, index }) => {
    const changeList = [...taskList];
    const listIndex = index;
    if (value) {
      changeList.splice(listIndex, 1, { name: value, initializing: false });
      setTaskList(changeList);
    } else {
      setTaskList(
        changeList.filter((value, index, list) => {
          return index !== listIndex;
        })
      );
    }
  };

  return (
    <StyledWrapper>
      <AddTaskButton onClick={onAddTaskButtonClick} />
      <StyledTaskList>
        {taskList.map((task, index) => {
          return (
            <Tasks
              key={index}
              onTaskChange={(value) => {
                onTaskNameChange({ value, index });
              }}
              onTaskComplete={() => {
                onTaskComplete({ index });
              }}
              taskName={task.name}
              defaultIsEditing={task.initializing}
            />
          );
        })}
      </StyledTaskList>
    </StyledWrapper>
  );
};
export default TodoCard;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  border-radius: 4px;
  gap: 10px;
  background-color: ${COLOR.BLACK};
`;

const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
