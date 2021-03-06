import React from "react";
import styled from "styled-components";

const PageBase = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;

  & > * + * {
    margin-top: 30px;
  }

  & > * + a {
    margin-top: 30px;
  }

  & > * > * + * {
    margin-top: 10px;
  }
`;

const PageBaseComp = ({ children, ...others }) => {
  return <PageBase {...others}>{children}</PageBase>;
};

export default PageBaseComp;
