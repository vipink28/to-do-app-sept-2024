import React, { useContext, useState } from 'react';
import AuthContext from '../auth/AuthContext';
import TaskContext from '../context/TaskContext';

function TaskForm(props) {
    const { isUpdate } = props;
    const { addTask } = useContext(TaskContext);
    const { user } = useContext(AuthContext);



    const [formData, setFormData] = useState(null);
    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData((prev) => {
            return {
                ...prev,
                [name]: value,
                userid: user.id,
                modifiedon: Date()
            }
        })
    }

    const handleSubmit = () => {
        addTask(formData);
    }

    return (
        <div className='py-3 w-50'>
            <h2 className='text-white'>{isUpdate ? "Update Task" : "Create Task"}</h2>
            <div className='card p-3'>
                <div className='mb-3'>
                    <label className='form-label'>Title</label>
                    <input type='text' name='title' className='form-control' onChange={handleChange} />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Description</label>
                    <textarea type='text' name='description' className='form-control' onChange={handleChange}></textarea>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Due Date</label>
                    <input type='datetime-local' name='duedate' className='form-control' onChange={handleChange} />
                </div>
                <div className='mb-3'>
                    {
                        isUpdate ?
                            <>
                                <button className='btn btn-primary'>Update Task</button>
                                <button className='btn btn-warning ms-2'>Cancel</button>
                            </>
                            :
                            <button onClick={handleSubmit} className='btn btn-primary'>Create Task</button>
                    }
                </div>
            </div>
        </div>
    );
}

export default TaskForm;