import React from "react";
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
    MainContainer, ChatContainer, MessageList, Message,
    InfoButton, MessageInput, Avatar, ConversationHeader
    , VoiceCallButton, VideoCallButton,
} from '@chatscope/chat-ui-kit-react';
import { useState, useRef } from "react";

export default function Chatscope() {
    const inputRef = useRef();
    const [msgInputValue, setMsgInputValue] = useState("");
    const [messages, setMessages] = useState([]);

    const handleSend = message => {
        setMessages([...messages, {
            message,
            direction: 'outgoing'
        }]);
        setMsgInputValue("");
        inputRef.current.focus();
    };
    return (<div style={{
        height: "800px",
        width: "500px",
        position: "relative"
    }}>
        <MainContainer responsive>
            <ChatContainer>
                <ConversationHeader>
                    <ConversationHeader.Back />
                    <Avatar src={require("features/common/images/me.png").default} name="Jarviis" />
                    <ConversationHeader.Content userName="Jarviis" />
                    <ConversationHeader.Actions>
                        <VoiceCallButton />
                        <VideoCallButton />
                        <InfoButton />
                    </ConversationHeader.Actions>
                </ConversationHeader>
                <MessageList>

                    <Message model={{
                        message: "Hello my friend",
                        sentTime: "15 mins ago",
                        sender: "Emily",
                        direction: "incoming",
                        position: "single"
                    }}>
                        <Avatar src={require("features/common/images/me.png").default} name={"Emily"} />
                    </Message>
                    {messages.map((m, i) => <Message key={i} model={m} />)}
                </MessageList>
                <div as={MessageInput} style={{
                    display: "flex",
                    flexDirection: "row",
                    borderTop: "1px dashed #d1dbe4"
                }}>
                    <MessageInput ref={inputRef} onChange={msg => setMsgInputValue(msg)} value={msgInputValue} sendButton={false} attachButton={false} onSend={handleSend} style={{
                        flexGrow: 1,
                        borderTop: 0,
                        flexShrink: "initial"
                    }} />
                </div>
            </ChatContainer>
        </MainContainer>
    </div>)
}