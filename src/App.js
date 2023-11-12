
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import MainPage from './components/pages/MainPage/MainPage';
import NotFound from './components/pages/NotFound/NotFound';
import SingleTable from './components/pages/SingleTable/SingleTable';
import Header from './components/views/Header';
import Footer from './components/views/Footer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTables } from './redux/tableReducer';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchTables()), [dispatch]);
  return(

    <Container>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/table/:id" element={<SingleTable/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
  </Container>


  );
}

export default App;
