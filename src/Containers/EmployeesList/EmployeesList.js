import { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { employeesListSuccess } from "../../Actions/employees.action";
import ListItem from "../../Components/ListItem";
import { useEmployees } from "../../Hooks";
import EmployeesProvider from "../../Hooks/employees.hook";
import { employeesServices } from "../../Services/employees.service";

const EmployeesList = ({ data }) => {
  const [colorPickerId, setColorPickerId] = useState(false);
  const [editingItem, setEditingItem] = useState(false);

  return (
    <>
      {data?.map((employee, i) => {
        const { uuid, company, bio, name, title, avatar } = employee;
        return (
          <ListItem
            key={i}
            employee={employee}
            colorPickerId={colorPickerId}
            setColorPickerId={setColorPickerId}
            editingItem={editingItem}
            setEditingItem={setEditingItem}
          />
        );
      })}
    </>
  );
};

export default EmployeesList;
