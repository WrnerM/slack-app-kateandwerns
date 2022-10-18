import './App.css';
import Authentication from './components/Authentication';
import Dashboard from './components/Dashboard';

function App() {
  // Stay logged in
  const loggedIn = localStorage.getItem("isLoggedIn");

  return (
    <div>
      {loggedIn
        ? <Dashboard />
        : <Authentication />
      }
    </div>
  );
}

export default App;