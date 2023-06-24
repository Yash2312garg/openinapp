import './App.css';
import Dashboard from './sidebar';
import NavBar from './navbar';
import Content from './contents';

function App() {
  return (
    <div className="App">
      <Dashboard></Dashboard>
      <NavBar></NavBar>
      <Content></Content>
    </div>
  );
}

export default App;
