import './App.css';
import { useState } from 'react';
import Authentication from './components/Authentication';
import Dashboard from './components/Dashboard';

function App() {

  const [showAuthPage, setshowAuthPage] = useState(true);
  const [showDashboard, setshowDashboard] = useState(false);

  const successSignIn = () => {
    setshowAuthPage(false);
    setshowDashboard(true);
  }

  return (
    <div>
      {showAuthPage && <Authentication successSignIn={successSignIn} />}
      {showDashboard && <Dashboard />}
    </div>
  );
}

export default App;