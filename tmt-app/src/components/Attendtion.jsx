import React from 'react'
import './Attendtion.css'
function Attendtion() {
    return (
        <div className="attendtion">
            <div className="attend-left">
                <h3>LuKaShip</h3>
            </div>
            <div className="attend-right">
                <div className="attend-how">
                    <h3>Cách thức đăng ký tham dự.</h3>
                    <div className="child">
                        <p><i class="fa fa-flag"></i> Chuyển tiền vào số tài khoản của Chương Trình.</p>
                        <span>Số tài khoản: 11001011944242</span>
                        <span>Chủ tài khoản: VŨ MẠNH THẮNG</span>
                        <span>Ngân hàng: MSB - Chi nhánh Bà Triệu Hà Nội</span>
                        <span>Số tiền: 1000000 vnđ – tức 1.000.000 vnđ</span>
                        <span>Nội dung: lukaship + họ và tên + số điện thoại</span>
                    </div>
                    <div className="child">
                        <p><i class="fa fa-flag"></i> Sau khi chuyển khoản, liên hệ Zalo hỗ trợ 0933240690</p>
                    </div>
                    <div className="child">
                        <p><i class="fa fa-flag"></i> Nhắn tin Zalo Vũ Mạnh Thắng. 0933240690 để gửi ảnh chuyển khoản thành công và được mời vào nhóm Zalo, Facebook</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Attendtion
