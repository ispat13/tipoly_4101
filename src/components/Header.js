import React from 'react';
import './Header.css'; // Assuming a CSS file for styles

function Header() {
    return (
        <header className="app-header">
            <h1 className="header-title">สถาบันเทคโนโลยีโปลิเทคนิคลานนา</h1>
            <nav className="main-nav" aria-label="Main Navigation">
                <a href="/" className="nav-link">หน้าหลัก</a>
                <a href="/about" className="nav-link">เกี่ยวกับเรา</a>
                <a href="/courses" className="nav-link">หลักสูตร</a>
                <a href="/contact" className="nav-link">ติดต่อเรา</a>
            </nav>
        </header>
    );
}

export default Header;
