import React from 'react';
import './App.css';
import style from './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogues from './components/Profile/Dialogues/Dialogues';


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className={style.content}>
        {/* <Profile /> */}
        <Dialogues />
        {/* <img src="img/element1.png" alt='' /> */}
      </div>

      <footer>

      </footer>
    </div>
  );
}


export default App;
