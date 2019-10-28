import React from 'react';

const Pagination = props => {
    return (
        <div className="pagination-container">
            <div className="pagination-container__tabs">
                <div className="pagination-container__tab">
                    <span>>></span>
                </div>
                <div className="pagination-container__tab">
                    <span>></span>
                </div>
                <div className="pagination-container__tab">
                    <span>1</span>
                </div>
                <div className="pagination-container__tab">
                    <span>2</span>
                </div>
                <div className="pagination-container__tab">
                    <span>3</span>
                </div>
                <div className="pagination-container__tab">
                    <span>4</span>
                </div>
                <div className="pagination-container__tab">
                    <span>5</span>
                </div>
                <div className="pagination-container__tab active">
                    <span>6</span>
                </div>
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