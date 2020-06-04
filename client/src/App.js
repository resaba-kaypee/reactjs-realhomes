import React from 'react';
import Navbar from './components/layout/Navbar';
import SignIn from './components/forms/SignIn';
import SignUp from './components/forms/SignUp';

const App = () => {
  return (
    <div className="w-screen h-screen bg-gray-300">
      <SignIn />
    </div>
  );
};

export default App;
