// ส่วนบนสุดที่กดไปที่ต่างๆได้ สีเขียวในRef
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <a href="http://www.google.com"
            class="font-serif bg-yellow-500 text-red-500 text-xs">
                The Dojo Blog
            </a>
            <div className="links">
                <a href="/">ค่ายนี้คืออะไร</a>
                <a href="/">กำหนดการ</a>
                <a href="/">ภาพกิจกรรม</a>
                <a href="/">สถานที่</a>
                <a href="/">FAQ</a>
            </div>
            <div className="links">
                <a href="/" style={{
                    color: "white",
                    backgroundColor: "green",
                    borderRadius: "20px"
                }}>เข้าสู่ระบบ</a>
            </div>
        </nav>
     );
}
 
export default Navbar;