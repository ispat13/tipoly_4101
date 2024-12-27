import React from 'react';
import './About.css'; // ใช้ไฟล์ CSS สำหรับการตกแต่ง

function About() {
    return (
        <div className="about-container">
            <h2 className="about-title">เกี่ยวกับเรา</h2>
            <p className="about-description">
                วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่ มุ่งเน้นพัฒนานักศึกษาให้มีความรู้และทักษะในการใช้เทคโนโลยีสมัยใหม่
            </p>
            <p className="about-goal">
                <strong>เป้าหมาย:</strong> เป็นสถาบันการศึกษาชั้นนำด้านเทคโนโลยี
            </p>
            <p className="about-vision">
                <strong>วิสัยทัศน์:</strong> การสร้างคนรุ่นใหม่ที่พร้อมสำหรับโลกแห่งอนาคต
            </p>
        </div>
    );
}

export default About;
