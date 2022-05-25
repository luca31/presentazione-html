import React from 'react';

import Home from './pages/Home';
import Aviazione from './pages/Aviazione';
import Treni from './pages/Treni';
import Etica from './pages/Etica';

function App() {
  const [ page, changePage ] = React.useState('home');

  return (
    <>
      { page === 'home' ? <Home changePage={changePage} /> : null }
      { page === 'aviazione' ? <Aviazione changePage={changePage} /> : null }
      { page === 'treni' ? <Treni changePage={changePage} /> : null }
      { page === 'etica' ? <Etica changePage={changePage} /> : null }
    </>
  );
}

export default App;