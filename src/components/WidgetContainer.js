import React, { PropTypes } from 'react';

const WidgetContainer = ({children, title}) => {
  return (
    <div className="card">
      <div className="card-content">
          <h2>{title}</h2>
      </div>
      <div className="card-content">
        {children}
      </div>
  </div>
);
};

WidgetContainer.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
};

export default WidgetContainer;