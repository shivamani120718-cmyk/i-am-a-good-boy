import React, { useState } from 'react';

export default function App() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function fetchMessage() {
    setLoading(true);
    setMessage('');
    try {
      const res = await fetch('http://localhost:5000/api/message');
      if (!res.ok) throw new Error('Network response was not ok');
      const data = await res.json();
      setMessage(data.message || JSON.stringify(data));
    } catch (err) {
      setMessage('Error: ' + err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container">
      <h1>CI/CD Learning Project</h1>
      <button onClick={fetchMessage} disabled={loading}>
        {loading ? 'Fetching...' : 'Fetch Backend Message'}
      </button>
      <textarea
        readOnly
        value={message}
        placeholder="Backend response will appear here"
      />
    </div>
  );
}
