import "./App.css";
import Wrapper from "./Components/Wrapper/Wrapper";
import CreateCountry from "./Components/useEffect/CreateCountry";

function App() {
  return (
    <div className="App">
      <Wrapper color="blue" width="200px">
        <CreateCountry />
      </Wrapper>
    </div>
  );
}

export default App;
