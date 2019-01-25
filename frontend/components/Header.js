
import Link from 'next/link'
import Router from 'next/router'
import NProgress from 'nprogress'
import Wrapper from './styles/NavStyles'

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};


const Header = (props) => {
  return (
    <nav>
      <Wrapper>
      <Link href="/"><a>Home</a></Link>
      </Wrapper>
    </nav>
  )
}

export default Header;