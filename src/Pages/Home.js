import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  employeesListError,
  employeesListLoading,
  employeesListSuccess,
} from "../Actions/employees.action";
import Pagination from "../Containers/Pagination";
import SearchForm from "../Containers/SearchForm";
import EmployeesList from "../Containers/EmployeesList";
import EmptyResult from "../Components/EmptyResult";
import { useEmployees } from "../Hooks";
import { employeesServices } from "../Services/employees.service";
import _ from "lodash";
import Loading from "../Components/Loading/Loading";
import ErrorPage from "../Components/ErrorPage";

const DEFAULT_PAGE_SIZE = 20;

const HeaderTitle = styled.h1`
  width: 100%;
  font-family: cursive;
  text-align: center;
`;

const HeaderDescription = styled.h3`
  width: 100%;
  font-family: cursive;
  text-align: center;
  a {
    text-decoration: none !important;
    color: #4481eb;

    &:hover {
      color: #04befe;
    }
  }
`;

const Card = styled.ul`
  background-color: #fff;
  background: linear-gradient(#f8f8f8, #fff);
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
  border: 1px solid #f5f5f5;
`;

const getPaginatedData = (data, page, size, query) => {
  // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
  let localData = data;
  if (query?.length > 0) {
    localData = _.filter(data, (dt) =>
      _.includes(dt?.label?.toLowerCase(), query?.toLowerCase())
    );
  }
  return localData?.slice((page - 1) * size, page * size);
};

const Home = () => {
  const [state, dispatch] = useEmployees();
  const { data, loading } = state;

  const [inputValue, setInputValue] = useState("");
  const [searchMode, setSearchMode] = useState(false);

  const [pagination, setPagination] = useState({
    page: 1,
    size: DEFAULT_PAGE_SIZE,
  });

  const [paginatedData, setPaginatedData] = useState(
    getPaginatedData(data, pagination?.page, pagination?.size)
  );

  useEffect(() => {
    if (!data?.length) {
      loadData();
    }
  }, []);

  useEffect(() => {
    setPaginatedData(
      getPaginatedData(data, pagination?.page, pagination?.size, inputValue)
    );
  }, [data, pagination, searchMode]);

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

  const onSearch = (query) => {
    let filteredData = getPaginatedData(
      data,
      pagination?.page,
      pagination?.size,
      inputValue
    );

    if (query && query?.length > 0) {
      filteredData = _.filter(data, (dt) =>
        _.includes(dt?.label?.toLowerCase(), query?.toLowerCase())
      );
      setSearchMode(true);
      setPagination({
        page: 1,
        size: DEFAULT_PAGE_SIZE,
      });
    } else {
      setSearchMode(false);
    }

    setPaginatedData(filteredData);
  };

  return (
    <div>
      {loading && (
        <div>
          <Loading />
        </div>
      )}
      {!loading && data?.length > 0 && (
        <>
          <HeaderTitle>Interview Challenge</HeaderTitle>
          <HeaderDescription>
            <a href="mailto:arya-aghaei@outlook.com">By Arya Aghaei</a>
          </HeaderDescription>

          <Card>
            {!loading && data?.length > 0 && (
              <Card style={{ width: "100%" }}>
                <SearchForm
                  onSearch={onSearch}
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                />
              </Card>
            )}
            {!paginatedData?.length && <EmptyResult />}
            <EmployeesList data={paginatedData} />
            {paginatedData?.length > 0 && (
              <Pagination
                pageLimit={pagination?.size}
                totalRecords={searchMode ? paginatedData?.length : data?.length}
                onPageChange={(page) => {
                  setPagination({
                    ...pagination,
                    page,
                  });
                }}
                currentPage={pagination?.page}
              />
            )}
          </Card>
        </>
      )}
      {!loading && !data?.length && (
        <Card>
          <ErrorPage />
        </Card>
      )}
    </div>
  );
};

export default Home;
