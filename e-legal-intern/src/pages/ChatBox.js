import React from 'react';
import MessageInput from '../components/MessageInput';
import ChatContent from '../components/ChatContent';

const ChatBox = () => {

    const [qs, setQs] = React.useState("")

    return (
        <div className="flex flex-col w-screen h-screen text-center">
            <div className="w-screen h-1/6">Header</div>
            <div className="w-screen h-4/6 px-6">
                <ChatContent />
            </div>
            
            <MessageInput  className="w-screen h-1/6" question={qs} setQuestion={setQs} />
        </div>
    )
}

export default ChatBox