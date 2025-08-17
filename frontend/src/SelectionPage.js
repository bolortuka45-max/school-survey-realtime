import React from "react";

const tests = [
  { name: "Голман сэтгэлийн хөдөлгөөний тест", color: "#FFCDD2" },
  { name: "А.Беловын тест темперамент", color: "#C8E6C9" },
];

function SelectionPage() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Тест сонгох</h1>
      <div className="selection-container">
        {tests.map((test, index) => (
          <div
            key={index}
            className="selection-box"
            style={{ backgroundColor: test.color }}
            onClick={() => alert(`${test.name} тестийг сонголоо!`)}
          >
            {test.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectionPage;
