import React from "react";
import { useNavigate } from "react-router-dom";

function Home () {
    let navigate = useNavigate()
    return (
        <div>
            HOME PAGE
            <button onClick={() => navigate('/contact')}>
                go to contact page
            </button>
        </div>
    )
}

export default Home;