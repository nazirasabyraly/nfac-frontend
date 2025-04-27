function CapsulesList( {capsules} ) {
    if (!capsules || capsules.length === 0) {
        return <p>No capsules found.</p>;
    }
    return (
        <div>
            <h2>All Capsules</h2>
            <table border="1" cellPadding="5" style={{ margin: "0 auto" }}>
                <thead>
                <tr>
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Send At</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {capsules.map((capsule) => (
                    <tr key={capsule.id}>
                        <td>{capsule.email}</td>
                        <td>{capsule.subject}</td>
                        <td>{new Date(capsule.send_at).toLocaleString()}</td>
                        <td>{capsule.sent ? "Sent" : "Pending"}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default CapsulesList;
