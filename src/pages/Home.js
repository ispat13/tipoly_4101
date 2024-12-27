import React from 'react';
import './Home.css'; // ใช้ไฟล์ CSS สำหรับการจัดแต่ง

function Home() {
    return (
        <div className="home-container">
            <h2 className="home-title">ยินดีต้อนรับสู่สาขาเทคโนโลยี</h2>
            <p className="home-description">
                ข้อมูลทั่วไปของสาขา: สาขาเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่ มุ่งเน้นพัฒนาความรู้และทักษะสำหรับโลกยุคใหม่
            </p>
            <p className="home-philosophy">
                ปรัชญาของสาขา: การสร้างความเชี่ยวชาญด้านเทคโนโลยี
            </p>
            <div className="home-activities">
                <h3 className="activities-title">กิจกรรมที่เกี่ยวข้อง</h3>
                <div className="activities-images">
                    <img src="/images/activity1.jpg" alt="กิจกรรม 1" className="activity-image" />
                    <img src="/images/activity2.jpg" alt="กิจกรรม 2" className="activity-image" />
                </div>
            </div>
        </div>
    );
}

export default Home;
