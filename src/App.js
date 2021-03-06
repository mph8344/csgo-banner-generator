import React from 'react';
import './App.scss';
import Banner from './Banner';
import BannerCreator from './BannerCreator';
import firebase from './config';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';

/*
  <UploadForm/>
      <ImageGrid/>
*/

function App() {
  return (
    
    <div className="App" >
      
      <div className="main" id="mainbox"> 
        <BannerCreator/>
      </div>

      <div id="my-node">
        <Banner id="bannerbox"></Banner>
      </div>


      

      
      
      {/*<h1>Your image will be located below!</h1>*/}

      <br/>

      <div id="renderto"></div>
      

    </div>
  );
}

export default App;
