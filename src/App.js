import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateEmployees from "./pages/CreateEmployees";
import EditEmployees from "./pages/EditEmployees";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/create-user" element={<CreateEmployees />}></Route>
        <Route path="/edit-user" element={<EditEmployees />}></Route>
      </Routes>
    </div>
  );
}

export default App;
