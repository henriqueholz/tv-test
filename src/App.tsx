import { init } from '@noriginmedia/norigin-spatial-navigation';
import './App.css';
import TestingUseLocalStorage from './POC/TestingUseLocalStorage';
import Header from './components/Header';

function App() {
  init({});

  return (
    <div className='relative bg-gradient-to-b pb-8'>
      <Header />
      <main className='relative overflow-y-scroll p-8 pb-20 scrollbar-hide lg:px-16 '>
        {/* <Banner movie={featuredMovie} />
        {movies.map((movie) => (
          <MovieRow
            movies={movie.movies}
            key={movie.sectionTitle}
            sectionTitle={movie.sectionTitle}
          />
        ))} */}
      </main>
    </div>
  );
}

export default App;
