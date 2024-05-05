import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Pagination from "./Pagination"; // Import your Pagination component

// Higher-order component to add pagination functionality
const withPagination = (WrappedComponent, fetchData) => {
  return withRouter(({ match, location, history }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0); // Total items count
    const limit = 10; // Number of items per page

    useEffect(() => {
      // Fetch data for the current page
      fetchData(currentPage, limit)
        .then((data) => {
          // Update total items count
          setTotalItems(data.totalCount);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, [currentPage, fetchData]);

    // Handler function to handle page changes
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
      // Update URL with new page number
      history.push(`${location.pathname}?page=${pageNumber}`);
    };

    return (
      <div>
        {/* Render the wrapped component */}
        <WrappedComponent {...{ match, location, history }} />
        {/* Render Pagination component */}
        <Pagination
          total={totalItems}
          limit={limit}
          currentPage={currentPage}
          url={location.pathname}
          onPageChange={handlePageChange}
        />
      </div>
    );
  });
};

export default withPagination;
