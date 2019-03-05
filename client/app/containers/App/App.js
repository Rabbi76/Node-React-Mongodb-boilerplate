import React, { Component } from 'react';
import Header from '../Home/Header';

const App = ({ children }) => (
  <div>
    <div >
      <main>
        {children}
      </main>
    </div>
  </div>
);

export default App;
