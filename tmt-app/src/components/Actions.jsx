import React from 'react'
import './Actions.css'
import {CalendarOutlined,WechatOutlined,StockOutlined} from '@ant-design/icons'
function Actions() {
    return (
        <div className="actions">
            <h1>Các hoạt động của LukaShip</h1>
            <div className="action-type">
                    <div className="type1">
                        <div>
                            <CalendarOutlined style={{fontSize:'150px',color:'darkgreen'}}/>
                        </div>
                        <h1>1</h1>
                        <p>Kết nối Thứ Tư hàng tuần với những người có kinh nghiệm về chạy quảng cáo, bán hàng online. Bạn sẽ mở rộng mối quan hệ, giải quyết nhanh các vấn đề kinh doanh thông qua trao đổi, chia sẻ, tư vấn của người có kinh nghiệm.</p>
                    </div>
                    <div className="type-part">
                        <div className="type2">
                            <div>
                            <WechatOutlined style={{fontSize:'150px',color:'darkgreen'}}/>
                            </div>
                            <h1>2</h1>
                            <p>Tham gia vào nhóm Facebook và Zalo kín để thảo luận.</p>
                        </div>
                        <div className="type3">
                            <div>
                            <StockOutlined style={{fontSize:'150px',color:'darkgreen'}}/>
                            </div>
                            <h1>3</h1>
                            <p>Truy cập kho nội dung thông tin kiến thức hữu ích được hệ thống dễ hiểu về quảng cáo Facebook, quảng cáo TikTok và kinh doanh bán hàng online.</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Actions
