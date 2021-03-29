import { useContext } from "react";
import { EmployeesContext } from "./employees.hook";

export const useEmployees = () => useContext(EmployeesContext);
