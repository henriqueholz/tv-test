import { init } from '@noriginmedia/norigin-spatial-navigation';
import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

function App() {
  init({});

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
