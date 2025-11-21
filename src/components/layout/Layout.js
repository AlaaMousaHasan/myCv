import React from "react";
import NavBar from "./NavBar";
import MobileNavBar from "./MobileNavBar";
import useMediaQuery from "../../common/useMediaQuery";

function Layout({ children }) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div>
      {isMobile ? <MobileNavBar /> : <NavBar />}
      <main>{children}</main>
    </div>
  );
}

export default Layout;
