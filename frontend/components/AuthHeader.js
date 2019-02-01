import styled from 'styled-components';
import React from 'react';
import Link from 'next/link';

const Div = styled.div`
  display: flex;
  background: black;
  justify-content: flex-end;
  height: 45px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  a {
    margin: 0 10px;
    width: 25%;
    color: whitesmoke;
    font-weight: bold;
    font-size: 16px;
    white-space: nowrap;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const AuthHeader = props => (
  <Div>
    <Wrapper>
      <Link href="/signup">
    <a>LOG IN</a>   
      </Link>
      <Link href="/signup"> 
    <a>CREATE AN ACCOUNT</a>
      </Link>
    </Wrapper>
  </Div>
)

export default AuthHeader;