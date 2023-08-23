import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import BREAKPOINT from "../../../variables/breakpoint";
import Title from "../../Atoms/Title/index";
import TodoCards from "../../Organisms/TodoCard/index";
import COLOR from "../../../variables/color";

const MainPage = () => {
  return (
    <AllWrapper>
      <Title />
      <TodoCards />
    </AllWrapper>
  );
};
export default MainPage;

const AllWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 80px 0px 0px 0px;
  background-color: ${COLOR.DEEP_BLUE_GRAY};
  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    padding: 40px 20px 0px 20px;
  }
`;
