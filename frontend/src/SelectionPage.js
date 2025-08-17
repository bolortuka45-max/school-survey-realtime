import React from "react";

const tests = [
  { name: "Голман сэтгэлийн хөдөлгөөний тест", image: "https://picsum.photos/200?random=1" },
  { name: "А.Беловын тест темперамент", image: "https://picsum.photos/200?random=2" },
];

function SelectionPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
        fontFamily: "Arial, sans-serif",
        gap: "30px",
      }}
    >
      {tests.map((test, index) => (
        <div
          key={index}
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            textAlign: "center",
            width: "220px",
            cursor: "pointer",
            transition: "transform 0.2s",
          }}
          onClick={() => alert(`Та ${test.name}-г сонголоо!`)}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <img
            src={test.image}
            alt={test.name}
            style={{ width: "100%", borderRadius: "10px", marginBottom: "15px" }}
          />
          <h3 style={{ color: "#333" }}>{test.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default SelectionPage;
