import React from 'react'
import './Intro.css'
function Intro() {
    return (
        <div className="intro">
            <div className="intro-left">
                <div className="intro-brand">
                    <img alt="brand-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR1GOyVVNrBLh9WVQ1uB6u0OtE4r0PZfUPSqIOUJigSTPnf8q3UgOZnZjQ_6W2j0rTRnM&usqp=CAU"/>
                    <h1><strong>LukaShip</strong></h1>
                    <h3>Chương trình Luka Membership</h3>
                </div>
            </div>
            <div className="intro-right">
                <h4>Là chương trình có phí, kết nối 300 anh em đang bán hàng online, thường xuyên hoạt động, với mục tiêu hỗ trợ nhau phát triển.</h4>
            </div>
        </div>
    )
}

export default Intro
