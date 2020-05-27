import React from 'react';
import useSwr from 'swr';
import Messages from './Messages';
import NewMessage from './NewMessage';
import api from '../api';

export const Error = ({ error }) => <div>{error.message}</div>;

const Chat = () => {
  const { data: { messages } = {}, error, isValidating, mutate } = useSwr('/messages');

  const send = async data => {
    const response = await api().post('/messages', { message: data });
    mutate([ response.messages, ...messages ]);
  };

  return (
    <div>
      <NewMessage onSave={send} />
      {!error && <Messages messages={messages} isValidating={isValidating} />}
      {error && <Error error={error} />}
    </div>
  );
};

export default Chat;