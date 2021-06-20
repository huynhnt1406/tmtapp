import React from 'react'
import {FieldTimeOutlined,CalendarOutlined,TeamOutlined ,QuestionOutlined,DollarCircleOutlined} from '@ant-design/icons'
import './QandA.css'
 function QandA() {
    return (
        <div className="qanda">
            <h1>Hỏi đáp thắc mắc</h1>
            <div className="qanda-types">
                <div className="questiontype1">
                    <div className="img-type">
                        <FieldTimeOutlined style={{color:'#34A84A', fontSize:'120px',position:'absolute',top:'-60px'}}  />
                    </div>
                    <div className="answer">
                        <h3><strong>Thời gian hoạt động thế nào?</strong></h3>
                        <br/>
                        <p>Thời gian. Thứ Tư hàng tuần, từ 14h đến 17h.
                        Địa điểm. Sailing Cafe.
                        Địa chỉ. 23 Ngõ 82 Chùa Láng, P. Láng Thượng, Q. Đống Đa, Hà Nội
                        Bản đồ. https://g.page/Sailing-Cafe
                        Địa điểm ở Sài Gòn sẽ do các trưởng nhóm ở Sài Gòn cập nhật sau.</p>
                    </div>
                </div>
                <div className="questiontype1">
                    <div className="img-type">
                        <CalendarOutlined style={{color:'#34A84A', fontSize:'120px',position:'absolute',top:'-60px'}}  />
                    </div>
                    <div className="answer">
                        <h3><strong>Thứ tư hàng tuần gặp nhau là để dạy nhau học à?</strong></h3>
                        <br/>
                        <p>Không, các bạn phải tham gia khóa học. Chúng ta sẽ dành thời gian để nghe những chia sẻ của nhau, hoặc cùng đưa ra một chủ đề, để anh em cùng hỏi đáp.</p>
                    </div>
                </div>
                <div className="questiontype1">
                    <div className="img-type">
                        <TeamOutlined style={{color:'#34A84A', fontSize:'120px',position:'absolute',top:'-60px'}}  />
                    </div>
                    <div className="answer">
                        <h3><strong>Ban quản trị LukaShip là những ai?</strong></h3>
                        <br/>
                        <p>Vũ Mạnh Thắng, Hà Nhất Anh</p>
                    </div>
                </div>
                <div className="questiontype1">
                    <div className="img-type">
                        <QuestionOutlined style={{color:'#34A84A', fontSize:'120px',position:'absolute',top:'-60px'}}  />
                    </div>
                    <div className="answer">
                        <h3><strong>LukaShip có cam kết mời người nổi tiếng, chuyên gia trong ngành tới chia sẻ hàng tuần không?</strong></h3>
                        <br/>
                        <p>Không. Các thành viên hoạt động thường xuyên, có mặt trong các lịch hẹn cố định.</p>
                    </div>
                </div>
                <div className="questiontype1">
                    <div className="img-type">
                        <QuestionOutlined  style={{color:'#34A84A', fontSize:'120px',position:'absolute',top:'-60px'}}  />
                    </div>
                    <div className="answer">
                        <h3><strong>Ngoài những lợi ích trên, LukaShip còn có lợi ích gì khác không?</strong></h3>
                        <br/>
                        <p>Nhóm hoạt động thường xuyên sẽ giúp anh chị tìm được đối tác phù hợp, tìm được nhân sự phù hợp cho các dự án kinh doanh của mình.</p>
                    </div>
                </div>
                <div className="questiontype1">
                    <div className="img-type">
                        <DollarCircleOutlined style={{color:'#34A84A', fontSize:'120px',position:'absolute',top:'-60px'}}  />
                    </div>
                    <div className="answer">
                        <h3><strong>Chi phí cho các hoạt động cafe, ăn uống thế nào?</strong></h3>
                        <br/>
                        <p>Chi phí đóng góp phí thành viên là để sử dụng cho các chi phí liên quan đến tổ chức, điều hành hoạt động của Team.
                        Chi phí đi cafe anh em tự trả, chi phí ăn uống anh em đóng góp 500k VNĐ mỗi lần, số tiền còn dư để làm quỹ ăn uống.</p>
                    </div>
                </div>
                <div className="questiontype1">
                    <div className="img-type">
                        <QuestionOutlined style={{color:'#34A84A', fontSize:'120px',position:'absolute',top:'-60px'}}  />
                    </div>
                    <div className="answer">
                        <h3><strong>Chi phí thành viên cố định là 1 triệu VNĐ 1 năm à?</strong></h3>
                        <br/>
                        <p>Không, trong trường hợp chương trình hỗ trợ tốt cho anh em, phí thành viên có thể thay đổi.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QandA
