import React, { useState, useCallback } from 'react';

const Pagination = props => {
    // const [totalItems, itemsPerPage, paginationSpan] = props;

    let pageCount = props.totalItems/props.itemsPerPage;
    let paginationSpan = props.paginationSpan;

    const [currentPage, setCurrentPage] = useState(1);
    const [noOfPaginationSpan, setNoOfPaginationSpan] = useState(paginationSpan);

    let pageNumbers = [];
    while(pageCount > 0){
        pageNumbers.push(pageCount);
        pageCount--;
    }
    pageNumbers.sort((a, b) => a-b);
    
    const [paginations, setPaginations] = useState(pageNumbers);

    const navigate = useCallback((value) => {
        setCurrentPage(value);
    }, []);

    console.log(pageNumbers);
    
    return (
        <div className="pagination-container">
            <div className="pagination-container__tabs">
                <div className="pagination-container__tab">
                    <span>>></span>
                </div>
                <div className="pagination-container__tab">
                    <span>></span>
                </div>
                {
                    paginations.length > 0 ? 
                        paginations.map(value => 
                            <div 
                                onClick={navigate.bind(this, value)} 
                                key={value} 
                                className={currentPage === value ? "pagination-container__tab active" : "pagination-container__tab"}
                            >
                                <span>{value}</span>
                            </div>
                        )
                    : null
                }
                <div className="pagination-container__tab">
                    <span>></span>
                </div>
                <div className="pagination-container__tab">
                    <span>>></span>
                </div>
            </div>
        </div>
    )
}

export default Pagination;