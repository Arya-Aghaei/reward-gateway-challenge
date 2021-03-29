import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  employeesListError,
  employeesListLoading,
  employeesListSuccess,
  updateEmployee,
} from "../Actions/employees.action";
import Pagination from "../Components/Pagination";
import EmployeesList from "../Containers/EmployeesList";
import { useEmployees } from "../Hooks";
import { employeesServices } from "../Services/employees.service";

const Card = styled.ul`
  background-color: #fff;
  //   background: linear-gradient(#f8f8f8, #fff);
  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  margin: 1.5rem;
  padding: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const getPaginatedData = (data, page, size) => {
  // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
  return data?.slice((page - 1) * size, page * size);
};

const Home = () => {
  const [state, dispatch] = useEmployees();

  const [pagination, setPagination] = useState({
    page: 1,
    size: 10,
  });

  useEffect(() => {
    if (!data?.length) {
      loadData();
    }
  }, []);

  const { data, loading } = state;

  const loadData = async () => {
    try {
      dispatch(employeesListLoading());
      const response = await employeesServices.getEmployeesListApi();
      dispatch(employeesListSuccess({ payload: response }));
    } catch (error) {
      dispatch(employeesListError({ payload: error }));
      console.log(error);
    }
  };
  const paginatedData = getPaginatedData(
    data,
    pagination?.page,
    pagination?.size
  );

  return (
    <div>
      {loading && <div>Loading...</div>}
      {!loading && data?.length > 0 && (
        <Card>
          <EmployeesList data={paginatedData} />
          <Pagination
            pageLimit={pagination?.size}
            totalRecords={data?.length}
            onPageChanged={(page) => {
              setPagination({
                ...pagination,
                page,
              });
            }}
            currentPage={pagination?.page}
          />
        </Card>
      )}
      {!loading && !data?.length && <Card>Something Went Wrong</Card>}
    </div>
  );
};

export default Home;
