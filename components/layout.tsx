import Footer from './footer';
import Nav from './nav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] max-w-7xl m-auto">
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
