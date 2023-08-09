import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXTS from "../../../variables/texts";
import FONTFAMILY from "../../../variables/font_family";
import BREAKPOINT from "../../../variables/breakpoint";

const Title = () => {
  return <StyledText>SIMPLE TODO APP</StyledText>;
};
export default Title;

const StyledText = styled.div`
  color: ${COLOR.WHITE};
  ${TEXTS.L};
  font-family: ${FONTFAMILY.ROBOTO};
  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    font-family: ${FONTFAMILY.NOTO_SANS};
    ${TEXTS.M};
  }

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
