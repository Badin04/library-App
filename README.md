# Library Management System (ระบบจัดการห้องสมุด)

เว็บแอปพลิเคชันสำหรับบริหารจัดการระบบห้องสมุด พัฒนาขึ้นด้วยสถาปัตยกรรม **MVC (Model-View-Controller)** เพื่อความเป็นระเบียบและง่ายต่อการบำรุงรักษาโค้ด เหมาะสำหรับการนำไปเป็นระบบจำลองเพื่อบริหารจัดการข้อมูลหนังสือ สมาชิก และระบบยืม-คืน

**Live Demo:** [ https://library-app-yho4.onrender.com]

##  Features (ฟีเจอร์เด่นของระบบ)
* **Book Management:** ระบบเพิ่ม ลบ แก้ไข และดูรายชื่อหนังสือทั้งหมดในคลัง
* **Member Management:** ระบบจัดการข้อมูลสมาชิกห้องสมุด (สมัครสมาชิก/แก้ไขข้อมูล)
* **Borrow & Return System:** ระบบบันทึกการยืม-คืนหนังสือ พร้อมเชื่อมโยงข้อมูลระหว่างสมาชิกและหนังสือ

## Tech Stack & Architecture
* **Frontend:** HTML5, CSS3, EJS (Embedded JavaScript templates), Tailwind CSS
* **Backend:** Node.js, Express.js
* **Database:** SQLite (`sqlite3`)
* **Architecture:** Model-View-Controller (MVC) Pattern

---

## 📂 Project Structure (โครงสร้างไฟล์ในโปรเจกต์)
```text
├── controllers/      # ควบคุมการทำงานและรับส่งข้อมูลระหว่าง Model และ View
├── models/           # จัดการฐานข้อมูลและการเขียนคำสั่ง SQL (SQLite)
├── routes/           # จัดการเส้นทาง URL (Routing) ของระบบ
├── views/            # ส่วนแสดงผลหน้าเว็บ (EJS)
├── public/           # ไฟล์ Static เช่น CSS, Images, JavaScript หน้าบ้าน
├── library.db        # ไฟล์ฐานข้อมูล SQLite
├── app.js            # ไฟล์หลักสำหรับ Start เซิร์ฟเวอร์
└── package.json      # ไฟล์บันทึก Dependencies และ Scripts
