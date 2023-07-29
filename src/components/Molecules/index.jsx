import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../variables/color";
import TEXTS from "../../variables/texts";

const Tasks = ({onTaskChange, onEditComplete, taskName, defaultIsEditing}) => {
  const TaskSets = useState(null);

  useState(() => {
    
  }, [])

  return <InputFrame ref={inputRef} type="text"/>;
};
export default Tasks;

const StyledWrapper = styled.div`
  
`;

const StyledCheckboxWrapper = styled.div`
  
`;

const StyledNameAndButtonWrapper = styled.div`
  
`;

const StyledTaskName = styled.div`
  
`;

const StyledEditButtonWrapper = styled.div`
  
`;
