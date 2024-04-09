import MyFunctionalComponent from "./MyFunctionalComponent";
import MyClassComponent from "./MyClassComponent";

import "./App.css";

function App() {
  const component = "functional";

  return (
    <div className="App">
      {component === "functional" ? (
        <MyFunctionalComponent />
      ) : (
        <MyClassComponent />
      )}
    </div>
  );
}

export default App;
