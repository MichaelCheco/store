import React from 'react'
import styled from 'styled-components';
const Img = styled.img`
  width: 100%;
  object-fit: cover;
  height: 590px;

`;
const Image = () => (
  <>
  <Img src="static/c.jpg" />
  <h1>Welcome to My Site 🚀</h1>
</>
)

export default Image;