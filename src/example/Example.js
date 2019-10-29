import React, { useState } from 'react';
import ReactDom from 'react-dom';
// import Pagination from '../../dist/Pagination';
import Pagination from '../components/Pagination';
import { data } from './data';

let itemPerPage = 3;
let paginationSpan = 3;
const Example = props => {
    const [currentPage, setCurrentPage] = useState(1);

    const handleChange = value => {
        setCurrentPage(value);
    }
    
    let ctrl = (itemPerPage*currentPage) - 1;
    let filtered = [];
    let checker = 0;
    while(checker < 3){
        filtered.push(ctrl);
        ctrl--;
        checker++;
    }
    console.log(filtered);
    return (
        <div>
            <div>
                {
                    filtered.map((dt, index) => 
                        
                        <div key={index}>
                            <h3>{dt.title}</h3>  
                            <p>{dt.description}</p>
                        </div>  
                    )
                }
            </div>
            <div>yeah babe</div>
            <Pagination 
                totalItems={data.length}
                itemsPerPage={itemPerPage}
                paginationSpan={paginationSpan}
                currentPage={currentPage}
                handleChange={handleChange}
            />
        </div>
    )
}

ReactDom.render(<Example />, document.getElementById("example-root"));