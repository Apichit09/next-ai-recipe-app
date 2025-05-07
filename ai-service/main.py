# โหลดโมเดล FastAPI และเครื่องมือที่เกี่ยวข้อง
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

# โหลดเครื่องมือ AI และการจัดการข้อมูล
import json
import numpy as np
import tensorflow as tf
from sklearn.preprocessing import MultiLabelBinarizer, LabelEncoder
from tensorflow.keras.models import Sequential # type: ignore
from tensorflow.keras.layers import Dense # type: ignore
from tensorflow.keras.utils import to_categorical # type: ignore

# สร้าง FastAPI app และเปิด CORS ให้ frontend เรียกใช้ได้
app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])

# โหลดข้อมูลเมนูและวัตถุดิบจากไฟล์ JSON
with open("recipes.json", "r", encoding="utf-8") as f:
    data = json.load(f)

# แยกวัตถุดิบและชื่อเมนู
X_raw = [item["ingredients"] for item in data]
y_raw = [item["recipe"] for item in data]

# AI Step 1: แปลงข้อมูลวัตถุดิบเป็นเวกเตอร์แบบ one-hot
mlb = MultiLabelBinarizer()
X = mlb.fit_transform(X_raw)

# AI Step 2: แปลงชื่อเมนูเป็นตัวเลข และ one-hot สำหรับ train
label_encoder = LabelEncoder()
y_int = label_encoder.fit_transform(y_raw)
y = to_categorical(y_int)

# AI Step 3: สร้างและฝึก Neural Network สำหรับทำนายเมนูจากวัตถุดิบ
model = Sequential([
    Dense(64, activation='relu', input_shape=(X.shape[1],)),
    Dense(32, activation='relu'),
    Dense(y.shape[1], activation='softmax')  # softmax เพื่อเลือกเมนูที่น่าจะใช่มากที่สุด
])
model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])
model.fit(X, y, epochs=100, verbose=0)  # ฝึกโมเดลด้วยข้อมูลทั้งหมด

# คลาสรับ input วัตถุดิบจากผู้ใช้
class InputData(BaseModel):
    ingredients: list[str]

# AI Step 4: รับวัตถุดิบจากผู้ใช้, แปลง, ส่งเข้าโมเดล, และคืนเมนูที่น่าจะใช่ที่สุด
@app.post("/predict")
def predict(input_data: InputData):
    user_input = mlb.transform([input_data.ingredients])  # แปลง input ให้ตรงรูปแบบ
    prediction = model.predict(user_input)[0]  # ทำนายผล

    # หาผลลัพธ์เมนูที่มีโอกาสมากที่สุด 3 อันดับ
    top_k_indices = np.argsort(prediction)[::-1][:3]
    predicted_recipes = label_encoder.inverse_transform(top_k_indices)

    return {"menus": predicted_recipes.tolist()}  # ส่งผลลัพธ์กลับไปยัง client

# python -m uvicorn main:app --reload --port 8000