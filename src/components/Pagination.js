import React, { useState, useCallback } from 'react';
import '../App.scss';

const Pagination = props => {

    let pageCount = Math.ceil(props.totalItems/props.itemsPerPage); // No of pages in terms of 'totalItems and itemsPerPage' props
    let paginationSpan = props.paginationSpan; //  length of pagination in terms of 'paginationSPan'

    let pageNumbers = []; // Array to store all the pages numbers
    let currPaginations = []; // Array to store the visible paginations based on the pagination span
    
    for(var i = 1; i<=pageCount; i++){
        if(i <= paginationSpan){
            // Get current pagination display
            currPaginations.push(i);
        }
        // Get all paginations length (no of pages)
        pageNumbers.push(i);
    }
    
    const [currentPaginations, setCurrentPaginations] = useState(currPaginations);

    const navigate = useCallback((value, type = null) => {
        // If statements to check when the type property is set in order to enable jumoing to pages without using the individual pages buttons
        if(type === "jump"){
            if(value === 1){
                setCurrentPaginations(currPaginations);
            }else if(value === pageCount){
                let newArr = [];
                let ctrl = value;
                var j = 0;
                while(j < paginationSpan){
                    newArr.push(ctrl);
                    ctrl--;
                    j++;
                }
                setCurrentPaginations(newArr.sort((a,b) => a-b));
            }else if(value > pageCount){
                return;
            }
        }

        let currPaginationsState = currentPaginations;

        if(currPaginationsState.indexOf(value) <= 0 && value > 1){
            // Control to monitor the pagination to prevent it spilling over to negative value
            currPaginationsState.unshift(value-1); // Add an element in front of an array
            currPaginationsState.pop(); // Remove the last element in an array
            props.handleChange(value);
            
        }else if(currPaginationsState.indexOf(value) >= currPaginationsState.length - 1 && value < pageCount){
            // Control to monitor the pagination to prevent it spilling past the total number of pages paginations
            currPaginationsState.shift(); // Remove the first element from the array
            currPaginationsState.push(value+1); // Add an element to the end of an array
            props.handleChange(value);
            
        }else if(pageNumbers.indexOf(value) > -1){
            props.handleChange(value);
            
        }
        
    }, [currentPaginations, pageCount, currPaginations]);
    
    return (
        <div className="pagination-container">
            <div className="pagination-container__tabs">
                <div onClick={navigate.bind(this, 1, 'jump')} className="pagination-container__tab">
                    <span>>></span>
                </div>
                <div onClick={navigate.bind(this, props.currentPage-1, 'jump')} className="pagination-container__tab">
                    <span>></span>
                </div>
                {
                    pageNumbers.length > 0 ? 
                        currentPaginations.map(value => 
                            <div 
                                onClick={navigate.bind(this, value)} 
                                key={value} 
                                className={props.currentPage === value ? "pagination-container__tab active" : "pagination-container__tab"}
                            >
                                <span>{value}</span>
                            </div>
                        )
                    : null
                }
                <div onClick={navigate.bind(this, props.currentPage+1, 'jump')} className="pagination-container__tab">
                    <span>></span>
                </div>
                <div onClick={navigate.bind(this, pageCount, 'jump')} className="pagination-container__tab">
                    <span>>></span>
                </div>
            </div>
        </div>
    )
}

export default Pagination;