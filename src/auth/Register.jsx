import React, { useContext, useEffect, useRef, useState } from 'react';
import AuthContext from './AuthContext';

function Register(props) {
    const init = {
        username: "",
        email: "",
        password: ""
    }
    const { register } = useContext(AuthContext);

    const inputRef = useRef(null);

    const [formData, setFormData] = useState(init);
    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const [errors, setErrors] = useState({
        username: [],
        email: [],
        password: []
    });

    const [dirty, setDirty] = useState({
        username: false,
        email: false,
        password: false
    });


    const validate = () => {
        let errorsData = {};
        errorsData.username = [];

        if (!formData.username) {
            errorsData.username.push("Please enter username");
        }


        errorsData.email = [];
        if (!formData.email) {
            errorsData.email.push("Please provide an email");
        }

        let emailreg = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
        if (!emailreg.test(formData.email)) {
            errorsData.email.push("Please enter a valid email");
        }


        errorsData.password = [];
        if (!formData.password) {
            errorsData.password.push("Please enter a password");
        }

        if (!formData.password.length >= 8) {
            errorsData.password.push("Password should be atleast 8 characters.")
        }

        setErrors(errorsData);
    }

    const handleBlur = (e) => {
        let { name } = e.target;
        setDirty((prev) => ({
            ...prev,
            [name]: true
        }))
        validate();
    }

    let isValid = () => {
        let valid = true;
        for (let control in errors) {
            if (errors[control].length > 0) {
                valid = false;
            }
        }
        return valid;
    }


    useEffect(validate, [formData]);



    const handleSubmit = () => {

        if (isValid()) {
            register(formData);
        } else {
            const currValue = inputRef.current.value;
            if (!currValue) {
                Object.keys(dirty).forEach((key) => dirty[key] = true);
            }
            alert("Please resolve errors in the form");
        }
    }

    return (
        <div className='py-2'>
            <div className='mb-3'>
                <label className='form-label'>User Name</label>
                <input ref={inputRef} type='text' name='username' className='form-control' onChange={handleChange} onBlur={handleBlur} />
                <span> {dirty["username"] && errors["username"][0] ? errors["username"] : ""}</span>
            </div>

            <div className='mb-3'>
                <label className='form-label'>Email</label>
                <input ref={inputRef} type='email' name='email' className='form-control' onChange={handleChange} onBlur={handleBlur} />
                <span> {dirty["email"] && errors["email"][0] ? errors["email"] : ""}</span>
            </div>

            <div className='mb-3'>
                <label className='form-label'>Password</label>
                <input ref={inputRef} type='password' name='password' className='form-control' onChange={handleChange} onBlur={handleBlur} />
                <span> {dirty["password"] && errors["password"][0] ? errors["password"] : ""}</span>
            </div>

            <button onClick={handleSubmit} className='btn btn-primary'>Register</button>

        </div>
    );
}

export default Register;