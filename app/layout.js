export const metadata = {
  title: "เนโกะราเมน",
  description: "ระบบสั่งอาหารร้านบุฟเฟต์เนโกะราเมน",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, 'Noto Sans Thai', sans-serif",
          background: "#fffaf3",
          color: "#2b2118",
        }}
      >
        {children}
      </body>
    </html>
  );
}
