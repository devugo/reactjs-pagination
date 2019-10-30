ReactJS Pagination
==================
A simple React Pagination for your web applications.
Render this components to manage pagiantions betweeen data

Installation
============
install reactjs-pagination with npm

```
$ npm install --save @devugo/reactjs-pagination
```

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

```
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Required</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>totalItems</td>
            <td>Number</td>
            <td></td>
            <td>true</td>
            <td>Total number of items to be paginated</td>
        </tr>
        <tr>
            <td>itemsPerPage</td>
            <td>Number</td>
            <td></td>
            <td>true</td>
            <td>No of items per page</td>
        </tr>
        <tr>
            <td>paginationSpan</td>
            <td>Number</td>
            <td></td>
            <td>true</td>
            <td>Length of pagination bar or span</td>
        </tr>
        <tr>
            <td>currentPage</td>
            <td>Number</td>
            <td>1</td>
            <td>true</td>
            <td>Current page</td>
        </tr>
        <tr>
            <td>handleChange</td>
            <td>Function</td>
            <td></td>
            <td>true</td>
            <td>Function to switch between pages</td>
        </tr>
    </tbody>
</table>
```