import React from 'react';
import LoadDashboards from './components/LoadDashboards/LoadDashboards';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className='row mt-4 mb-4'>
          <LoadDashboards />
        </div>
      </div>
    </div>
  );
}

export default App;