import React from 'react';
import './App.css';
import style from './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useParams } from "react-router-dom";
import { initializeApp } from './Redux/appReducer';
import PreLoader from './components/AllComponents/PreLoader/PreLoader';
import store from './Redux/reduxStore.js';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { withSuspense } from './hoc/withSuspense.js';

const ProfileComponent = withSuspense(React.lazy(() => import('./components/Profile/ProfileContainer.jsx')));
const UsersComponent = withSuspense(React.lazy(() => import('./components/Users/UsersContainer.jsx')));
const DialoguesComponent = withSuspense(React.lazy(() => import('./components/Dialogues/Dialogues.jsx')));
const NewsComponent = withSuspense(React.lazy(() => import('./components/News/News.jsx')));
const MusicComponent = withSuspense(React.lazy(() => import('./components/Music/Music.jsx')));
const SettingsComponent = withSuspense(React.lazy(() => import('./components/Settings/Settings.jsx')));
const LoginComponent = withSuspense(React.lazy(() => import('./components/Login/Login.jsx')));


export function withRouter(Children) {

  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />
  }
}

class App extends React.Component {
  catchAllUnhandledErrors = (promiseRejectionEnevt) => {
    alert("Some error");
  }

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
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
            <Route path="/" element={<Navigate to={"/profile"} />} />
            {/* <Route path="/" element={<ProfileComponent />} /> */}
            <Route path="Profile/:userId?" element={<ProfileComponent />} />
            <Route path="Users/*" element={<UsersComponent />} />
            <Route path="Dialogues/*" element={<DialoguesComponent />} />
            <Route path="News/*" element={<NewsComponent />} />
            <Route path="Music/*" element={<MusicComponent />} />
            <Route path="Settings/*" element={<SettingsComponent />} />
            <Route path="Login/*" element={<LoginComponent />} />
            <Route path="*" element={<div>404 NOT FOUND</div>} />
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

// export default compose(connect(mapStateToProps, { initializeApp }), withRouter)(App);
const AppContainer = compose(connect(mapStateToProps, { initializeApp }), withRouter)(App);

const MainApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default MainApp;