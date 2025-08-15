"use client";
import React from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./Sidebar";
import { IconLayoutDashboard, IconUsers, IconSettings } from "@tabler/icons-react";
import "../css/Sidebar_use.css"; 

// 1. Define your links data without inline styles
const links = [
  {
    label: "Dashboard",
    href: "#",
    icon: <IconLayoutDashboard className="sidebar-icon-style" />,
  },
  {
    label: "Users",
    href: "#",
    icon: <IconUsers className="sidebar-icon-style" />,
  },
  {
    label: "Settings",
    href: "#",
    icon: <IconSettings className="sidebar-icon-style" />,
  },
];

const SidebarUse = () => {
  const [open, setOpen] = React.useState(false);

  return (
    // Main layout container
    <div className="layout-container">
      {/* 2. Add the Sidebar component */}
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="sidebar-body-custom">
          <div className="sidebar-body-top-section">
            {/* Optional: Add a logo or header here */}
            <div className="logo-container">
              <p className="logo-text">Logo</p>
            </div>

            {/* 3. Map over your links to create SidebarLink components */}
            <div className="links-container">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          {/* Optional: Add a footer or user profile section here */}
          <div>
            <SidebarLink
              link={{
                label: "Profile",
                href: "#",
                icon: (
                  <img
                    src="https://assets.aceternity.com/user-_3.png"
                    className="profile-avatar"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>

    </div>
  );
};

export default SidebarUse;