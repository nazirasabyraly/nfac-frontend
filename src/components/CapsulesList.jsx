import React from 'react';

function CapsulesList({ capsules, onDelete }) {
    return (
        <div style={{ marginTop: '20px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                <tr>
                    <th style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>Subject</th>
                    <th style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>Email</th>
                    <th style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>Action</th>
                </tr>
                </thead>
                <tbody>
                {capsules.map(capsule => (
                    <tr key={capsule.id}>
                        <td style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold' }}>
                            {capsule.subject}
                        </td>
                        <td style={{ padding: '10px', textAlign: 'center' }}>
                            {capsule.email}
                        </td>
                        <td style={{ padding: '10px', textAlign: 'center' }}>
                            <button
                                onClick={() => onDelete(capsule.id)}
                                style={{
                                    backgroundColor: '#28a745',
                                    color: 'white',
                                    border: 'none',
                                    padding: '8px 16px',
                                    borderRadius: '6px',
                                    cursor: 'pointer',
                                    fontWeight: 'bold'
                                }}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default CapsulesList;
