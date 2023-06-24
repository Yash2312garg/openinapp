import './App.css';
import Main from './pages/main';
import Transaction from './pages/Transactions';
import Schedule from './pages/schedules';
import Users from './pages/users';
import Settings from './pages/settings';
import Help from './pages/help';
import Contact from './pages/contact';
import NotFoundPage from './pages/notfoundpage';
// import ReactDOM from "react-dom/client";
import {Routes, Route } from "react-router-dom";


function App() {
  return (

      <div className="App">
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/transaction" element={<Transaction/>} />
            <Route path="/schedule" element={<Schedule />}/>
            <Route path="/users" element={<Users />}/>
            <Route path="/setting" element={<Settings />}/>
            <Route path="/help" element={<Help />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
      </div>
  );
}

export default App;
