import styled from "styled-components";

export const ErrorPageWrapper = styled.div`
  min-height: 20vw;
  text-align: center;
  padding: 100px 0px;
`;

export const ErrorPageImage = styled.img`
  width: 50%;
  max-width: 200px;
  height: auto;
  margin: auto;
`;

export const ErrorPageTitle = styled.h1`
  height: auto;
  margin: auto;
  color: #555;
`;

export const ErrorPageDescription = styled.h4`
  height: auto;
  margin: auto;
  color: #a2a0a0;
`;

export const ErrorPageRefresh = styled.button`
  height: auto;
  color: #fff;
  background: #39d107;
  padding: 15px 50px;
  margin: 30px;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    background: #41e80a;
  }

  &:focus {
    border: none;
    outline: none;
  }
`;
