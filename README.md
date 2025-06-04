# AI Recipe App

โปรเจกต์นี้แบ่งเป็นสองส่วนหลัก  
1. 🔥 Frontend (Next.js) – โค้ดทั้งหมดอยู่ในโฟลเดอร์ `src`  
2. 🤖 AI Service (FastAPI) – อยู่ในโฟลเดอร์ `ai-service`

---

## 🚀 Features

- ค้นหาเมนูอาหารจากวัตถุดิบที่มี  
- แนะนำเมนูแบบ Real-time โดยใช้ AI model  
- จัดการข้อมูลวัตถุดิบ & เมนู (CRUD) ผ่านหน้า Manage  
- รองรับการอัปโหลดรูปภาพเมนูและวัตถุดิบ  

---

## 📂 Folder Structure

```
next-ai-recipe-app/
├─ src/                 # Next.js frontend & API routes
│  ├─ app/
│  ├─ components/
│  └─ ...
├─ ai-service/          # FastAPI AI prediction service
│  ├─ main.py
│  └─ recipes.json
└─ README.md            # (you are here)
```

---

## ⚙️ Setup & Run

### 1. Frontend (Next.js)

```bash
cd src
npm install
npm run dev
# เปิด http://localhost:3000
```

### 2. AI Service (FastAPI)

```bash
cd ai-service
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
# AI endpoint: POST http://localhost:8000/predict
```
