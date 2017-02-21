import React, { PropTypes } from 'react';

const WidgetContainer = ({children, title, onEdit}) => {
  return (
    <div className="card" onclick={onEdit}>

      {/*hide title container if string is empty*/}
      {!title === '' ? <div className="card-content">
          <h2>{title}</h2>
      </div> : '' }

      {/*widgets appear as children to card content here*/}
      <div className="card-content">
        <div className="content">{children}</div>
      </div>
  </div>
);
};

WidgetContainer.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
  onEdit: PropTypes.func
};

export default WidgetContainer;