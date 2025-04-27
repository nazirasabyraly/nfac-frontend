import { useState } from 'react';

function CreateCapsuleForm({ onCapsuleCreated }) {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [sendAt, setSendAt] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const capsuleData = {
            email,
            subject,
            message,
            attachment_url: "",
            send_at: new Date(sendAt).toISOString()
        };

        try {
            const response = await fetch('https://nfac-backend.onrender.com/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(capsuleData),
            });

            if (response.ok) {
                const newCapsule = await response.json();
                alert('Capsule created successfully!');
                onCapsuleCreated(newCapsule);
                // Сброс полей
                setEmail('');
                setSubject('');
                setMessage('');
                setSendAt('');
            } else {
                alert('Failed to create capsule');
            }
        } catch (error) {
            console.error('Error creating capsule:', error);
            alert('An error occurred');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create New Capsule</h2>
            <div>
                <label>Email:</label><br />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Subject:</label><br />
                <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Message:</label><br />
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Send At (UTC):</label><br />
                <input
                    type="datetime-local"
                    value={sendAt}
                    onChange={(e) => setSendAt(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Create Capsule</button>
        </form>
    );
}

export default CreateCapsuleForm;
