/* eslint-disable react/jsx-filename-extension */

import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import Wrapper from './styles/NavStyles';
import User from './User'
import styled from 'styled-components';
const Div = styled.div`
display: grid;
width: 100%;
grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
grid-template-rows: 65px;
@media (max-width: 500px) {
  grid-template-columns: 100%;
  grid-template-rows: repeat(5, 50px);
  border: 1px solid black;
  a {
    display: block;
    border: 1px solid black;
    width: 100%;
    text-align: center;
    height: 50px;
    text-decoration: none;
  }
}`;
const H1 = styled.h1`
  display: flex;
  height: 65px;
  margin-left: 50px;
  margin-top: 0;
`;
Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};


const Header = props => (
      <User>
        {({data: { me }}) => (
          <Div>
      <H1>Bean & Bean ☕</H1>
          <Wrapper>
      <Link href="/shop">
      <a>Shop 🛍️ </a>
      </Link>
      {me && (
        <>
      <Link href="/sell"><
        a>Sell 🤑</a>
        </Link>
      <Link href="/">
      <a>Account 👽</a>
      </Link>
      <Link href="/update">
      <a>Orders 📙</a>
      </Link>
      </>
    )}
</Wrapper>
        </Div>
        )}
      </User>
);

export default Header;
