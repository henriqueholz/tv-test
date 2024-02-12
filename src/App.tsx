import { init } from '@noriginmedia/norigin-spatial-navigation';
import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

function App() {
  init({});

  return (
    <div className='relative bg-gradient-to-b pb-8'>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
