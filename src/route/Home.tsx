import { useCallback, useEffect, useState } from 'react';
import MovieApp from './Movie';
import TodoList from '../component/TodoList';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <TodoList />
      <hr />
      <Link to="/movie"><button>영화 검색하러 가기</button></Link>
    </div>
  );
}

export default Home;
