import React from 'react';

const EllipseBackground = () => {
  return (
    <div className="ellipse-background">
      {/* Background Ellipses */}
      {/* top left */}
      <div className="ellipse ellipse1"></div>
      <div className="ellipse ellipse2"></div>

      {/* top right */}
      <div className="ellipse ellipse3"></div>
      <div className="ellipse ellipse4"></div>

      {/* bottom */}
      <div className="ellipse ellipse5"></div>
      <div className="ellipse ellipse6"></div>

    </div>
  );
}

export default EllipseBackground;