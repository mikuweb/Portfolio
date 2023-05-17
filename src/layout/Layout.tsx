import React, { Fragment } from "react";
import Header from "@/components/Header";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="className='max-w-7xl w-full m-auto'">
      <Header />
      <main>{children}</main>
      {/* <Footer/> */}
    </div>
  );
};

export default Layout;
