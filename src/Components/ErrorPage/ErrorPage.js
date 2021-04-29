import React from "react";
import PropTypes from "prop-types";
import {
  ErrorPageImage,
  ErrorPageWrapper,
  ErrorPageTitle,
  ErrorPageDescription,
  ErrorPageRefresh,
} from "./Styles";
import { useHistory } from "react-router";

const ErrorPage = ({ type }) => {
  const history = useHistory();
  return (
    <ErrorPageWrapper>
      <ErrorPageImage
        src={type === "503" ? "images/warning.svg" : "images/error-404.svg"}
      />
      <ErrorPageTitle>
        {type === "503"
          ? "Something went wrong, Please try again!"
          : "Page not found!"}
      </ErrorPageTitle>
      <ErrorPageDescription>
        {type === "503" ? "Try refresh the page" : "Please check the URL"}
      </ErrorPageDescription>
      {type === "503" && (
        <ErrorPageRefresh
          onClick={() => {
            history.go(0);
          }}
        >
          Reload
        </ErrorPageRefresh>
      )}
    </ErrorPageWrapper>
  );
};

ErrorPage.propTypes = {
  type: PropTypes.string,
};

ErrorPage.defaultProps = {
  type: "503",
};

export default ErrorPage;
