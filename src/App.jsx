import { useState, useEffect } from 'react';
import './App.css';
import CreateCapsuleForm from "./components/CreateCapsuleForm.jsx";
import CapsulesList from './components/CapsulesList';

function App() {
    const [capsules, setCapsules] = useState([]);

    const fetchCapsules = async () => {
        try {
            const response = await fetch('http://localhost:8080/capsules');
            if (response.ok) {
                const data = await response.json();
                setCapsules(data);
            } else {
                console.error('Failed to fetch capsules');
            }
        } catch (error) {
            console.error('Error fetching capsules:', error);
        }
    };

    useEffect(() => {
        fetchCapsules();
    }, []);

    const handleNewCapsule = () => {
        fetchCapsules();
    };

    return (
        <div className="App">
            <h1>Time Capsule 📬</h1>
            <CreateCapsuleForm onCapsuleCreated={handleNewCapsule} />
            <CapsulesList capsules={capsules} />
        </div>
    );
}

export default App;
