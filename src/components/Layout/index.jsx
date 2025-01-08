import React from "react";
import { Outlet} from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Layout = () => {

  return (
    <div className="p-[20px] flex flex-col justify-around h-[100vh]">
      <div className="flex flex-col justify-between h-full md:overflow-hidden">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
