import { createContext, useEffect, useReducer } from "react";
import { EMPLOYEES_STORAGE_KEY } from "../Constants/employees.constants";
import { employeesReducer } from "../Reducers";
import { getInitialState, persistState } from "../Utils/persist-state";

const initialState = getInitialState(EMPLOYEES_STORAGE_KEY) ?? [];
export const EmployeesContext = createContext();

const EmployeesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(employeesReducer, initialState);
  useEffect(() => persistState(EMPLOYEES_STORAGE_KEY, state), [state]);

  return (
    <EmployeesContext.Provider value={[state, dispatch]}>
      {children}
    </EmployeesContext.Provider>
  );
};

export default EmployeesProvider;
