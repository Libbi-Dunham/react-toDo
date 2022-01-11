import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import { getUser, logout } from './services/users';
import Auth from './Views/Auth/Auth';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());
  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            {currentUser && (
              <>
                <h1>I am signed in</h1>
                <button className="log" onClick={logoutUser}>
                  Log Out
                </button>
              </>
            )}
            {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
