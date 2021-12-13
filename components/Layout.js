import NavBar from "./navBar";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
