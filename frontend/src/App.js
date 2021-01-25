import { BrowserRouter, Route } from 'react-router-dom';

// React Bootstrap
import { Container } from 'react-bootstrap';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomePage} exact />
          <Route path="/product/:id" component={ProductPage} />
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
