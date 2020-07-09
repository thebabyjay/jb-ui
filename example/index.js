import React from 'react';
import ReactDOM from 'react-dom';
import { FileUpload } from '../src';

const App = () => (
  <div>
    <FileUpload endpoint="http://localhost:9000" />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
