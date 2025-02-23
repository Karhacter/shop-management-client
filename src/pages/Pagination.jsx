import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ total, limit, currentPage, onPageChange, url }) => {
  const numPages = Math.ceil(total / limit);
  if (numPages <= 1) return null; // No pagination needed

  const getPageLink = (pageNumber) => `${url}?page=${pageNumber}`;

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {/* First & Previous */}
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <Link
            className="page-link"
            to={getPageLink(1)}
            onClick={(e) => {
              if (currentPage === 1) e.preventDefault();
              else onPageChange(1);
            }}
          >
            Đầu
          </Link>
        </li>
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <Link
            className="page-link"
            to={getPageLink(currentPage - 1)}
            onClick={(e) => {
              if (currentPage === 1) e.preventDefault();
              else onPageChange(currentPage - 1);
            }}
          >
            &laquo;
          </Link>
        </li>

        {/* Page Numbers */}
        {Array.from({ length: numPages }, (_, i) => i + 1).map((page) => (
          <li
            key={page}
            className={`page-item ${currentPage === page ? "active" : ""}`}
          >
            <Link
              className="page-link"
              to={getPageLink(page)}
              onClick={(e) => {
                if (currentPage === page) e.preventDefault();
                else onPageChange(page);
              }}
            >
              {page}
            </Link>
          </li>
        ))}

        {/* Next & Last */}
        <li
          className={`page-item ${currentPage === numPages ? "disabled" : ""}`}
        >
          <Link
            className="page-link"
            to={getPageLink(currentPage + 1)}
            onClick={(e) => {
              if (currentPage >= numPages) e.preventDefault();
              else onPageChange(currentPage + 1);
            }}
          >
            &raquo;
          </Link>
        </li>
        <li
          className={`page-item ${currentPage === numPages || total === 0 ? "disabled" : ""}`}
        >
          <Link
            className="page-link"
            to={getPageLink(numPages)}
            onClick={() => onPageChange(numPages)}
          >
            Cuối
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
