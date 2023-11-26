import Header from "./Header";
import Catalog from "./Catalog";

const Layout = ({ children }) => (
  <>
    <Header />
    <Catalog />
    {children}
  </>
);

export default Layout;