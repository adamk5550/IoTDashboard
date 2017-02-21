import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './components/Dashboard';

require("bulma/css/bulma.css");
require("./styles/main.css")

ReactDOM.render(
  <Dashboard />,
  document.getElementById('root')
);
