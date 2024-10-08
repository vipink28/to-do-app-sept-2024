import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../auth/AuthContext';
import TaskContext from '../context/TaskContext';

function TaskForm(props) {
    const init = {
        title: "",
        description: "",
        duedate: ""
    }
    const { isUpdate, data, setIsUpdate } = props;
    const { addTask, updateTask } = useContext(TaskContext);
    const { user } = useContext(AuthContext);
    const [formData, setFormData] = useState(init);
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

    const handleUpdate = () => {
        updateTask(formData);
    }
    const handleCancel = () => {
        setIsUpdate(false);
        setFormData(init);
    }

    useEffect(() => {
        if (isUpdate && data) {
            setFormData(data);
        }
    }, [isUpdate, data])

    return (
        <div className='py-3'>
            <h2 className='text-white'>{isUpdate ? "Update Task" : "Create Task"}</h2>
            <div className='card p-3'>
                <div className='mb-3'>
                    <label className='form-label'>Title</label>
                    <input type='text' name='title' className='form-control' value={formData.title} onChange={handleChange} />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Description</label>
                    <textarea type='text' name='description' className='form-control' value={formData.description} onChange={handleChange}></textarea>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Due Date</label>
                    <input type='datetime-local' name='duedate' className='form-control' value={formData.duedate} onChange={handleChange} />
                </div>
                <div className='mb-3'>
                    {
                        isUpdate ?
                            <>
                                <button className='btn btn-primary' onClick={handleUpdate}>Update Task</button>
                                <button className='btn btn-warning ms-2' onClick={handleCancel}>Cancel</button>
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