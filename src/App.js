import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import { getUser, logout } from './services/users';
import Auth from './Views/Auth/Auth';
import './App.css';
import TodoList from './Views/ToDo/TodoList';
import ToDo from './Views/ToDo';

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
                <ToDo />
                <TodoList setCurrentUser={setCurrentUser} />
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
