import { Outlet, useLocation } from "react-router-dom";
import Header from "@layout/Header"; 
import Footer from "@layout/Footer"; 

function Layout() {

  const location = useLocation();
  const noHeaderRoutes = ["/mentionslegales"];
  return (
    <>
      <div id="main-container">
        {!noHeaderRoutes.includes(location.pathname) && <Header />} {/* pas de header dans la page mentionslegales */}
        <Outlet /> {/* Contenu principal (=les pages) */}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
