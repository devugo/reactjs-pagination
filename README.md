ReactJS Pagination
==================
A simple React Pagination for your web applications.
Render this components to manage pagiantions betweeen data

Usage
=====

This component is very easy to use and user friendly. Just provide the required props and you are good to get your pagination rendered!

```
import React, { useState } from 'react';
import ReactDom from 'react-dom';
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
    
    return (
        <div>
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

Component Props
===============

Name | Type | Default | Required | Description
--- | --- | --- | --- | --- |
`totalItems` | Number | | true | Total number of items to be paginated
`itemsPerPage` | Number | | true | No of items per page
`paginationSpan` | Number | | true | Length of pagination bar or span
`currentPage` | Number | 1 | true | Current page number
`handleChange` | Function | | true | Function to switch between pages