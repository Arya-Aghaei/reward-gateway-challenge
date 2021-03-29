import { PaginationWrapper, PaginationItem } from "./Styles";
import PropTypes from "prop-types";
import _ from "lodash";
import { FiChevronsRight, FiChevronsLeft } from "react-icons/fi";
const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";

const fetchPageNumbers = ({ totalPages, currentPage, pageNeighbors = 2 }) => {
  /**
   * totalNumbers: the total page numbers to show on the control
   * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
   */
  const totalNumbers = pageNeighbors * 2 + 3;
  const totalBlocks = totalNumbers + 2;

  if (totalPages > totalBlocks) {
    const startPage = Math.max(2, currentPage - pageNeighbors);
    const endPage = Math.min(totalPages - 1, currentPage + pageNeighbors);
    let pages = _.range(startPage, endPage);

    /**
     * hasLeftSpill: has hidden pages to the left
     * hasRightSpill: has hidden pages to the right
     * spillOffset: number of hidden pages either to the left or to the right
     */
    const hasLeftSpill = startPage > 2;
    const hasRightSpill = totalPages - endPage > 1;
    const spillOffset = totalNumbers - (pages.length + 1);

    switch (true) {
      // handle: (1) < {5 6} [7] {8 9} (10)
      case hasLeftSpill && !hasRightSpill: {
        const extraPages = _.range(startPage - spillOffset, startPage - 1);
        pages = [LEFT_PAGE, ...extraPages, ...pages];
        break;
      }

      // handle: (1) {2 3} [4] {5 6} > (10)
      case !hasLeftSpill && hasRightSpill: {
        const extraPages = _.range(endPage + 1, endPage + spillOffset);
        pages = [...pages, ...extraPages, RIGHT_PAGE];
        break;
      }

      // handle: (1) < {4 5} [6] {7 8} > (10)
      case hasLeftSpill && hasRightSpill:
      default: {
        pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
        break;
      }
    }

    return [1, ...pages, totalPages];
  }

  return _.range(1, totalPages);
};

const Pagination = ({
  totalRecords,
  pageLimit,
  onPageChanged,
  currentPage,
}) => {
  const totalPages = Math.ceil(totalRecords / pageLimit);
  const pages = fetchPageNumbers({ currentPage, totalPages });

  const onChange = (page) => {
    if (onPageChanged) {
      onPageChanged(page + 1);
    }
  };
  return (
    <PaginationWrapper>
      {pages.map((page, i) => {
        if (page === LEFT_PAGE)
          return (
            <PaginationItem className="etc">
              &nbsp; <FiChevronsLeft /> &nbsp;
            </PaginationItem>
          );

        if (page === RIGHT_PAGE)
          return (
            <PaginationItem className="etc">
              &nbsp; &nbsp; <FiChevronsRight /> &nbsp; &nbsp;
            </PaginationItem>
          );

        return (
          <PaginationItem
            className={currentPage - 1 === page && "active"}
            onClick={() => onChange(page)}
          >
            {page}
          </PaginationItem>
        );
      })}
    </PaginationWrapper>
  );
};

Pagination.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  pageLimit: PropTypes.number,
  pageNeighbors: PropTypes.number,
  currentPage: PropTypes.number,
  onPageChanged: PropTypes.func,
};

export default Pagination;
