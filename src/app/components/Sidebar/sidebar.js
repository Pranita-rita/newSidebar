import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import '../Navbar/Navbar.css'

const Sidebar = () => {
  return (
    <div
      style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            PORTAL LOGO
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/customer-search" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Customer Search</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analysis" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Analysis</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/settings" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
               Settings
              </CDBSidebarMenuItem>
            </NavLink>
        
          </CDBSidebarMenu>
        </CDBSidebarContent>

        {/* <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter> */}
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
