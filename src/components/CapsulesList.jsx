import React from 'react';

function CapsulesList({ capsules, onCapsuleDeleted }) {
    const handleDelete = async (id) => {
        try {
            const response = await fetch(`https://nfac-backend.onrender.com/capsules/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                onCapsuleDeleted(); // обновляем список после удаления
            } else {
                console.error('Failed to delete capsule');
                alert('Failed to delete capsule');
            }
        } catch (error) {
            console.error('Error deleting capsule:', error);
            alert('Error deleting capsule');
        }
    };

    return (
        <div>
            {capsules.length === 0 ? (
                <p>No capsules found.</p>
            ) : (
                <ul>
                    {capsules.map((capsule) => (
                        <li key={capsule.id}>
                            <strong>{capsule.subject}</strong> - {capsule.email}
                            <button onClick={() => handleDelete(capsule.id)} style={{ marginLeft: '10px' }}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CapsulesList;
