import React, { useContext } from 'react';
import TaskForm from '../components/TaskForm';
import TaskContext from '../context/TaskContext';
import { formatDate } from '../helper';

function CreateTask(props) {
    const { latestTask, recentTasks } = useContext(TaskContext);
    return (
        <div className='container-fluid h-100'>
            <div className='row align-items-center h-100'>
                <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center h-100 text-white bg-primary'>
                    <TaskForm />
                </div>

                <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center h-100 text-white'>
                    <div className='card w-50 bg-primary text-white'>
                        <div className='card-body'>
                            {
                                latestTask ?
                                    <div className='py-2'>
                                        <div className='flex align-items-center'>
                                            <h3>Latest Task</h3>
                                            <button className='btn btn-info'>Edit</button>
                                        </div>
                                        <div className='py-2'>
                                            <h2>{latestTask.title}</h2>
                                            <p>{latestTask.description}</p>
                                        </div>
                                        <div className='flex align-items-center'>
                                            <p>Modified On: {formatDate(latestTask.modifiedon)}</p>
                                            <p className='ms-auto'>Due On: {latestTask.duedate}</p>
                                        </div>
                                    </div>
                                    :
                                    <p>Please add a task</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateTask;