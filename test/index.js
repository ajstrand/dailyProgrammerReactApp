import './css/base.css';
import React from "react";
import ReactDOM from "react-dom";
import App from './reactUI';
ReactDOM.render(
  <App url="/api/challenge"/>,
  document.getElementById('app')
);
