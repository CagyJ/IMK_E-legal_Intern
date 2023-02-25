import React from "react";
import MessageInput from "../components/MessageInput";
import ChatContent from "../components/ChatContent";
import styled from "styled-components";

const ChatBox = () => {
    const [qs, setQs] = React.useState("");
    const [warning, setWarning] = React.useState(false)
    const [chatContent, setChatContent] = React.useState(() => [
        "Hi, there!",
        "Hello, whatsup!",
        "Good, whatsup!",
    ])

    const getAns = qs => {
        console.log(qs)
        return "Good question, don't know yet!"
    }

    const addQs = () => {
        const newChatContent = [...chatContent, qs]
        setChatContent(newChatContent)
        setTimeout(() => {
            const ans = getAns(qs)
            setChatContent([...newChatContent, ans])
            setWarning(false)
        }, 5000)
    }

    return (
        <Wrapper className="flex flex-col w-screen h-screen text-center">
            <div className="w-screen h-1/6">Header</div>
            <div className="w-screen h-4/6 px-6">
            <ChatContent content={chatContent} />
            </div>
            <MessageInput  
                className="w-screen h-1/6" 
                question={qs} 
                setQuestion={setQs} 
                addQs={addQs} 
                chatContent={chatContent} 
                setWarning={setWarning} 
            />

            {warning && (
                <div className="alert alert-warning shadow-lg mt-5">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Be patient please, you did not get the answer of your last question!</span>
                    </div>
                </div>
            )}
        </Wrapper>
    )
}

const Wrapper = styled.div`
  background-color: white;
`;

export default ChatBox