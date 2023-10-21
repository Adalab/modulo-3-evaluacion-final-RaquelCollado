import '../styles/App.scss';
import { useEffect, useState } from "react";
import Api from '../services/Api';
import MovieSceneDetail from './MovieSceneDetail';
import MovieSceneList from './MovieSceneList';
import MovieSceneItem from './MovieSceneItem';
import FilterByMovie from './FilterByMovie';
import FilterByYear from './FilterByYear';

function App() {
  return (
    <div className='container'>
      <header className='container_header'>
        <h1 className='container_header_title'>Owen Wilson's wOw</h1>
      </header>
      <main className='container_main'>
        <section className='container_main_filters'>
        <FilterByMovie/>
        <FilterByYear/>
        </section>
        <section className='container_main_movies'>
        <MovieSceneList />
        </section>
      </main>
    </div>
  );
}

export default App;
