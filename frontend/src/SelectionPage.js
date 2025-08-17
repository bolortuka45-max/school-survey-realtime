import React from "react";

const tests = [
  "Голман сэтгэлийн хөдөлгөөний тест",
  "А.Беловын тест темперамент"
];

function SelectionPage() {
  return (
    <div style={{
      display: "flex", justifyContent: "center", alignItems: "center",
      height: "100vh", backgroundColor: "#f0f4f8", fontFamily: "sans-serif"
    }}>
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: "20px", padding: "40px", borderRadius: "10px",
        backgroundColor: "white", boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
      }}>
        {tests.map((test, idx) => (
          <div key={idx} style={{
            padding: "20px", borderRadius: "10px",
            backgroundColor: "#e0f7fa", textAlign: "center",
            cursor: "pointer", fontWeight: "bold", fontSize: "18px"
          }}>
            {test}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectionPage;
