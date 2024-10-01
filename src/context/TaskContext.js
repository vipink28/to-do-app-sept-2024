import { createContext } from "react";

const TaskContext = createContext();

// add Task
const addTask = async (formData) => {
    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    }

    try {
        const response = await fetch(`http://localhost:5000/tasks`, config);
        if (response.status === 201) {
            alert("task created")
        } else {
            alert("something went wrong")
        }
    } catch (error) {
        console.log(error);
    }
}


export const TaskProvider = ({ children }) => {
    return (
        <TaskContext.Provider value={{
            addTask
        }}>
            {children}
        </TaskContext.Provider>
    )
}



export default TaskContext;