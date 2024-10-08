import React, { useContext, useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskContext from '../context/TaskContext';
import { formatDate } from '../helper';

function CreateTask(props) {
    const { latestTask, recentTasks } = useContext(TaskContext);
    const [isUpdate, setIsUpdate] = useState(false);
    const handleEdit = () => {
        setIsUpdate(!isUpdate);
    }
    return (
        <div className='container-fluid h-100'>
            <div className='row align-items-center h-100'>
                <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center h-100 text-white bg-primary'>
                    <div className='w-50'>
                        <TaskForm isUpdate={isUpdate} data={latestTask} setIsUpdate={setIsUpdate} />
                    </div>
                </div>

                <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center h-100 text-white'>
                    <div className='card w-75 bg-primary text-white'>
                        <div className='card-body'>
                            {
                                latestTask ?
                                    <div className='py-2'>
                                        <div className='d-flex align-items-center'>
                                            <h3>Latest Task</h3>
                                            <button onClick={handleEdit} className='btn btn-info ms-auto'>{isUpdate ? "Cancel" : "Edit"}</button>
                                        </div>
                                        <div className='py-2'>
                                            <h2>{latestTask.title}</h2>
                                            <p>{latestTask.description}</p>
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <p>Modified On: {formatDate(latestTask.modifiedon)}</p>
                                            <p className='ms-auto'>Due On: {latestTask.duedate}</p>
                                        </div>
                                    </div>
                                    :
                                    <p>Please add a task</p>
                            }
                        </div>
                    </div>

                    <div className='card w-75 bg-primary text-white mt-4'>
                        <div className='card-body'>
                            <h3>Recently Added</h3>

                            {
                                recentTasks ?
                                    recentTasks.map((task) => {
                                        return (
                                            <div key={task.id} className='d-flex border border-warning p-2'>
                                                <p className='mb-0'>{task.title}</p>
                                                <p className='mb-0 ms-auto'>{task.duedate}</p>
                                            </div>
                                        )
                                    }) : <p>Please add a task</p>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateTask;