import Questions from "./pages/Questions";
import Settings from "./pages/Settings";
import FinalScreen from "./pages/FinalScreen";
import "./App.css";
function App() {
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <Settings />
      <Questions />
      <FinalScreen />
    </div>
  );
}

export default App;
