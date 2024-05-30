import React from 'react';
import RatingsList from './components/RatingsList';
import './App.css';

/**
 * This is the main application component.
 */
const App = () => {
  // Define the data for the ratings list.
  const ratingsData = [
    { name: 'Iqra', rate: 4, content: 'Great product!' },
    { name: 'Dennis', rate: 5, content: 'Excellent!' },
    { name: 'Chege', rate: 3, content: 'Good, but could be better.' },
    {name: 'Sam', rate: 5, content: 'Great Products'},
    {name: 'Wafiq', rate: 4, content:'Nice product'},
    {name: 'Joel', rate: 3, content: 'Good, but needs improvement'}
  ];


  return (
    // Wrap the application in a div.
    <div>
      {/* Pass the ratings data to the RatingsList component. */}
      <RatingsList ratings={ratingsData} />
    </div>
  );
};

export default App;