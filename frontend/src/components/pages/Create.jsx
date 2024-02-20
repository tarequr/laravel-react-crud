import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import http from '../../http'

function Create() {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handelChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }

  const submitForm = (event) => {
    // console.log(inputs);
    http.post('/companies',inputs)
    .then((response) => {
      navigate('/');
    })
    .catch(error => {
      setError(error);
    });
  }

  return (
    <div>

        <div className='row justify-content-center'>
        <h2 className='mt-5 text-center'>New Companies</h2>
            <div className='card p-3 col-sm-6 justify-content-center'>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' id='name' className='form-control mb-2'  value={ inputs.name || '' } onChange={handelChange} required/>

                <label htmlFor="email">Email</label>
                <input type="email" name='email' id='email' className='form-control mb-2' value={ inputs.email || '' } onChange={handelChange} required/>

                <label htmlFor="address">Address</label>
                <input type="text" name='address' id='address' className='form-control mb-2' value={ inputs.address || '' } onChange={handelChange}/>

                <label htmlFor="website">Website</label>
                <input type="text" name='website' id='website' className='form-control mb-2' value={ inputs.website || '' } onChange={handelChange}/>

                <button type='button' onClick={submitForm} className='btn btn-success mt-2'>Create</button>
            </div>
        </div>
    </div>
  )
}

export default Create