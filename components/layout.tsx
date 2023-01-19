import Nav from './nav';
import Footer from './footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
