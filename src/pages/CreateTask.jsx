import React from 'react';
import TaskForm from '../components/TaskForm';

function CreateTask(props) {
    return (
        <div className='container-fluid h-100'>
            <div className='row align-items-center h-100'>
                <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center h-100 text-white bg-primary'>
                    <TaskForm />
                </div>

                <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center h-100 text-white'>
                    <div className='card w-50'>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateTask;