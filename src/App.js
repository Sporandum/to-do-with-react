import React from 'react';
import './App.css';

import Layout from './Hoc/Layout/Layout';
import ToDo from './Containers/ToDo/ToDo';

function App() {
  return (
    <div className="App">
      <Layout>
        <ToDo />
      </Layout>
    </div>
  );
}

export default App;
