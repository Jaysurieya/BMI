import React from "react";
import "../css/Background.css";

const DottedBackground = ({ children }) => {
  return (
    <div className="animated-dots">
      {/* Add a scrollable content wrapper inside the background */}
      <div className="content-wrapper">
        {children}
      </div>
    </div>
  );
};

export default DottedBackground;