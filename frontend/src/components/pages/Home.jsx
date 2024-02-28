import React, { useEffect, useState } from 'react'
import http from '../../http'

import { Link } from 'react-router-dom'

function Home() {
    const [companies, setCompanies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchAllCompanies();
    },[]);

    // get all companies data 
    const fetchAllCompanies = () => {
        http.get('/companies')
        .then(response => {
            setCompanies(response.data.data);
        })
        .catch(error => {
            setError(error);
        });
    }

    // delete company
    const deleteCompany = (id) => {
        http.delete('/companies/'+id)
        .then(response => {
            fetchAllCompanies();
        })
        .catch(error => {
            setError(error);
        });
    }

    // show error message
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    // console.log(companies);
    return (
        <div>
            <h2>Companies Listing...</h2>
            <table className='table table-bordered table-hover table-primary table-responsive'>
                <thead>
                    <tr className='text-center'>
                        <th>SL</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Website</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {  companies.map((company, index) => ( 
                        <tr className='text-center' key={company.id}>
                            <td>{index + 1}.</td>
                            <td>{company.name}</td>
                            <td>{company.email}</td>
                            <td>{company.address}</td>
                            <td>{company.website}</td>
                            <td>
                                <Link to={{ pathname:"/edit/" + company.id  }} className='btn btn-sm btn-success'>Edit</Link>
                                <Link to={{ pathname:"/show/" + company.id  }} className='btn btn-sm btn-info'>Show</Link>
                                <button type='button' className='btn btn-sm btn-danger' onClick={() => { deleteCompany(company.id) }}>Delete</button>
                            </td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </div>
    )
}

export default Home