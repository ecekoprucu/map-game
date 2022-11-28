import React from 'react';
import './App.css';
import MapComponent from './components/Map';
import { DataProvider } from './context/dataContext';
import CreateSide from './components/CreateSide';
import FlagSide from './components/FlagSide';

function App() {
  return (
    <DataProvider>
      <div>
        <div className="App">
          <MapComponent />
          <div className='picking-area'>
           <CreateSide/>
          </div>
        </div>
        <div className="flag-area">
          <FlagSide />
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
