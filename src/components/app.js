import React from 'react';
import './main.css';
import 'antd/dist/antd.css';
import HeaderMenu from './header';
import News from './news';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SinglePageNews from './singleNewsPage';
import Login from './loggined';
import Profile from './profile';
import AddNews from './add-news';

const App = () => {
  return (
    <Router>
      <div className="App">
        <HeaderMenu/>
        <Route path='/' render={() => <h1>Welcome</h1>} exact/>
        <Route path='/news/' exact component={News}/>
        <Route path='/profile/' component={Profile}/>
        <Route path='/login/' component={Login}/>
        <Route path='/news/:id' exact render={({match}) => {
          const { id } = match.params;
          return <SinglePageNews itemId={id}/>;
        }}/>
        <Route path='/add-news/' component={AddNews}/>
      </div>
    </Router>
  );
};

export default App;