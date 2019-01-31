/* eslint-disable react/jsx-filename-extension */

import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import Wrapper from './styles/NavStyles';
import User from './User'
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
    <Wrapper>
      <Link href="/shop">
      <a>Shop</a>
      </Link>
      {me && (
        <>
      <Link href="/sell"><
        a>Sell</a>
        </Link>
      <Link href="/">
      <a>Account</a>
      </Link>
      <Link href="/update">
      <a>Orders</a>
      </Link>
      </>
      )}
        {!me && (
          <Link href="/signup">
      <a>Sign In</a>
      </Link>
    )}
</Wrapper>
        )}
      </User>
);

export default Header;
