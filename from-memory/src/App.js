import { Provider } from "react-redux";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import CustomPieContainer from "./components/CustomPieContainer";
import PieContainer from "./components/PieContainer";
import { store } from './feature/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <PieContainer />
        <CustomPieContainer />
      </div>
    </Provider>
  );
}

export default App;
