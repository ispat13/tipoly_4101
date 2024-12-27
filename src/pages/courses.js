import React from 'react';
import './Courses.css'; // ใช้ไฟล์ CSS สำหรับการจัดแต่ง

function Courses() {
    return (
        <div className="courses-container">
            <h2 className="courses-title">หลักสูตรของเรา</h2>
            <ul className="courses-list">
                <li className="courses-item">
                    <strong>ปวช.:</strong> การเรียนรู้พื้นฐานเทคโนโลยี
                </li>
                <li className="courses-item">
                    <strong>ปวส.:</strong> การพัฒนาความเชี่ยวชาญด้านเทคโนโลยีขั้นสูง
                </li>
            </ul>
            <p className="courses-description">
                นักศึกษาจะได้รับความรู้และทักษะพร้อมสำหรับการทำงาน
            </p>
        </div>
    );
}

export default Courses;
