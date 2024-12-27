import React from 'react';
import './Navbar.css'; // เชื่อมต่อกับไฟล์ CSS สำหรับการจัดแต่ง

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <a href="/" className="navbar-logo">โปลิเทคนิคลานนา</a>
            </div>
            <ul className="navbar-links">
                <li><a href="/" className="navbar-link">หน้าหลัก</a></li>
                <li><a href="/about" className="navbar-link">เกี่ยวกับเรา</a></li>
                <li><a href="/courses" className="navbar-link">หลักสูตร</a></li>
                <li><a href="/contact" className="navbar-link">ติดต่อเรา</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
