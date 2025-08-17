import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const student = students.find((s) => s.code === code);

    if (!student) {
      alert("❌ Буруу код байна!");
      return;
    }

    alert(`✅ Сайн байна уу, ${student.name}! Амжилттай нэвтэрлээ.`);
    setCode("");
    navigate("/selection");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #fceabb, #f8b500)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          textAlign: "center",
          minWidth: "300px",
        }}
      >
        <h1 style={{ marginBottom: "20px", color: "#333" }}>Сурагчийн нэвтрэх хэсэг</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Сурагчийн кодоо оруулна уу"
            style={{
              padding: "10px",
              fontSize: "16px",
              width: "100%",
              marginBottom: "15px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Нэвтрэх
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
