import React from 'react';
import clock from './images/cloks.png';
import date from './images/date.png';
import vector from './images/Vector.png';
import Advantage from './components/Advantage.js';
import Header from './components/Header';
import appStore from './images/Download_on_the_App_Store_Badge_US-UK_blk_092917 5.png';
import googlePlay from './images/google-play-badge 5.png';
import fitCoin from './images/Fitcoin.png';
import vectorLable from './images/Vector 11.png';
import Text from './components/Text.js';

function App() {
  return (
    <>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;800&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500&display=swap');
    </style>
    <div className='header'>
      <div className='App-logo'>
        FIT MIRROR
      </div>

      <div className='Frame'>
        <Header headerButton = 'ABOUT'/>
        <Header headerButton='LITEPAPER'/>
        <Header headerButton='TOKEN'/>
        <Header headerButton='PRODUCT'/>
      </div>
      
      <div className='DownloadButton'>
        <span className='DownloadText'>DOWNLOAD NOW</span>
      </div>
    </div>
    <div className='body'>
      <Text title = "TRAIN, PROGRESS & EARN CRYPTO" message="FIT MIRROR is a web3 train 2 earn ecosystem for fitness & health that transforms real money spent on healthy activities into FIT MIRROR tokens & shareholding ownership."/>
      <img src={appStore} className='appStoreIcon' alt='appStore'/>
      <img src={googlePlay} className='googlePlayIcon' alt='googlePlay'/>
      <img src={vectorLable} className='vectorLabel' alt='vectorLavle'/>
      <img src={fitCoin} className='fitCoinLabel' alt='FitCoin'/>
      
    </div>
    <div className='Down'>
      <div className='advantages'>
      <Advantage icon = {clock} title = "Workouts on your schedule" message = "50+ live classes streaming weekly. 5000+ on-demand classes available."/>

      <Advantage icon = {date} title = "Dynamic tools and classes" message = "Find what suits you best: On-demand, live classes, and goal based programs."/>

      <Advantage conteinerOrder="vectorOrder" iconStyle="vectorIconHeight" icon = {vector} title = "Empowering community" message = "Join like-minded people eager to pioneer a new way of staying fit."/>

      

      </div>
      </div></>

  );
}

export default App;
