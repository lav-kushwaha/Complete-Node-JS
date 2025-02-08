import {BrowserRouter,Routes,Route} from "react-router-dom"
import Profile from "./Profile";
import Login from "./Login";
import Body from "./Body";
import {Provider} from 'react-redux'
import appStore from "./utils/appStore";
import Feed from "./Feed";

function App() {
  return (
    <Provider store={appStore}>
    <BrowserRouter basename="/">
      <Routes>
      {/*Parent Route "/" is Body Component and login,profile are child route of Body which is render in outlet ex-Body.jsx*/}
      <Route path="/" element={<Body/>}>
        {/* child route of body-component */}
        <Route path="/" element={<Feed/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="profile" element={<Profile/>}></Route>
      </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}
export default App;
