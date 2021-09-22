import React from "react";
import PropTypes from "prop-types";
import { Pagination as Paging, PageItem } from "react-bootstrap";
import "./paging.scss";

const Pagination = ({ pagination: { page, limit, totals }, onPageChange }) => {
  const totalPages = Math.ceil(totals / limit);
  const handlePageChange = (newPage) => {
    if (onPageChange) {
      onPageChange(newPage);
    }
  };
  const getPageItem = () => {
    const active = page;
    let pageItem = [];
    let firstItem = page - 1 === 0 ? 1 : page - 1;
    let lastItem = firstItem === 1 ? 3 : page + 1 > totalPages ? totalPages : page + 1;
    firstItem = lastItem === totalPages ? totalPages - 2 : firstItem;

    lastItem = lastItem > totalPages ? totalPages : lastItem;

    for (let i = firstItem; i <= lastItem; i++) {
      pageItem.push(
        <PageItem key={i} active={active === i} onClick={() => handlePageChange(i)}>
          {i}
        </PageItem>
      );
    }
    return pageItem;
  };

  return (
    <Paging className="m-1 mt-auto">
      <Paging.First onClick={() => handlePageChange(1)} className={page === 1 ? "disabled" : ""} />
      <Paging.Prev onClick={() => handlePageChange(page - 1)} className={page === 1 ? "disabled" : ""} />
      {getPageItem()}
      <Paging.Next onClick={() => handlePageChange(page + 1)} className={page === totalPages ? "disabled" : ""} />
      <Paging.Last onClick={() => handlePageChange(totalPages)} className={page === totalPages ? "disabled" : ""} />
    </Paging>
  );
};

Pagination.propTypes = {
  pagination: PropTypes.object,
  onPageChange: PropTypes.func,
};
Pagination.defaultProps = {
  onPageChange: null,
};

export default Pagination;
