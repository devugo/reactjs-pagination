import React from 'react';
import './App.scss';

import Pagination from './components/Pagination';

const App = () => {
    return (
        <div className="container">
            <Pagination 
                totalItems={100}
                itemsPerPage={10}
                paginationSpan={5}
            />
        </div>
    )
}

export default App;