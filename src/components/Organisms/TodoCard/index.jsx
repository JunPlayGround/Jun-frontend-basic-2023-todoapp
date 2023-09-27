import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import FONTFAMILY from "../../../variables/font_family";
import TEXTS from "../../../variables/texts";
import COLOR from "../../../variables/color";
import BREAKPOINT from "../../../variables/breakpoint";
import AddTaskButton from "../../Atoms/AddTaskButton/index";
import Tasks from "../../Molecules/Tasks/index";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";

const TodoCard = () => {
  const DEFAULT_VALUE = [{ name: "", initializing: true }]
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem("taskList")) ?? DEFAULT_VALUE);
  const AlertHandlerContext = useAlertHandlerContext();

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

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
      AlertHandlerContext.setAlert("タスク名が入力されていません。");
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
  width: 500px;
  padding: 20px;
  margin: 0 auto;
  border-radius: 4px;
  gap: 10px;
  background-color: ${COLOR.BLACK};
  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    width: 100%;
    max-width: 500px;
  }
`;

const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
