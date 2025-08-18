import React from 'react';
import '../css/Bento-grid.css';

export const BentoGrid = ({ className, children }) => {
  // Combine our base class with any additional classes passed as props
  const combinedClassName = `bento-grid ${className || ''}`.trim();
  return (
    <div className={combinedClassName}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({ className, title, description, header, icon }) => {
  const combinedClassName = `bento-grid-item ${className || ''}`.trim();
  return (
    <div className={combinedClassName}>
      {header}
      <div className="bento-item-content">
        {icon}
        <div className="bento-title">{title}</div>
        <div className="bento-description">{description}</div>
      </div>
    </div>
  );
};