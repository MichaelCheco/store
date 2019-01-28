/* eslint-disable react/jsx-filename-extension */

import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import Wrapper from './styles/NavStyles';

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
  <nav>
    <Wrapper>
      <Link href="/shop"><a>Shop</a></Link>
      <Link href="/sell"><a>Sell</a></Link>
      <Link href="/"><a>Orders</a></Link>
      <Link href="/"><a>Accout</a></Link>
      <Link href="/"><a>Sign Out</a></Link>
      <Link href="/"><a>My Cart</a></Link>
    </Wrapper>
  </nav>
);

export default Header;
