import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import http from '../../http'

function Edit(props) {
  const [error, setError] = useState(null);
  const [inputs, setInputs] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchCompany()
  },[]);

  const fetchCompany = () => {
    http.get('/companies/'+id)
    .then((response) => {
      // console.log(response.data.data);
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


  const navigate = useNavigate();

  const handelChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }

  const submitForm = (event) => {
    // console.log(inputs);
    http.put('/companies/'+id,inputs)
    .then((response) => {
      navigate('/');
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
        <h2 className='mt-5 text-center'>Edit Companies</h2>
            <div className='card p-3 col-sm-6 justify-content-center'>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' id='name' className='form-control mb-2'  value={ inputs.name || '' } onChange={handelChange} required/>

                <label htmlFor="email">Email</label>
                <input type="email" name='email' id='email' className='form-control mb-2' value={ inputs.email || '' } onChange={handelChange} required/>

                <label htmlFor="address">Address</label>
                <input type="text" name='address' id='address' className='form-control mb-2' value={ inputs.address || '' } onChange={handelChange}/>

                <label htmlFor="website">Website</label>
                <input type="text" name='website' id='website' className='form-control mb-2' value={ inputs.website || '' } onChange={handelChange}/>

                <button type='button' onClick={submitForm} className='btn btn-success mt-2'>Update</button>
            </div>
        </div>
    </div>
  )
}

export default Edit