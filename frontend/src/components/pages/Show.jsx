import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import http from '../../http'

function Show(props) {
  const [error, setError] = useState(null);
  const [inputs, setInputs] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchCompany()
  },[]);

  const fetchCompany = () => {
    http.get('/companies/'+id)
    .then((response) => {
      setInputs({
        name: response.data.data.name,
        email: response.data.data.email,
        address: response.data.data.address,
        website: response.data.data.website,
      });
    })
    .catch(error => {
      setError(error);
    });
  }


  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>

        <div className='row justify-content-center'>
        <h2 className='mt-5 text-center'>Show Companies</h2>
            <div className='card p-3 col-sm-6 justify-content-center'>
                <h2>Name</h2>
                <p>{ inputs.name }</p>

                <h2>Email</h2>
                <p>{ inputs.email }</p>

                <h2>Address</h2>
                <p>{ inputs.address }</p>

                <h2>Website</h2>
                <p>{ inputs.website }</p>
            </div>
        </div>
    </div>
  )
}

export default Show