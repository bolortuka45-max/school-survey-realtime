import React, { useState } from "react";

const students = [
  { name: "Х.Амарбаясгалан", code: "1011" },
  { name: "Т.Бархасбаяр", code: "2319" },
  { name: "Г.Мичидмаа", code: "2205" },
  { name: "Э.Эрдэнэтунгалаг", code: "1228" },
  { name: "Э.Билгүүнбаяр", code: "2818" },
  { name: "Б.Энхзаяа", code: "3005" },
  { name: "Б.Эрхэс", code: "1043" },
  { name: "Б.Цэлмэг", code: "0618" },
  { name: "Г.Тэмүүлэн", code: "0315" },
  { name: "С.Халиунаа", code: "2225" },
  { name: "Т.Даваабаатар", code: "1117" },
  { name: "А.Энхзул", code: "0421" },
  { name: "Ө.Хүслэнбаяр", code: "0376" },
  { name: "Х.Бадар-Ууган", code: "0816" },
  { name: "Н.Нандин-Эрдэнэ", code: "2106" },
  { name: "Б.Батцэцэг", code: "0147" },
];

function LoginPage() {
  const [code, setCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const student = students.find((s) => s.code === code);
    if (!student) {
      alert("❌ Буруу код байна!");
      return;
    }

    // Backend URL-г өөрийн Vercel backend URL-ээр солино
    await fetch("https://YOUR_VERCEL_BACKEND_URL/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: student.name,
        code: student.code,
        timestamp: Date.now(),
      }),
    });

    alert(`✅ Сайн байна уу, ${student.name}! Амжилттай нэвтэрлээ.`);
    setCode("");
  };

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>Сурагчийн нэвтрэх хэсэг</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Сурагчийн кодоо оруулна уу"
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <button
          type="submit"
          style={{
            marginLeft: "10px",
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Нэвтрэх
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
