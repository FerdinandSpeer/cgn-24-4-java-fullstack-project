import './App.css'
import axios from "axios";
import {useEffect, useState} from "react";

function App() {

    const [message, setMessage] = useState<string>("")

    function fetchData() {
        axios.get("/api/hello")
            .then(response => {
                setMessage(response.data)
            })
            .catch(error => console.error("Error fetching data", error))
    }

    useEffect(() => {
        fetchData();

    }, []);

    return (
        <>
            <h1>{message}</h1>
        </>
    )
}

export default App
