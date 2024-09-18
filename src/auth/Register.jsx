import React from 'react';

function Register(props) {
    return (
        <div className='py-2'>
            <div className='mb-3'>
                <label className='form-label'>User Name</label>
                <input type='text' name='username' className='form-control' />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Email</label>
                <input type='email' name='email' className='form-control' />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Password</label>
                <input type='password' name='password' className='form-control' />
            </div>

            <button className='btn btn-primary'>Register</button>

        </div>
    );
}

export default Register;