import 'bootstrap/dist/css/bootstrap.min.css';
import 'rsuite/dist/rsuite.min.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import './scss/App.scss';
import Header from "./components/layout/Header";
import {Container} from "reactstrap";
import Slider from "./components/Slider";
import FakeSlider1 from "./components/fakeSlider1";
import Footer from "./components/layout/Footer";

function App() {
  return (
      <BrowserRouter>
          <Container>
              <Header/>
              <AppRouter/>

          </Container>
          <Footer />
      </BrowserRouter>
  );
}

export default App;
