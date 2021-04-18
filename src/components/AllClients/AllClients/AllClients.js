  
import React, { useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import BookDataTable from '../BookDataTable/BookDataTable';

const AllClients = () => {
    const [books,setBooks] = useState([]);

    useEffect(() => {
        fetch('https://peaceful-harbor-44348.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div className="container-fluid row " >
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">All clients</h5>
                <BookDataTable books={books}></BookDataTable>
            </div>
        </div>
    );
};

export default AllClients;