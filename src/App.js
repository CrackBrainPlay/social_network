import React from 'react';
import './App.css';
import style from './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogues from './components/Dialogues/Dialogues';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
// import { addPost, updateNewPostText } from './Redux/State.js';
import { Routes, Route } from 'react-router-dom';


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar profilePerson={props.state.messagesPage} />
      <div className={style.content}>
        <Routes>
          <Route path="/" element={<Profile store={props.store} />} />
          <Route path="Profile/*" element={<Profile store={props.store} />} />
          {/* <Route path="Profile/*" element={<Profile postsPage={props.state.profilePage} dispatch={props.dispatch} />} /> */}
          <Route path="Dialogues/*" element={<Dialogues messagesPage={props.state.messagesPage} store={props.store} />} />
          {/* <Route path="Dialogues/*" element={<Dialogues messagesPage={props.state.messagesPage} dispatch={props.dispatch} />} /> */}
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
