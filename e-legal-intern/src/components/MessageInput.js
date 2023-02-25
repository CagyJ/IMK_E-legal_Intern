import React from 'react';
import StyledButton from './Button';

const MessageInput = ({question, setQuestion, addQs}) => {

    return (
        <div className="msg-input gap-2">
            <input
                type="text" 
                placeholder="Type here" 
                className="input w-full max-w-xs h-50"
                value={question}
                onChange={v => {
                    setQuestion(v.target.value)
                }}
            />
            <StyledButton width={"150px"} className="btn gap-2 ml-5"
                onClick={() => {
                    addQs()
                    console.log(question+"Send")
                    setQuestion("")
                }}
            >
                Send
                <svg className="h-6 w-6" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M29 3L3 15l12 2.5M29 3L19 29l-4-11.5M29 3L15 17.5"></path> </g></svg>
            </StyledButton>
        </div>
    )
}

export default MessageInput