import React, { useState, useCallback } from 'react';
import '../App.scss';

const Pagination = props => {

    let pageCount = Math.ceil(props.totalItems/props.itemsPerPage);
    let paginationSpan = props.paginationSpan;

    let pageNumbers = []; // Array to store all the pages numbers
    let currPaginations = []; // Array to store the visible paginations based on the pagination span
    
    for(var i = 1; i<=pageCount; i++){
        if(i <= paginationSpan){
            currPaginations.push(i);
        }
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
            // props.handleChange(value);
        }

        let currPaginationsState = currentPaginations;
        // console.log(currPaginationsState);

        if(currPaginationsState.indexOf(value) <= 0 && value > 1){
            currPaginationsState.unshift(value-1); // Add an element in front of an array
            currPaginationsState.pop(); // Remove the last element in an array
            props.handleChange(value);
            // console.log(1);
        }else if(currPaginationsState.indexOf(value) >= currPaginationsState.length - 1 && value < pageCount){
            currPaginationsState.shift(); // Remove the first element from the array
            currPaginationsState.push(value+1); // Add an element to the end of an array
            props.handleChange(value);
            // console.log(2);
        }else if(pageNumbers.indexOf(value) > -1){
            
            props.handleChange(value);
            // console.log(3);
        }
        
    }, [currentPaginations, pageCount, currPaginations]);

    // console.log(pageNumbers);
    // console.log(currentPaginations);
    
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