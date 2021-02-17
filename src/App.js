import React from 'react';
import './App.css';
import Banner from './Banner';
import CourseList from './CourseList';
import Thing from './Thing';



function App() {
  return (
    
    <div className="App" >
      
      <div className="main"> 
        <Thing/>
      </div>

      <div id="my-node">
        <Banner id="bannerbox"></Banner>
        <br/>
        <h1>Your image will be located below!</h1>
      </div>

      <br/>

      <div style={{width: '100%'}} id="renderto"></div>

    </div>
  );
}

export default App;
