import React from 'react';
import Menubar from './menubar';


const Layout = ({ children }: any) => {
  return (
    <div>
      <Menubar />
      {children}
    </div>
  );
};

export default Layout;
