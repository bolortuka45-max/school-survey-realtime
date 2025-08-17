import React from "react";

const tests = [
  {
    name: "Голман сэтгэлийн хөдөлгөөний тест",
    images: [
      "https://source.unsplash.com/400x250/?emotion",
      "https://source.unsplash.com/400x250/?brain",
      "https://source.unsplash.com/400x250/?mind",
    ],
  },
  {
    name: "А.Беловын тест темперамент",
    images: [
      "https://source.unsplash.com/400x250/?personality",
      "https://source.unsplash.com/400x250/?psychology",
      "https://source.unsplash.com/400x250/?character",
    ],
  },
];

function SelectionPage() {
  const getRandomImage = (images) => {
    const index = Math.floor(Math.random() * images.length);
    return images[index];
  };

  const handleSelect = (testName) => {
    alert(`Та "${testName}" тестийг сонголоо!`);
    // Энд backend эсвэл дараагийн page рүү шилжүүлэх кодыг нэмнэ
  };

  return (
    <div
      style={{
        padding: "50px 20px",
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        flexWrap: "wrap",
        background: "linear-gradient(135deg, #f0f8ff 0%, #e6e6fa 100%)",
        minHeight: "100vh",
      }}
    >
      {tests.map((test) => (
        <div
          key={test.name}
          style={{
            width: "300px",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            cursor: "pointer",
            transition: "transform 0.3s",
            backgroundColor: "#fff",
          }}
          onClick={() => handleSelect(test.name)}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <img
            src={getRandomImage(test.images)}
            alt={test.name}
            style={{ width: "100%", height: "180px", objectFit: "cover" }}
          />
          <div style={{ padding: "20px", textAlign: "center" }}>
            <h2 style={{ fontSize: "18px", color: "#333" }}>{test.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SelectionPage;
