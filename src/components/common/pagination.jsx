import React from 'react';
import PropTypes from "prop-types";
import _ from "lodash";

// sfc = Stateless Function Component

const Pagination = (props) => {
    const { itemsCount, pageSize, currentPage, onPageChange } = props;
    console.log(currentPage);

    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);

    return (
    <nav aria-label="Page navigation">
        <ul class="pagination">
            {pages.map(page => (
                <li key={page} class={ page === currentPage ? "page-item active" : "page-item" }>
                    <a class="page-link" onClick={() => onPageChange(page)}>{page}</a>
                </li>
            ))}
        </ul>
    </nav>
    );
};

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired, 
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired 
};

export default Pagination;


