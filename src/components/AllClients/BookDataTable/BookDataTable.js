  
import React from 'react';

const BookDataTable = ({books}) => {
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Option</th>
                <th className="text-secondary" scope="col">Cost</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Email</th> 
                </tr>
            </thead>
            <tbody>
                {
                  books.map((books, index) =>  
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{books.name}</td>
                        <td>{books.option}</td>
                        <td>{books.cost}</td>
                        <td>{books.phone}</td>
                        <td>{books.email}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default BookDataTable;