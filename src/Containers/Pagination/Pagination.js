import { PaginationWrapper, PaginationItem } from "./Styles";
import PropTypes from "prop-types";
import _ from "lodash";
import { FiChevronsRight, FiChevronsLeft } from "react-icons/fi";
import ReactPaginate from "react-paginate";

const Pagination = ({ totalRecords, pageLimit, onPageChange, currentPage }) => {
  const totalPages = Math.ceil(totalRecords / pageLimit);
  const onChange = ({ selected }) => {
    if (onPageChange) {
      onPageChange(selected + 1);
    }
  };
  return (
    <PaginationWrapper>
      <ReactPaginate
        pageCount={totalPages}
        onPageChange={onChange}
        pageClassName="page-item"
        breakClassName="page-item break"
        nextLabel={<FiChevronsRight />}
        previousLabel={<FiChevronsLeft />}
        previousClassName="page-item nav-icon"
        nextClassName="page-item nav-icon"
        activeClassName="page-item active"
        forcePage={currentPage - 1}
      />
    </PaginationWrapper>
  );
};

Pagination.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  pageLimit: PropTypes.number,
  currentPage: PropTypes.number,
  onPageChange: PropTypes.func,
};

export default Pagination;
