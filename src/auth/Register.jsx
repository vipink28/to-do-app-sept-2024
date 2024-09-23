import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register(props) {
    // useNavigate hook is used for redirection in a function.
    const navigate = useNavigate();


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
        // api request in vanilla javascript
        // in vanilla javascript we can use fetch() method to send request to an api
        let config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }
        const checkUser = await fetch(`http://localhost:5000/users?email=${formData.email}`, { method: "GET" })
        const user = await checkUser.json();
        if (user.length > 0) {
            alert("user already exist");
        } else {
            const response = await fetch("http://localhost:5000/users", config);
            const user = await response.json();
            if (response.status === 201) {
                localStorage.setItem("todouser", JSON.stringify(user));
                alert("successfully registered");
                navigate("/task-list");
            } else {
                alert("something went wrong");
            }
        }
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