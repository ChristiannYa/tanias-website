import Nav from "../components/Nav";
import Footer from '../components/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  const fixedHeaderPaths = ['/'];
  const fixedCondition = fixedHeaderPaths.includes(location.pathname);
  const showFooter = location.pathname !== '/';

  return (
    <>
      <Nav isFixed={fixedCondition}/>
      <Outlet/>
      {showFooter && <Footer/>}
    </>
  )
}

export default Layout
