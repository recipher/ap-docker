import React from 'react';
import { Card } from 'rebass';

export const Message = ({ message }) => {
  return (
    <Card>{message.text}</Card>
  );
};

export const NoMessages = () => <div>No messages</div>;

const Messages = ({ messages, isValidating }) => {
  return (
    <>
      {!messages && !isValidating && <NoMessages />}
      {messages && messages.map(message => <Message key={message.id} message={message} />)}
    </>
  );
};

export default Messages;