import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Containers/App/App";
import reportWebVitals from "./reportWebVitals";
import EmployeesProvider from "./Hooks/employees.hook";

ReactDOM.render(
  <React.StrictMode>
    <EmployeesProvider>
      <App />
    </EmployeesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();