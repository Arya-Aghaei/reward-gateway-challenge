import { useState } from "react";
import ListItem from "../../Containers/ListItem";

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
