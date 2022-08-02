import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Dashboard } from './app/pages/Dashboard/Dashboard';
import Routes from './app/router/Routes';

function App() {
  return (
    <div>
    <Routes/>
  </div>
  );
}

export default App;
