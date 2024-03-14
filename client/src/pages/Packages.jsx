import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Packages = () => {
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get("http://localhost:5000/auth/verify").then((res) => {
            if (res.data.status) {

            } else {
                navigate("/login")
            }
            console.log(res);
        })
    }, []);

    return (
        <>
            <div>Packages</div>
        </>
    )
}

export default Packages