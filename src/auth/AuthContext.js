import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    //register user
    const register = async (formData) => {
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
                setUser(user);
                alert("successfully registered");
                navigate("/task-list");
            } else {
                alert("something went wrong");
            }
        }
    }

    //login
    const login = async (formData) => {
        const response = await fetch(`http://localhost:5000/users?email=${formData.email}&password=${formData.password}`, { method: "GET" });
        const users = await response.json();
        if (users.length > 0) {
            localStorage.setItem("todouser", JSON.stringify(users[0]));
            setUser(users[0]);
            alert("user found");
            navigate("/task-list");
        } else {
            alert("email/password incorrect");
        }
    }

    const checkUserFromDatabase = async (email) => {
        const response = await fetch(`http://localhost:5000/users?email=${email}`, { method: "GET" });
        const user = await response.json();
        if (user.length > 0) {
            setUser(user[0]);
        } else {
            localStorage.removeItem("todouser");
        }
    }

    const logout = () => {
        localStorage.removeItem("todouser");
        setUser(null);
        navigate("/");
    }

    useEffect(() => {
        let localUser = JSON.parse(localStorage.getItem("todouser"));
        if (localUser) {
            checkUserFromDatabase(localUser.email)
        }
    }, []);


    return (
        <AuthContext.Provider value={{
            register,
            login,
            user,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;