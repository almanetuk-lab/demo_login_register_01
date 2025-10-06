import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import Profile from "./components/profile";


const App = () => {
   return <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
   </>
}

export default App;