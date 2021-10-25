import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import { react } from '@babel/types';

function App() {
  return (
    // BrowserRouter로 Route컴포넌트를 사용하기 위한 설정을 진행한다.
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/mypage">
                MyPage
              </Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* 경로를 설정하고 */}
          <Route path="/mypage">
            {/* 컴포넌트를 연결한다. */}
            <MyPage />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

// Home 컴포넌트
function Home() {
  return <h1>Home</h1>;
}

// MyPage 컴포넌트
function MyPage() {
  return (
    <div>
      {/* <h1>MyPage</h1> */}
      <div className="img">
        <button><img src="https://randomuser.me/api/portraits/men/94.jpg"></img></button>
        <button><img src="https://randomuser.me/api/portraits/men/91.jpg"></img></button>
        <button><img src="https://randomuser.me/api/portraits/men/98.jpg"></img></button>
      </div>
    </div>
  )
}

// Dashboard 컴포넌트
function Dashboard() {
  return <h1>Dashboard</h1>;
}

export default App;
