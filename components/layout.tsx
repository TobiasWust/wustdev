import Footer from './footer';
import Nav from './nav';
import Sidebar from './sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-rows-[auto_1fr_auto]">
      <Nav />
      <main>
        <Sidebar />
        {children}
      </main>
      <Footer />
    </div>
  );
}
