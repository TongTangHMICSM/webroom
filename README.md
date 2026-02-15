# Classroom Availability System

ระบบตรวจสอบห้องว่างสำหรับ Cloudflare Pages

## การติดตั้ง

1. ติดตั้ง Node.js และ npm
2. ติดตั้ง Wrangler:
```bash
npm install
```

## การพัฒนาในเครื่อง

```bash
npm run dev
```

เปิดเว็บได้ที่: http://localhost:8788

## การ Deploy ไปยัง Cloudflare Pages

### วิธีที่ 1: ใช้ Wrangler CLI

```bash
npm run deploy
```

### วิธีที่ 2: ใช้ Cloudflare Dashboard

1. เข้า Cloudflare Dashboard
2. ไปที่ Pages
3. สร้าง New Project
4. เลือก "Upload assets"
5. อัปโหลดไฟล์ใน folder `public/`

## โครงสร้างไฟล์

```
.
├── public/
│   ├── index.html       # หน้าเว็บหลัก
│   └── class_data.txt   # ข้อมูลตารางเรียน
├── package.json
├── wrangler.toml        # Cloudflare Workers configuration
└── README.md
```

## Features

- ✅ Dark Mode / Light Mode
- ✅ ตรวจสอบห้องว่างแบบเรียลไทม์
- ✅ ตารางห้องแยกตามอาคารและชั้น
- ✅ เลือกดูตารางตามวัน
- ✅ แสดงสถานะวันหยุดและเลิกเรียน
