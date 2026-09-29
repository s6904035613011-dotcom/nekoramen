import Link from "next/link";

const linkStyle = {
  display: "inline-block",
  padding: "12px 24px",
  borderRadius: 8,
  background: "#c8452d",
  color: "#fff",
  textDecoration: "none",
  fontWeight: 600,
};

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 24,
        padding: 24,
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", margin: 0 }}>เนโกะราเมน</h1>
      <p style={{ margin: 0 }}>ระบบสั่งอาหารร้านบุฟเฟต์ (หน้าทดสอบการ deploy)</p>
      <nav style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
        <Link href="/generate-qr" style={linkStyle}>
          สร้าง QR Code
        </Link>
        <Link href="/kitchen" style={linkStyle}>
          หน้าครัว
        </Link>
      </nav>
    </main>
  );
}
