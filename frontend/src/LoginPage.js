import React, { useState } from 'react';

function LoginPage() {
  const [code, setCode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1️⃣ Vercel backend API руу POST request
      const response = await fetch('https://school-survey-realtime.vercel.app
', { // энд API URL-г оруулна
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, timestamp: Date.now() }),
      });

      const result = await response.json();

      // 2️⃣ Амжилттай submit болсны дараа мэдэгдэл
      if (result.success) {
        alert('Амжилттай submit хийлээ!');
      } else {
        alert('Алдаа гарлаа: ' + result.error);
      }

      // 3️⃣ Input-г хоослох
      setCode('');
    } catch (err) {
      console.error(err);
      alert('Алдаа гарлаа, дахин оролдоно уу!');
    }
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
