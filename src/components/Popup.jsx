import React from 'react';
import { formatDate } from '../helper';
import TaskForm from './TaskForm';

function Popup(props) {
    const { type, data } = props;
    return (
        <div className="modal" tabIndex="-1" id='taskPopup'>
            <div className="modal-dialog">
                <div className="modal-content bg-primary text-white">
                    <div class="modal-header" data-bs-theme="dark">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {
                            type === "view" ?
                                <div className='py-2'>
                                    <div className='py-2'>
                                        <h2>{data.title}</h2>
                                        <p>{data.description}</p>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <p>Modified On: {formatDate(data.modifiedon)}</p>
                                        <p className='ms-auto'>Due On: {data.duedate}</p>
                                    </div>
                                </div>
                                : type === "edit" ?
                                    <TaskForm isUpdate={true} data={data} />
                                    :
                                    <div>Delete</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popup;