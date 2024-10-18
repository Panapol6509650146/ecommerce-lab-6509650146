# CS360 ecommerce-lab

## ขั้นตอนการติดตั้งและ test

ระบบปฏิบัติการที่ใช้ : Window

1.ดาวน์โหลด npm และ nodejs ได้ที่ https://nodejs.org/en/download/prebuilt-installer

หลังจากดาวน์โหลดสามารถตรวจสอบเวอร์ชั่นเพื่อให้มั่นใจว่า package ถูกติดตั้งไว้แล้ว
```
node -v #ตรวจสอบเวอร์ชั่น Node.js
npm -v #ตรวจสอบเวอร์ชั่น Node Package Manager
```

2.ติดตั้ง dependencies สำหรับติดตั้ง 
```
npm install
```
ตรวจสอบเวอร์ชั่นเพื่อให้มั่นใจว่า package Yarn ถูกติดตั้งไว้แล้ว
```
jest -v #ตรวจสอบเวอร์ชั่น jest
supertest -v #ตรวจสอบเวอร์ชั่น supertest
```
3.run test
```
npm test
```
