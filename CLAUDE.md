# เนโกะราเมน — ระบบสั่งอาหารร้านบุฟเฟต์

## Stack
- Next.js (App Router) — **JavaScript เท่านั้น ไม่ใช้ TypeScript**
- Supabase (`@supabase/supabase-js`) — client อยู่ที่ `lib/supabaseClient.js`
- Deploy บน Vercel

## Environment variables
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

ตอนพัฒนาใส่ใน `.env.local` (ห้าม commit) / บน Vercel ใส่ที่ Project Settings > Environment Variables

## กฎสำคัญ: Next.js เวอร์ชันล่าสุด — `params` ของ Dynamic Route เป็น Promise
โปรเจกต์นี้ใช้ Next.js เวอร์ชันล่าสุด `params` ใน Dynamic Route (เช่น `app/order/[sessionId]/page.js`) เป็น **Promise** ต้อง unwrap เสมอ:

- **Client Component** (`"use client"`) → unwrap ด้วย `use()` จาก React:

  ```js
  "use client";
  import { use } from "react";

  export default function OrderPage({ params }) {
    const { sessionId } = use(params);
    // ...
  }
  ```

- ห้ามเข้าถึง `params.sessionId` ตรง ๆ
- ถ้าเป็น Server Component (ไม่มี `"use client"`) ใช้ `async` + `await params` แทน (`use()` ใช้ได้เฉพาะที่ React รองรับ แต่รูปแบบมาตรฐานของ server คือ await)

## โครงสร้างฐานข้อมูล (มีอยู่แล้วใน Supabase — ไม่ต้องสร้างใหม่)

### sessions
| column | หมายเหตุ |
|---|---|
| id | |
| table_number | หมายเลขโต๊ะ |
| adult_count | จำนวนผู้ใหญ่ |
| child_count | จำนวนเด็ก |
| status | สถานะ session |
| created_at | |

### menu_categories
| column | หมายเหตุ |
|---|---|
| id | |
| name | ชื่อหมวด |
| sort_order | ลำดับแสดงผล |

### menu_items
| column | หมายเหตุ |
|---|---|
| id | |
| category_id | อ้างถึง menu_categories.id |
| name | ชื่อเมนู |

### orders
| column | หมายเหตุ |
|---|---|
| id | |
| session_id | อ้างถึง sessions.id |
| table_number | |
| items | jsonb — รายการอาหารที่สั่ง |
| status | สถานะออเดอร์ |
| created_at | |

## หน้าที่วางแผนไว้
- `/` — หน้าแรก (ทดสอบ deploy)
- `/generate-qr` — สร้าง QR Code ต่อโต๊ะ
- `/kitchen` — หน้าครัวดูออเดอร์
- หน้าสั่งอาหาร (Dynamic Route) — ขั้นตอนถัดไป
