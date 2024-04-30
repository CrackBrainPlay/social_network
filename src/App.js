import React from 'react';
import './App.css';
import style from './App.css';
// import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
// import Profile from './components/Profile/Profile';
import UsersContainer from './components/Users/UsersContainer';
import Dialogues from './components/Dialogues/Dialogues';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Login from './components/Login/Login'
import { Routes, Route } from 'react-router-dom';
import ProfilesContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className={style.content}>
        <Routes>
          <Route path="/" element={<ProfilesContainer />} />
          <Route path="Profile/:userId?" element={<ProfilesContainer />} />
          <Route path="Users/*" element={<UsersContainer />} />
          <Route path="Dialogues/*" element={<Dialogues />} />
          <Route path="News/*" element={<News />} />
          <Route path="Music/*" element={<Music />} />
          <Route path="Settings/*" element={<Settings />} />
          <Route path="Login/*" element={<Login />} />
        </Routes>
      </div>
      <footer></footer>
    </div>
  );
}


export default App;
