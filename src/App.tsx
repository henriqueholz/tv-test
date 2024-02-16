import { init } from '@noriginmedia/norigin-spatial-navigation';
import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  init({});

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Header />
        <Outlet />
      </div>
    </QueryClientProvider>
  );
}

export default App;
