import React from 'react';

function Popup(props) {
    let type = "delete";
    return (
        <div className="modal" tabIndex="-1" id='taskPopup'>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        {
                            type === "view" ?
                                <div>View</div>
                                : type === "edit" ?
                                    <div>Edit</div>
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