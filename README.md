ReactJS Pagination
==================

React Pagination for your web applications

```
import React, { useState } from 'react';
import ReactDom from 'react-dom';
// import Pagination from '../../dist/Pagination';
import Pagination from '../components/Pagination';
import { data } from './data';

let itemPerPage = 3;
let paginationSpan = 3;
let totalItems = data.length;
const Example = props => {
    const [currentPage, setCurrentPage] = useState(1);

    const handleChange = value => {
        setCurrentPage(value);
    }
    
    let ctrl = (itemPerPage*currentPage) - 1;
    let filtered = [];
    let checker = 0;
    while(checker < 3){
        if(ctrl < totalItems){
            filtered.push(ctrl);
        }
        ctrl--;
        checker++;
    }
    return (
        <div>
            <div>
                {
                    filtered.map((val, index) => 
                        <div key={index}>
                            <h3>{data[val].title}</h3>  
                            <p>{data[val].description}</p>
                        </div>  
                    )
                }
            </div>
            <Pagination 
                totalItems={totalItems}
                itemsPerPage={itemPerPage}
                paginationSpan={paginationSpan}
                currentPage={currentPage}
                handleChange={handleChange}
            />
        </div>
    )
}

ReactDom.render(<Example />, document.getElementById("example-root"));
```