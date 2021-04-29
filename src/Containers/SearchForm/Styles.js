import { AiOutlineCloseCircle } from "react-icons/ai";
import styled from "styled-components";

export const SearchInputItem = styled.input`
  width: 97%;
  padding: 10px;
  border-radius: 25px;
  border: 1px solid #e1e1e1;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  font-size: medium;
  width: -webkit-fill-available;

  &::placeholder {
    color: rgb(0 0 0 / 40%);
  }
  &:focus {
    outline: none;
    border: 1px solid #04befe;
  }
`;

export const SearchInputWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;

  label {
    padding: 10px;
  }

  button {
    margin: 0 10px;
    background: #4481eb;
    border: 1px solid #04befe;
    border-radius: 30px;
    color: #fff;
    box-shadow: -2px 1px 7px -2px rgb(0 0 0 / 40%);
    font-size: x-large;
    cursor: pointer;
    transition: all 0.5s;
    width: 40px;
    height: 40px;
    padding: 7px;

    &:focus {
      outline: none;
    }

    &:hover {
      background: #04befe;
    }
  }
`;

export const SearchInputContainer = styled.div`
  width: 50%;
  position: relative;
`;

export const ClearIcon = styled(AiOutlineCloseCircle)`
  position: absolute;
  right: 15px;
  top: 10px;
  font-size: 20px;
  color: #ff3131;
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    color: #ff3131bf;
  }
`;
