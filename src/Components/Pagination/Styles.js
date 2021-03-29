import styled from "styled-components";

export const PaginationWrapper = styled.ul`
  width: 100%;
  margin: auto;
  text-align: center;
  padding: 15px;
  display: flex;
  justify-content: center;
`;

export const PaginationItem = styled.li`
  border: 1px solid #e1e1e1;
  border-radius: 100%;
  margin: 0 5px;
  list-style: none;
  padding: 10px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  transition: all 0.5s;
  background: none;

  &:hover {
    border: 1px solid #4481eb;
  }

  &.etc {
    border: none;
    border-radius: 50%;
    color: rgba(0, 0, 0, 0.6);
    display: block;
    height: 40px;
    line-height: 40px;
    min-width: 40px;
    padding: 5px;
  }

  &.active {
    background: #4481eb;
    color: #fff;
  }
`;
