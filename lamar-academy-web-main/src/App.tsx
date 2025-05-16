import React from "react";

function App() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      background: "#f5f5f5",
      fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
      textAlign: "center"
    }}>
      <div style={{
        background: "#fff",
        padding: "2rem",
        borderRadius: "10px",
        boxShadow: "0 0 20px rgba(0,0,0,0.1)",
        maxWidth: 600,
        margin: 20
      }}>
        <div style={{ fontSize: "4rem", color: "#e74c3c", marginBottom: "1rem" }}>⚠️</div>
        <h1 style={{ color: "#2c3e50", marginBottom: "1rem" }}>الموقع غير متاح حالياً</h1>
        <p style={{ color: "#7f8c8d", lineHeight: 1.6, marginBottom: "1.5rem" }}>نعتذر، الموقع متوقف مؤقتاً للصيانة.</p>
        <p style={{ color: "#7f8c8d", lineHeight: 1.6, marginBottom: "1.5rem" }}>سيتم إعادة تشغيله قريباً.</p>
      </div>
    </div>
  );
}

export default App;
