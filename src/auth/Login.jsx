import React, { useState } from 'react';

function Login(props) {
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


    const handleSubmit = async () => {
        const response = await fetch(`http://localhost:5000/users?email=${formData.email}&password=${formData.password}`, { method: "GET" });
        const users = await response.json();
        if (users.length > 0) {
            alert("user found");
        } else {
            alert("email/password incorrect");
        }
    }

    return (
        <div className='py-2'>
            <div className='mb-3'>
                <label className='form-label'>Email</label>
                <input type='email' name='email' className='form-control' onChange={handleChange} />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Password</label>
                <input type='password' name='password' className='form-control' onChange={handleChange} />
            </div>

            <button onClick={handleSubmit} className='btn btn-primary'>Login</button>

        </div>
    );
}

export default Login;