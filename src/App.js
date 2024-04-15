import React from 'react';
import './App.css';
import style from './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import UsersContainer from './components/Users/UsersContainer';
import Dialogues from './components/Dialogues/Dialogues';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Routes, Route } from 'react-router-dom';


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className={style.content}>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="Profile/*" element={<Profile />} />
          <Route path="Users/*" element={<UsersContainer />} />
          <Route path="Dialogues/*" element={<Dialogues />} />
          <Route path="News/*" element={<News />} />
          <Route path="Music/*" element={<Music />} />
          <Route path="Settings/*" element={<Settings />} />
        </Routes>
      </div>
      <footer></footer>
    </div>
  );
}


export default App;
