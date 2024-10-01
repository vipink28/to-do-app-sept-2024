import React, { useContext, useState } from 'react';
import AuthContext from './AuthContext';

function Register(props) {
    const { register } = useContext(AuthContext);


    const [formData, setFormData] = useState(null);
    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleSubmit = () => {
        register(formData);
    }

    return (
        <div className='py-2'>
            <div className='mb-3'>
                <label className='form-label'>User Name</label>
                <input type='text' name='username' className='form-control' onChange={handleChange} />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Email</label>
                <input type='email' name='email' className='form-control' onChange={handleChange} />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Password</label>
                <input type='password' name='password' className='form-control' onChange={handleChange} />
            </div>

            <button onClick={handleSubmit} className='btn btn-primary'>Register</button>

        </div>
    );
}

export default Register;