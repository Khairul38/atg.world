import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import CreateAccount from './components/CreateAccount/CreateAccount';
import SignIn from './components/SignIn/SignIn';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route path="/createAccount" element={<CreateAccount></CreateAccount>}></Route>
          <Route path="/signIn" element={<SignIn></SignIn>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
