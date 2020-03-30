import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Contact name="Jeanne Foster" avatar="https://randomuser.me/api/portraits/women/90.jpg" online />
      <Contact name="Kim Reid" avatar="https://randomuser.me/api/portraits/women/61.jpg" />
      <Contact name="Ivan Shelton" avatar="https://randomuser.me/api/portraits/men/3.jpg" online />
    </div>
  );
}

export default App;
