import React, { Fragment } from 'react';
import DummyContent from './components/pages/DummyContent';
import Navbar from './components/layout/Navbar';
import Background from './components/layout/Background';

const App = () => {
  return (
    <div className="relative w-screen h-screen font-sans bg-gray-300 ">
      <Navbar />
      <Background />
      <DummyContent />
    </div>
  );
};

export default App;
