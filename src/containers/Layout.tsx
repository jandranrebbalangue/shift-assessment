import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Content from "./Content";

import "../scss/components/_layout.scss";
import { SidebarProvider } from "../context/sidebar";

const Layout = () => {
  return (
    <div className="app">
      <SidebarProvider>
        <Router>
          <Header />
          <Sidebar />
          <Content />
        </Router>
      </SidebarProvider>
    </div>
  );
};

export default Layout;
