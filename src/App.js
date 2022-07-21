import './assets/App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from "react-router-dom";

//Components
import { Header } from './components/Header';

//pages
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Chat } from './pages/Chat';

function App() {

  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <div class="row mt-5">
          <div class="col col-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="contact" element={<Contact />} />
              <Route path="chat/:code" element={<Chat />} />
            </Routes>
          </div>
        </div>
      </div>   
    </div>
  );
}

export default App;
