
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import MainPage from './components/pages/MainPage';
import NotFound from './components/pages/NotFound';
import SingleTable from './components/pages/SingleTable';
import Header from './components/views/Header';
import Footer from './components/views/Footer';

const App = () => {
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
