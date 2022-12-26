import { Route, Routes } from "react-router-dom";
import Signing from "./Pages/Auth/Signing";
import Signup from "./Pages/Auth/Signup";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Signing />}></Route>
      </Routes>
    </div>
  );
}

export default App;
