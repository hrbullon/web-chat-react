import './assets/App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from "react-router-dom";

//Components
import { Header } from './components/Header';

//pages
import { Home } from './pages/Home';
import { Contact } from './pages/contacts/Contacts';
import { Chat } from './pages/Chat';
import { Container } from 'react-bootstrap';
import { UserContext } from './context/UserContext';
import { useId } from 'react';

function App() {

  const userModel = {
    id: useId(),
    name: "John Doe",
    email: "jdoe@gmail.com"
  };

  return (
    <>
      <UserContext.Provider value={ userModel }>
        <Header></Header>
        <Container className='mt-5'>
          <div className="row">
            <div className="col col-12">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="contact" element={<Contact />} />
                <Route path="chat/:code" element={<Chat />} />
              </Routes>
            </div>
          </div>
        </Container>
      </UserContext.Provider>
    </>
  );
}

export default App;
