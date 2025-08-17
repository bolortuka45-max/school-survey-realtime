import React, { useState } from 'react';

function LoginPage() {
  const [code, setCode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('https://YOUR_BACKEND_URL/submit', {  // Backend URL-ээ оруулна
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, timestamp: Date.now() }),
    });
    alert('Амжилттай submit хийлээ!');
    setCode('');
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Сурагчийн код оруулах</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Сурагчийн код"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LoginPage;

