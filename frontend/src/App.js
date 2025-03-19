import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [medications, setMedications] = useState([]);
    
    useEffect(() => {
        const userId = "defaultUserId"; // Replace with actual user logic
        axios.get(`http://localhost:5000/medications/${userId}`)
            .then(res => setMedications(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>Medication Supervisor AI Bot</h1>
            <ul>
                {medications.map(med => (
                    <li key={med._id}>{med.name} - {med.dosage} - {med.time}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
