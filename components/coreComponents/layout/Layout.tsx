import React, { FC } from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import { SLayout } from "./Layout.style";

interface ILayout {
  children: React.ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <SLayout>
      <div className="for-footer-stay-bottom">
        <Navbar />
        {children}
      </div>
      <Footer />
    </SLayout>
  );
};

export default Layout;
