import * as types from "../Constants/employees.constants";

export const employeesListLoading = () => ({
  type: types.EMPLOYEES_LIST_BEGIN,
});

export const employeesListSuccess = ({ payload }) => ({
  type: types.EMPLOYEES_LIST_SUCCESS,
  payload,
});

export const employeesListError = ({ payload }) => ({
  type: types.EMPLOYEES_LIST_ERROR,
  payload,
});

export const updateEmployee = ({ user, data }) => {
  return {
    type: types.EMPLOYEE_UPDATE,
    payload: data?.map((item) => {
      if (user?.uuid === item?.uuid) {
        return {
          ...item,
          ...user,
        };
      } else {
        return item;
      }
    }),
  };
};
