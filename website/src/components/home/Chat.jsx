import React from 'react'
import { useData } from '../../contexts/DataContext'

function Chat() {
    const {data} = useData()
    const chat = data.chat
  return (
    <>
    <div className="chat-sec-main">
            <div className="container">
                <div className="column-row">
                    <div className="column-left">
                        <h2>{chat.title}</h2>
                        <p>{chat.description}</p>
                        <a href="#" className="default-btn">{chat.buttonText}</a>
                    </div>
                    <div className="column-right">
                        <div className="wrap-image-chat">
                            
                            <img className="desk-img" src={chat.images.desktop} alt="img" />
                            <img className="mobile-img" src={chat.images.mobile} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Chat