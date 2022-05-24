import React from 'react';

import Home from './pages/Home';
import Aviazione from './pages/Aviazione';

function App() {
  const [ page, changePage ] = React.useState('home');

  return (
    <>
      { page === 'home' ? <Home changePage={changePage} /> : null }
      { page === 'aviazione' ? <Aviazione changePage={changePage} /> : null }
    </>
  );
}

export default App;