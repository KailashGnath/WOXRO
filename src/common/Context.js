import AppContext from './Constants';
import Router from './Router';
import React, { useState } from 'react'

function Context() {
  const [flatlist, setflatlist] = useState([])
  return (
    <AppContext.Provider
      value={{
        flatlist, setflatlist
      }}
    >
      <Router />
    </AppContext.Provider>
  );
}

export default Context;
