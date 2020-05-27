import React from 'react';
import { Heading, Image } from 'rebass';
import whale from '../whale.png';

const Header = () => (
  <>
    <Heading>AP Docker</Heading>
    <Image src={whale} />
  </>
);

export default Header;