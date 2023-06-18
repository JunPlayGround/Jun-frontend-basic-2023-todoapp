import React from "react";
import styled from "styled-components";
import COLOR from "../../variables/color";
import TEXTS from "../../variables/texts";

const Title = () => {
  return <StyledText>SIMPLE TODO APP</StyledText>;
};
export default Title;

const StyledText = styled.div`
  color: ${COLOR.WHITE};
  ${TEXTS.S}
`;
