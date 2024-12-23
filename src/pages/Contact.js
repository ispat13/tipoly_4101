import React from 'react';

function Contact() {
    return (
        <div>
            <h2>ติดต่อเรา</h2>
            <form>
                <label>
                    ชื่อ:
                    <input type="text" name="name" />
                </label>
                <label>
                    อีเมล:
                    <input type="email" name="email" />
                </label>
                <label>
                    ข้อความ:
                    <textarea name="message"></textarea>
                </label>
                <button type="submit">ส่ง</button>
            </form>
            <p>โทร: 012-345-6789</p>
            <p>Email: info@polytechnic.ac.th</p>
            <div>
                <h3>แผนที่</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509766!2d144.95373531550414!3d-37.8162797420218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577fd55f5e9e3a1!2sGoogle!5e0!3m2!1sen!2sth!4v1618033988749894"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Maps"
                ></iframe>
            </div>
        </div>
    );
}

export default Contact;
