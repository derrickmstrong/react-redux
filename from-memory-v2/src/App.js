import './App.css';
import DogContainer from './components/AdoptDog';
import Users from './components/Users';
import Home from './components/views/Home';

function App() {
  return (
    <div className="App">
      <Home />
      <DogContainer />
      <Users />
    </div>
  );
}

export default App;
