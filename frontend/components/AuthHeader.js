import styled from 'styled-components';
import React from 'react';
import Link from 'next/link';
import User from './User'
const Name = styled.div`
  width: 25%;
  display: flex;
  color: white;
  font-size: 18px;
  margin-left: 50px;
  margin-top: 4px;
`;
const Div = styled.div`
  display: flex;
  background: black;
  justify-content: space-between;
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
    font-size: 14px;
    white-space: nowrap;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const AuthHeader = props => (
  <Div>
    <User>
      {({data: { me }}) => (
        me ? <Name>WELCOME {me.name.toUpperCase()}</Name> : <h5>.</h5>
        // <Name>Welcome {me.name}</Name>
      )}
    </User>
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