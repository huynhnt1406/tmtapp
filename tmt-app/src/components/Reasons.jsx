import React from 'react'
import './Reasons.css'
import {Carousel} from 'react-bootstrap'
import {Avatar} from 'antd'
import {AimOutlined,UserOutlined} from '@ant-design/icons'
function Reasons() {
    return (
        <div className="reasons">
            <h1>Vì sao bạn nên tham gia</h1>
            <Carousel>
                <Carousel.Item interval={4000} style={{height: '400px' , width:'100%' ,backgroundColor:'green'}}>
                    <Avatar size={200} icon={<AimOutlined />} style={{color:'#34A84A'}} />
                    <Carousel.Caption>
                    <p>Vì đơn giản, buôn có bạn, bán có phường. Làm kinh doanh là đối mặt với rất nhiều vấn đề và đôi khi, vấn đề đó có thể giải quyết chỉ qua 1 cuộc nói chuyện. Bên cạnh đó, để bạn chạy quảng cáo hay làm kinh doanh, bạn luôn cần cập nhật thông tin kiến thức mới. Mà những cái này, để mà nói là tìm miễn phí trên mạng thì rất thiếu tính hệ thống. Ngồi mò không biết bao giờ mới xong.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000} style={{height: '400px' , width:'100%' ,backgroundColor:'green'}}>
                    <Avatar size={200} icon={<UserOutlined />} style={{color:'#34A84A'}} />
                    <Carousel.Caption>
                    <p>Mình là Thắng quản lý dự án của LUKA TEAM. Mình cũng đi làm riêng ở ngoài hơn 10 năm và cũng đã làm nhiều dự án được có mất có. Và nhìn toàn bộ quá trình làm việc thì mình thấy sự cởi mở, tính kết nối khi làm kinh doanh là cực kỳ quan trọng. Có những thời điểm khó khăn, nếu bạn vượt qua và tồn tại thị thì bạn đã rất ấm rồi. Nhưng chỉ vì thiếu kết nối, không có nơi để chia sẻ và nghe lời khuyên nên mình bỏ cuộc. </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Reasons
