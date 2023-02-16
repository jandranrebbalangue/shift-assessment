import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

// sidebar nav config
import SidebarNav from "./SidebarNav";
// import CreateElement from "../utils/createElement";
import shiftNav from "./_nav";
import "../scss/components/nav.scss";

interface NavProps {
  name?: string;
  to?: string;
  exact?: boolean;
  icon?: string;
  divider?: boolean;
}
const Sidebar = () => {
  const location = useLocation();
  const [navs, setNavs] = useState<NavProps[]>([]);

  useEffect(() => {
    const _nav = [...shiftNav];
    setNavs(_nav);
  }, [location]);

  return (
    <aside className="sidebar">
      <div className="sidebar-head"></div>
      <div className="sidebar-body">
        <SimpleBar>
          <div className="sidebar-inner">
            <SidebarNav items={navs} />
          </div>
        </SimpleBar>
      </div>
    </aside>
  );
};

export default React.memo(Sidebar);
