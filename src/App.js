import "./App.css";
import WidgetBody from "./components/WidgetBody";

function App(props) {
  return <WidgetBody state={props.state} />;
}

export default App;
