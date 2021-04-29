import React from "react";
import PropTypes from "prop-types";
import {
  EmptyResultImage,
  EmptyResultWrapper,
  EmptyResultTitle,
  EmptyResultDescription,
} from "./Styles";

const EmptyResult = (props) => {
  return (
    <EmptyResultWrapper>
      <EmptyResultImage src="images/empty.svg" />
      <EmptyResultTitle>
        No item found with the searched label!
      </EmptyResultTitle>
      <EmptyResultDescription>
        Try adding some labels to the items
      </EmptyResultDescription>
    </EmptyResultWrapper>
  );
};

EmptyResult.propTypes = {
  // bla: PropTypes.string,
};

EmptyResult.defaultProps = {
  // bla: 'test',
};

export default EmptyResult;
