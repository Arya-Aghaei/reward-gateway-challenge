import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import PropTypes from "prop-types";

import {
  SearchInputItem,
  SearchInputWrapper,
  ClearIcon,
  SearchInputContainer,
} from "./Styles";

const SearchForm = ({ onSearch, inputValue, setInputValue }) => {
  return (
    <SearchInputWrapper>
      <label>Search </label>
      <SearchInputContainer>
        <SearchInputItem
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search among the custom labels"
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              onSearch(inputValue);
            }
          }}
        />
        {inputValue?.length > 0 && (
          <ClearIcon
            onClick={() => {
              setInputValue("");
              onSearch(false);
            }}
          />
        )}
      </SearchInputContainer>
      <button onClick={() => onSearch(inputValue)}>
        <AiOutlineSearch />
      </button>
    </SearchInputWrapper>
  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func,
  inputValue: PropTypes.string,
  setInputValue: PropTypes.func,
};

SearchForm.defaultProps = {
  inputValue: "",
};

export default SearchForm;
