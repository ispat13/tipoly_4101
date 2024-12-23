import React from 'react';

function Home() {
    return (
        <div>
            <h2>ยินดีต้อนรับสู่สาขาเทคโนโลยี</h2>
            <p>
                ข้อมูลทั่วไปของสาขา: สาขาเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่ มุ่งเน้นพัฒนาความรู้และทักษะสำหรับโลกยุคใหม่
            </p>
            <p>ปรัชญาของสาขา: การสร้างความเชี่ยวชาญด้านเทคโนโลยี</p>
            <div>
                <h3>กิจกรรมที่เกี่ยวข้อง</h3>
                <div>
                    <img src="/images/activity1.jpg" alt="กิจกรรม 1" width="300" />
                    <img src="/images/activity2.jpg" alt="กิจกรรม 2" width="300" />
                </div>
            </div>
        </div>
    );
}

export default Home;
