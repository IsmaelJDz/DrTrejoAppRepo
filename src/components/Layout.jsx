import React, { children } from 'react';
import Header from './Header';
//import Footer from './Footer';

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

export default Layout;