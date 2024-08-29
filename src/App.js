import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/header/Header';
import NotFound from './pages/notFound/NotFound';
import DeshBoard from './pages/deshBoard/DeshBoard';
import PostDeveloper from './pages/postDeveloper/PostDeveloper';

function App() {
  document.body.style.backgroundColor = "#F27052"
  return (
    <>
      <Header />
      <Routes >
        <Route path='/' element={ <DeshBoard /> } />
        <Route path='/developer' element={ <PostDeveloper /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </>
  );
}

export default App;
