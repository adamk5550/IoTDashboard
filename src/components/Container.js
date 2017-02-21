import React, { PropTypes } from 'react';

const Container = ({children}) => {
  return (
    <div className="section is-paddingless">
      <div className="container">
        {children}
      </div>
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.array,
};

export default Container;