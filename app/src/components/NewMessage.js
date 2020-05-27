import React, { useState } from 'react';
import { Box, Flex, Button } from 'rebass';
import { Label, Input, Textarea } from '@rebass/forms';

const NewMessage = ({ onSave }) => {
  const [ data, setData ] = useState({ text: '' });

  const handleInputChange = ({ target: { name, value } }) => setData({ ...data, [name]: value });

  const handleSave = e => {
    e.preventDefault();
    onSave(data);
  };

  return (
    <Box
      as='form'
      onSubmit={handleSave}
      py={3}>
      <Flex mx={-2} mb={3}>
        <Box width={1/2} px={2}>
          <Label htmlFor='from'>Who are you?</Label>
          <Input id='from' name='from' onChange={handleInputChange} fontFamily='body' />
          <Label htmlFor='text'>What do you have to say?</Label>
          <Textarea id='text' name='text' rows={3} onChange={handleInputChange} fontFamily='body' />
        </Box>
      </Flex>
      <Button>
        Send
      </Button>
    </Box>
  );
};

export default NewMessage;