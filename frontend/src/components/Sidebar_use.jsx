  "use client";
  import React from "react";
  import { Sidebar, SidebarBody, SidebarLink } from "./Sidebar";
  import { IconLayoutDashboard, IconUsers, IconSettings } from "@tabler/icons-react";
  import "../css/Sidebar_use.css"; 
  import profileIcon from '../assets/person.svg';
  import Logo from '../assets/logo.svg';
  import Background from '../components/Background'
  import HealthTrackerDashboard from './Home';

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
        {/* Sidebar component */}
        <Sidebar open={open} setOpen={setOpen}>
          <SidebarBody className="sidebar-body-custom">
            <div className="sidebar-body-top-section">
              {/* Optional: Add a logo or header here */}
              <div className="logo-container">
              <img src={Logo} alt="Logo" className="logo" />
              </div>

              {/* Map over your links to create SidebarLink components */}
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
                      src={profileIcon}
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

        {/* Main content area with proper margin */}
        <div className="main-content">
          <Background>
            <HealthTrackerDashboard />
          </Background>
        </div>       
      </div>
    );
  };

  export default SidebarUse;