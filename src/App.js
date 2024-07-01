import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegionList from './components/RegionList';
import ActivityReport from './components/ActivityReports';

function App() {
  return (
    <div className="App">
      <h1 className='text-center py-4'>Lista Obszarów</h1>
      <RegionList />
      {/* <h2 className='text-center'>Raporty</h2> */}
      {/* <ActivityReport /> */}
    </div>
  );
}

export default App;
