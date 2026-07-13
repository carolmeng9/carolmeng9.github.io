import { Outlet } from 'react-router-dom';
import SideDeco from './SideDeco';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <>
      <SideDeco />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
