import React, { useState } from 'react';
import './App.scss';

import Pagination from './components/Pagination';

const App = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const handleChange = value => {
        setCurrentPage(value);
    }
    
    return (
        <div className="container">
            <Pagination 
                totalItems={100}
                itemsPerPage={10}
                paginationSpan={5}
                currentPage={currentPage}
                handleChange={handleChange}
            />
        </div>
    )
}

export default App;