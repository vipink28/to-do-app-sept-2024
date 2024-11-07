import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProtetecedRoute = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const checkUserFromDatabase = async (email) => {
        const response = await fetch(`http://localhost:5001/users?email=${email}`, { method: "GET" });
        const user = await response.json();
        if (user.length > 0) {
            setIsLoggedIn(true);
        } else {
            localStorage.removeItem("todouser");
            navigate("/")
        }
    }




    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem("todouser"));
        if (localUser) {
            checkUserFromDatabase(localUser.email);
        } else {
            navigate("/");
        }
    }, [])

    return isLoggedIn ? children : null
}

export default ProtetecedRoute;