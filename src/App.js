import "./App.css";
import List from "./List";
import { colorBox } from "./api/items";

function App() {
  const items = colorBox;
  return <List items={items} />;
}

export default App;
