import Header from '../ui/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
