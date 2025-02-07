import NavBar from "./NavBar";
import {BrowserRouter,Routes,Route} from "react-router"
import Profile from "./Profile";
import Login from "./Login";
import Body from "./Body";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
      {/*Parent Route "/" is Body Component and login,profile are child route of Body which is render in outlet ex-Body.jsx*/}
      <Route path="/" element={<Body/>}>
        {/* child route of body-component */}
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
      </Route>
      </Routes>
    </BrowserRouter>

  );
}
export default App;
