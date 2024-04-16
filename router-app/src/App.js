import React from 'react';
import {
  BrowserRouter as Router,     
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

const Users = [
              { id: 1, name: 'Alice', gender: 'f' },     
              { id: 2, name: 'Bob', gender: 'm' },     
              { id: 3, name: 'Tom', gender: 'm' },     
              { id: 4, name: 'Mary', gender: 'f' }, ];

const User = props => {
                const { name } = useParams();
              
                return (
                  <h1>Profile - {name} </h1>
                )
}

const Male = props => {
  const maleUsers = Users.filter(u => u.gender === 'm');

  return (
    <Router>
      <div>
        <h2>Male Users</h2>
        <ul>
          {maleUsers.map(user => (
            <li key={user.id}>
              <Link to={`/male/${user.name}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
        <div style={{ background: 'brown', padding: 20 }}>
          <Switch>
            {/* Route to display the User component based on the selected user's name */}
            <Route path="/male/:name" component={User} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

const Female = props => {
  const femaleUsers = Users.filter(u => u.gender === 'f');

  return (
    <Router>
      <div>
        <h2>Female Users</h2>
        <ul>
          {femaleUsers.map(user => (
            <li key={user.id}>
              <Link to={`/female/${user.name}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
        <div style={{ background: 'brown', padding: 20 }}>
          <Switch>
            {/* Route to display the User component based on the selected user's name */}
            <Route path="/female/:name" component={User} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}



const App = props => {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/male">Male</Link></li>
          <li><Link to="/female">Female</Link></li>
        </ul>
        <div style={{background: 'cyan', padding: 20}}>
          <Switch>
            <Route path="/male">
              <Male />
            </Route>
            <Route path="/female">
              <Female />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
