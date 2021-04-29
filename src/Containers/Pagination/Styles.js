import styled from "styled-components";

export const PaginationWrapper = styled.div`
  width: 100%;

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 10px;
    overflow: auto;

    .page-item {
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

      a {
        padding: 0px 15px;
        display: block;
      }

      &.break,
      &.nav-icon {
        width: 0;
        border: none;
        font-size: x-large;
        padding: 0px 10px;
      }

      &.nav-icon {
        padding: 10px;
      }

      &:hover {
        border: 1px solid #4481eb;

        &.break,
        &.nav-icon {
          border: none;
          transform: rotateY(180deg);
        }

        &.nav-icon {
          border: none;
          transform: scale(1.2);
        }
      }

      a {
        &:focus {
          outline: none;
        }
      }

      &.active {
        background: #4481eb;
        color: #fff;
      }
    }
  }
`;
