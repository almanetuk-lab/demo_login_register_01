import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom";
import Login from "./components/demo_login";
import Register from "./components/demo_register";
import Profile from "./components/demo_profile";


const App = () => {
   return <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/demo_register" element={<Register />} />
        <Route path="/demo_profile" element={<Profile />} />
      </Routes>
   </>
}

export default App;