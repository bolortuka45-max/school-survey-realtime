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

    await fetch("https://YOUR_BACKEND_URL/submit", {
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
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "50px 40px",
          borderRadius: "20px",
          boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
          textAlign: "center",
          width: "100%",
          maxWidth: "400px",
          transition: "transform 0.3s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <h1 style={{ marginBottom: "30px", color: "#333" }}>Сурагчийн нэвтрэх хэсэг</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Сурагчийн кодоо оруулна уу"
            style={{
              padding: "15px",
              fontSize: "16px",
              width: "100%",
              marginBottom: "25px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              outline: "none",
              transition: "border-color 0.3s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#4CAF50")}
            onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "15px",
              fontSize: "16px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#45a049")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#4CAF50")}
          >
            Нэвтрэх
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
