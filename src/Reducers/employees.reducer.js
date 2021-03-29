import * as types from "../Constants/employees.constants";

export const employeesReducer = (state, { type, payload }) => {
  switch (type) {
    case types.EMPLOYEES_LIST_BEGIN:
      return { ...state, loading: true };
    case types.EMPLOYEES_LIST_ERROR:
      return { ...state, loading: false, error: { ...payload } };
    case types.EMPLOYEES_LIST_SUCCESS:
      return { ...state, loading: false, data: payload };
    case types.EMPLOYEE_UPDATE:
      return { ...state, data: payload };
    default:
      return state;
  }
};
