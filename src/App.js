import React from 'react';
import './App.css';
import style from './App.css';
import Navbar from './components/Navbar/Navbar';
import UsersContainer from './components/Users/UsersContainer';
import Dialogues from './components/Dialogues/Dialogues';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Login from './components/Login/Login'
import { Routes, Route } from 'react-router-dom';
import ProfilesContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useParams } from "react-router-dom";
import { initializeApp } from './Redux/appReducer';
import PreLoader from './components/AllComponents/PreLoader/PreLoader';


export function withRouter(Children) {

  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />
  }
}

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized)
      return <PreLoader />

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
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(connect(mapStateToProps, { initializeApp }), withRouter)(App);