import React from 'react'
import {PhoneFilled,MessageOutlined} from '@ant-design/icons'
import './Contact.css'
function Contact() {
    return (
        <div className="app-contact">
            <button><PhoneFilled /></button>
            <button><MessageOutlined /></button>
        </div>
    )
}

export default Contact
