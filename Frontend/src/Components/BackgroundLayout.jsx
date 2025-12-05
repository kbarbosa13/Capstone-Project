import React from "react";
import "./BackgroundLayout.css";

function BackgroundLayout({ children }) {
  return (
    <div className="bg-layout-wrapper">
      {children}
    </div>
  );
}

export default BackgroundLayout;