import Nav from "../components/Nav";
import Footer from '../components/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
    const location = useLocation();
    const fixedHeaderPaths = ['/'];
    const fixedCondition = fixedHeaderPaths.includes(location.pathname);
    const showFooter = location.pathname !== '/';

    return (
        <div className="min-h-screen flex flex-col">
            <Nav isFixed={fixedCondition} />
            <main className="flex-1">
                <Outlet />
            </main>
            {showFooter && <Footer />}
        </div>
    )
}

export default Layout
